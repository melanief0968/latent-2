import { Plugin, PluginKey } from "prosemirror-state";
import { Extension } from "@tiptap/core";

const KeydownRegister = Extension.create({
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("eventHandler"),
        props: {
          // handleClick(view, pos, event) { /* … */ },
          // handleDoubleClick(view, pos, event) { /* … */ },
          handleKeyDown: (view, event) => {
            this.options.onKeyDown(event);
          },
          // … and many, many more.
          // Here is the full list: https://prosemirror.net/docs/ref/#view.EditorProps
        },
      }),
    ];
  },

  addOptions() {
    return {
      eraseChar: null,
      eraseOutputString: null,
      elapsedTimeChar: null,
      elapsedTimeOutputString: null,
      submitOnEnter: true,
      // editorInstance:
    };
  },
  addCommands() {
    return {
      submit:
        (attributes) =>
        ({ chain }) => {
          const value = getEditorOutput(this.editor, this.options);
          this.options.onSubmit({ value });

          return (
            chain()
              .clearContent(true)
              // .blur()
              .run()
          );
        },
    };
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => {
        if (this.options.submitOnEnter) this.editor.commands.submit();
        return true;
      },
      Backspace: ({ editor }) => {
        // console.log(this.editor.state)
        let { from, to } = editor.state.selection;

        if (from <= 1 && to <= 1) return true;

        if (from - to === 0) from--;

        for (let i = from; i < to; i++) deleteLastChar(i, editor, this.options);

        this.options.onErase();

        //console.log("5");

        return true;
      },
    };
  },
});

function deleteLastChar(from, editor, options) {
  // console.log(from);
  if (from < 1) return;
  let to = from + 1;
  const text = editor.state.doc.textBetween(from, to, "");
  if (text === options.eraseChar) deleteLastChar(from - 1, editor, options);
  editor.commands.deleteRange({ from, to });
  editor.commands.insertContentAt(from, options.eraseChar);
}

function getEditorOutput(
  editor,
  { eraseChar, eraseOutputString, elapsedTimeOutputString, elapsedTimeChar }
) {
  const regErase = new RegExp(eraseChar, "g");

  const regElapsedTime = new RegExp(elapsedTimeChar, "g");

  // console.log(elapsedTimeOutputString);

  let text = editor.state.doc.textContent;

  text = text.replace(regErase, eraseOutputString);
  text = text.replace(regElapsedTime, elapsedTimeOutputString);

  return text;
}

export default KeydownRegister;
