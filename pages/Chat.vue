<template>
  <div class="chat-container">
    <div class="message-container">
      <Message
        v-for="(value, id) in messageIds"
        :key="id"
        :messageId="id"
      ></Message>
    </div>
    <!-- //! footer here -->
    <!-- <div v-for="index of 100">new contact {{index}}</div>     -->
  </div>
</template>
<script>
import Message from "@/components/Message.vue";
import * as fb from "@/scripts/firebase.js";
import * as FIREBASE from "firebase/database";

export default {
  components: {
    Message,
  },
  data() {
    return {
      messageIds: {},
      removeListener: () => {},
    };
  },
  methods: {},
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
</style>
