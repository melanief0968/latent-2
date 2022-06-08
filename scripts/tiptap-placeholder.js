import { Editor, Extension } from "@tiptap/core";
import { Decoration, DecorationSet } from "prosemirror-view";
import { Plugin } from "prosemirror-state";

export const Placeholder = Extension.create({
  name: "placeholder",

  addOptions: {
    emptyEditorClass: "is-editor-empty",
    emptyNodeClass: "is-empty",
    placeholder: "Write something …",
    showOnlyWhenEditable: true,
    showOnlyCurrent: true,
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          decorations: ({ doc, selection }) => {
            const active =
              this.editor.isEditable || !this.options.showOnlyWhenEditable;
            const { anchor } = selection;
            const decorations = [];

            if (!active) {
              return;
            }

            doc.descendants((node, pos) => {
              const hasAnchor = anchor >= pos && anchor <= pos + node.nodeSize;
              const isEmpty = !node.isLeaf && isNodeEmpty(node);

              // console.log(isEmpty, isNodeEmpty(node));

              if ((hasAnchor || !this.options.showOnlyCurrent) && isEmpty) {
                const classes = [this.options.emptyNodeClass];

                if (this.editor.isEmpty) {
                  classes.push(this.options.emptyEditorClass);
                }

                const decoration = Decoration.node(pos, pos + node.nodeSize, {
                  class: classes.join(" "),
                  "data-placeholder":
                    typeof this.options.placeholder === "function"
                      ? this.options.placeholder({
                          editor: this.editor,
                          node,
                        })
                      : this.options.placeholder,
                });

                decorations.push(decoration);
              }

              return false;
            });

            return DecorationSet.create(doc, decorations);
          },
        },
      }),
    ];
  },
});

function isNodeEmpty(node) {
  // const defaultContent = node.type.createAndFill()?.toJSON();
  // const content = node.toJSON();

  // console.log(
  //   `lol:(${node.textContent})`,
  //   isWhiteSpaceOnly(node.textContent),
  //   isWhiteSpaceOnly(node.type.createAndFill()?.textContent)
  // );
  // console.log(JSON.stringify(defaultContent), JSON.stringify(content));
  return isWhiteSpaceOnly(node.textContent) === isWhiteSpaceOnly(node.type.createAndFill()?.textContent)
}

function isWhiteSpaceOnly(str) {
  str = str.replace(/\u200B|\uFEFF/g, "");
  return str.trim().length === 0;
}
