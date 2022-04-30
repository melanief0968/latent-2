<template>
  <div class="chat-container">
    <div class="message-container">
      <Message
        v-for="(value, id) in messageIds"
        :key="id"
        :messageId="id"
      ></Message>
    </div>
    <footer class="footer">
      <form @submit.prevent="onSubmit" class="input-container">
        <input type="text" placeholder="Message" v-model="messageContent" />
        <button type="submit">→</button>
      </form>
    </footer>
    <!-- //! footer here -->
    <!-- <div v-for="index of 100">new contact {{index}}</div>     -->
  </div>
</template>
<script>
import Message from "@/components/Message.vue";
import * as fb from "@/scripts/firebase.js";

export default {
  components: {
    Message,
  },
  data() {
    return {
      messageIds: {},
      removeListener: () => {},
      messageContent: "",
    };
  },
  methods: {
    onSubmit(ev) {
      const sentTime = this.getTime();
      const messageDatas = {
        text: this.messageContent,
        messageId: sentTime,
        sendingUser: this.$getters.currentUserID(),
        sentTime: "",
        charAmount: "",
        eraseAmount: "",
        typingSpeed: "",
        coordinates: "",
      };
      console.log(this.messageContent);

      // this.$store.test = "changed";
      //check url avec chatid + usr Id

      // fb.setValue("/conversation/-N0ZeNmMNFfIJbPqgcND/messages/" + sentTime, messageDatas);
      fb.setValue(
        "/conversation/-N0ZeNmMNFfIJbPqgcND/messages/" + sentTime,
        ""
      );
      fb.setValue("/messages/" + sentTime, messageDatas);
      //générer messages fb
    },
    getTime() {
      return new Date().getTime();
    },
  },

  beforeDestroy() {
    this.removeListener();
  },
  
  mounted() {
    const currentChat = "-N0ZeNmMNFfIJbPqgcND";
    //check chat par rapport à id
    this.removeListener = fb.listen(
      `/conversation/${currentChat}/messages/`,
      (messageIds) => {
        // console.log(value)
        //   console.log(value);
        this.messageIds = messageIds;

        // console.log(value["text"]);
        //   console.log('yes');
        //   unsub()
        // const keys = Object.keys(value);
        // const messageID = keys[keys.length-1];
        // const text = value[messageID]["text"];
        // console.log(text)
      }
    );

    // fb.listen("/messages/"+currentChat+"/messages/", (value) => {
    //     // console.log(value)
    //     console.log(value);
    //     // console.log(value["text"]);
    //     // const keys = Object.keys(value);
    //     // const messageID = keys[keys.length-1];
    //     // const text = value[messageID]["text"];
    //     // console.log(text)
    // });
  },
};
</script>
<style lang="scss">
.chat-container {
  // height: 80%;
  width: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  margin: auto;
}
.input-container {
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
}
.footer{
  bottom: 0;
  left: 0;
  // position: fixed;
}
</style>
