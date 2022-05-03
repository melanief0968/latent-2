<template>
  <form @submit.prevent class="inputMsg">
    <!-- <input
          type="text"
          placeholder="Message"
          v-model="messageContent"
          @keydown="keysCount"
          @keydown.delete="deleteCount"
        /> -->
    <editor-content class="inputMsg__editor" :editor="editor" />
    <button type="submit" class="inputMsg__btn">→</button>
  </form>
</template>
<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import KeydownRegister from "@/scripts/KeydownRegister.js";
import StarterKit from "@tiptap/starter-kit";

const ZERO_WIDTH_SPACE = "\u200B";
const ZERO_WIDTH_NO_BREAK_SPACE = "\uFEFF";

export default {
  props: {
    eraseChar: {
      type: String,
      default: ZERO_WIDTH_SPACE,
    },
    elapsedTimeChar: {
      type: String,
      default: ZERO_WIDTH_NO_BREAK_SPACE,
    },
    eraseOutputString: {
      type: String,
      default: `*`,
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
    focus() {
      this.editor.commands.focus(); //
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
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;

  &__btn {
  }

  // BEM syntax css
  &__editor {

  }
}
</style>
