<template>
  <div class="chat-container">
    <div class="message-container">
      <template v-for="{ message, id } in messages">
        <Message v-if="true" :key="id" :messageId="id"></Message>
        <Didascalies
          v-else-if="message.type === 'didascalie'"
          :key="id"
        ></Didascalies>
      </template>
    </div>
    <footer class="footer">
      <form @submit.prevent="onSubmit" class="input-container">
        <input
          type="text"
          placeholder="Message"
          v-model="messageContent"
          @keydown="keysCount"
        />
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
import Didascalies from "../components/Didascalies.vue";

export default {
  components: {
    Message,
    Didascalies,
  },
  data() {
    return {
      // messageIds: {},
      conversation: null,
      removeListener: () => {},
      messageContent: "",
      firstKeyTime: "0",
      keyDownCounter: "0",
      spaceKeyCounter: "0",
      composingTime: "0",
    };
  },
  computed: {
    messages() {
      const messages = [];
      if (this.conversation && this.conversation.messages) {
        Object.keys(this.conversation.messages).forEach((messageId) => {
          const message = this.$getters.listenMessage(messageId);
          messages.push({ id: messageId, message });
        });
      }

      return messages;
    },
  },
  methods: {
    keysCount(ev) {
      this.firstKeyTime = this.getTime();
      //seulement au first
      this.keyDownCounter++;
      console.log(this.keyDownCounter);

      if (ev.space) {
        console.log("SPACE");
      }
      //add delete
      // add is writing
    },

    onSubmit(ev) {
      this.keyDownCounter = 0;

      const sentTime = this.getTime();
      this.composingTime = sentTime - this.firstKeyTime;
      console.log(sentTime, this.firstKeyTime, this.composingTime);
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

      // fb.setValue("/conversations/-N0ZeNmMNFfIJbPqgcND/messages/" + sentTime, messageDatas);
      fb.setValue(
        `/conversations/${this.$getters.currentChatID()}/messages/${sentTime}`,
        ""
      );
      fb.setValue(`/messages/${sentTime}`, messageDatas);
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
    // this.onKeyDown()
    const currentChat = this.$getters.currentChatID();
    //check chat par rapport à id
    this.conversation = this.$getters.listenConversation(currentChat);
    console.log(this.conversation);

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
.footer {
  bottom: 0;
  left: 0;
  // position: fixed;
}
</style>
