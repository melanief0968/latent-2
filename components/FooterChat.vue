<template>
  <footer class="footer">
    <form @submit.prevent="onSubmit" class="input-container">
      <input class="txt_input" type="text" placeholder="Message" v-model="messageContent" />
      <button type="submit">→</button>
    </form>
  </footer>
</template>
<script>
import * as fb from "@/scripts/firebase";

export default {
  computed: {},
  data() {
    return {
      messageContent: "",
    };
  },
  methods: {
    onSubmit(ev) {
      const sentTime = this.getTime();
      const messageDatas = {
        text: this.messageContent,
        messageId: sentTime,
        currentUserID: this.$getters.currentUserID(),
        sentTime: "",
        charAmount: "",
        eraseAmount: "",
        typingSpeed: "",
        coordinates: "",
      };
      console.log(this.messageContent);

      // this.$state.test = "changed";
      //check url avec chatid + usr Id

      // fb.setValue("/conversations/-N0ZeNmMNFfIJbPqgcND/messages/" + sentTime, messageDatas);
      fb.setValue(
        "/conversations/-N0ZeNmMNFfIJbPqgcND/messages/" + sentTime,
        ""
      );
      fb.setValue("/messages/" + sentTime, messageDatas);

    },
    getTime() {
      return new Date().getTime();
    },
  },
  mounted:{

  }
};
</script>
<style lang="scss">
.input-container {
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
}

</style>
