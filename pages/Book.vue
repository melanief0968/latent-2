<template>
  <div class="book-container">
    <div class="message-container">
      <template v-for="{ message, id } in messages" v-chat-scroll>
        <Message v-if="true" :key="id" :messageId="id"></Message>
        <Didascalies
          v-else-if="message.type === 'didascalie'"
          :key="id"
        ></Didascalies>
      </template>
    </div>
    <!-- <footer class="footerChat">
      <InputMessage
        ref="editor"
        @submit="onSubmit"
        @delete="deleteCount"
        @keydown="keysCount"
      ></InputMessage>
    </footer> -->
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
      conversation: null,
      removeListener: () => {},
      messageContent: "",
      sentTime: 0,
      firstKeyTime: 0,
      keyDownCounter: 0,
      deleteKeyCounter: 0,
      spaceKeyCounter: 0,
      composingTime: 0,
      currentUserID: this.$getters.currentUserID()
      
    };
  },
  computed: {
    messages() {
      const messages = [];
      if (this.conversation && this.conversation.messages) {
        Object.keys(this.conversation.messages).forEach((messageId) => {
          const message = this.$getters.listenMessage(messageId);
          // console.log(message);
           messages.push({ id: messageId, message });
        });
      }

      return messages;
    },
    
  },
  methods: {

  },
  mounted() {

    const currentChat = this.$getters.currentChatID();
    this.conversation = this.$getters.listenConversation(currentChat);


  },
};
</script>
<style lang="scss">
.book-container {
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  margin: auto;
}

.footerBook {
 
}
</style>
