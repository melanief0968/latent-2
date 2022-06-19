<template>
  <form @submit.prevent class="inputMsg">
    <!-- <input
          type="text"
          placeholder="Message"
          v-model="messageContent"
          @keydown="keysCount"
          @keydown.delete="deleteCount"
        />  -->
    <editor-content class="inputMsg__editor" :editor="editor" />
    <button type="submit" @click="submit" class="inputMsg__btn">
      <img class="icone send" src="/img/send.png" />
    </button>
  </form>
</template>
<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import { Placeholder } from "/scripts/tiptap-placeholder.js";
import KeydownRegister from "@/scripts/KeydownRegister.js";
import StarterKit from "@tiptap/starter-kit";

const ZERO_WIDTH_SPACE = "\u200B";
const ZERO_WIDTH_NO_BREAK_SPACE = "\uFEFF";

export default {
  props: {
    placeholder: {
      type: String,
      default: "Ecrire",
    },
    eraseChar: {
      type: String,
      // default: '–' || ZERO_WIDTH_SPACE,
      default: ZERO_WIDTH_SPACE,
    },
    elapsedTimeChar: {
      type: String,
      // default: '•' || ZERO_WIDTH_NO_BREAK_SPACE,
      default: ZERO_WIDTH_NO_BREAK_SPACE,
    },
    eraseOutputString: {
      type: String,
      default: `–`,
    },
    elapsedTimeOutputString: {
      type: String,
      default: `•`,
    },
  },
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Editor({
      // content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
      extensions: [
        StarterKit,
        Placeholder.configure({
          placeholder: () => {
            return this.placeholder;
          },
        }),
        KeydownRegister.configure({
          eraseChar: this.eraseChar,
          elapsedTimeChar: this.elapsedTimeChar,

          eraseOutputString: this.eraseOutputString,
          elapsedTimeOutputString: this.elapsedTimeOutputString,

          submitOnEnter: true,

          onSubmit: this.onSubmit,
          onKeyDown: this.onKeyDown,
          onErase: this.onErase,
        }),
      ],
    });
  },
  methods: {
    onSubmit(event) {
      this.$emit("submit", event);
    },
    onErase(event) {
      this.$emit("delete", event);
    },
    onKeyDown(event) {
      this.$emit("keydown", event);
    },
    focus(event) {
      this.editor.commands.focus(); //
      this.$emit("focus", event);
    },

    blur() {
      this.editor.commands.blur(); //
    },

    insertText(text) {
      let { from } = this.editor.state.selection;
      this.editor.commands.insertContentAt(from, text);
    },

    insertElapsedTime() {
      this.insertText(this.elapsedTimeChar);
    },

    submit() {
      this.editor.commands.submit();
    },
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>
<style lang="scss">
.inputMsg {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  margin-left: 5%;

  &__btn {
  }

  // BEM syntax css
  &__editor {
    width: 80%;

    [data-placeholder]:before {
      content: attr(data-placeholder);
      float: left;
      color: #adb5bd;
      pointer-events: none;
      height: 0;
    }
    p {
      max-height: 75px;
      min-height: 25px;
      overflow: scroll;
    }
  }
}
.ProseMirror {
  border: 0.9px solid $contrast-color;
  border-radius: 7px;
  width: 90%;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
}
.ProseMirror:focus {
  /* height: fit-content;*/
  outline: none !important;
  border: 2px solid $color-main;
}
.contenteditable {
}
.send {
  height: 28px;
}
</style>
