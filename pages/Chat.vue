<template>
  <div class="chat-container">
    <div class="message-container">
      <template v-for="{ message, id } in messages" v-chat-scroll>
        <Message v-if="true" :key="id" :messageId="id"></Message>
        <Didascalies
          v-else-if="message.type === 'didascalie'"
          :key="id"
        ></Didascalies>
      </template>
    </div>
    <footer class="footerChat">
      <InputMessage
        ref="editor"
        @submit="onSubmit"
        @delete="deleteCount"
        @keydown="keysCount"
      ></InputMessage>
    </footer>
    <!-- //! footer here -->
    <!-- <div v-for="index of 100">new contact {{index}}</div>     -->
  </div>
</template>
<script>
import Message from "@/components/Message.vue";
import * as fb from "@/scripts/firebase.js";
import Didascalies from "../components/Didascalies.vue";
import InputMessage from "../components/InputMessage.vue";
import { countCharOccurance } from "@/utils/string.js";

export default {
  components: {
    Message,
    Didascalies,
    InputMessage,
  },
  data() {
    return {
      // messageIds: {},
      conversation: null,
      removeListener: () => {},
      messageContent: "",
      sentTime: 0,
      firstKeyTime: 0,
      keyDownCounter: 0,
      deleteKeyCounter: 0,
      spaceKeyCounter: 0,
      composingTime: 0,
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
    keysCount(ev) {
      this.startElapsedTime();
      return;

      this.firstKeyTime = this.getTime();
      //seulement au first + enlever autres touches que les lettres et chiffres
      this.keyDownCounter++;
      console.log(this.keyDownCounter);

      if (ev.space) {
        console.log("SPACE");
      }
      //add delete
      // add is writing
    },
    deleteCount(ev) {
      return;

      this.deleteKeyCounter++;
      console.log(this.deleteKeyCounter);
      if (this.deleteKeyCounter <= 4 && this.deleteKeyCounter >= 1) {
        return "positive";
      } else if (this.deleteKeyCounter >= 10) {
        return "negative";
      }
    },

    onSubmit(event) {
      // console.log(ev);
      this.stopElapsedTime();
      this.sentTime = this.getTime();
      const chatVersion = event.value;
      console.log(chatVersion)
      const bookVersion = event.value.replace(/[•|\*]+/g, (string) => {
        const { "*": eraseNumber = 0, "•": elapseNumber = 0 } =
          countCharOccurance(string);

        // console.log(eraseNumber, elapseNumber);

        if (eraseNumber === 1 && elapseNumber < 1) {
          return "<i>(hésite)</i>";
        
        }
        // if (eraseNumber === 0 && elapseNumber > 2) {
        //   return "(wtf)";
        // }
        // if (eraseNumber === 0 && elapseNumber > 2) {
        //   return "(wtf)";
        // }
        else{

          return "<i>(it works)</i>";
        }
      });

      console.log(bookVersion, chatVersion);
      const messageDatas = {
        text: chatVersion,
        bookText: bookVersion,
        sendingUser: this.$getters.currentUserID(),
        sentTime: this.sentTime,
        charAmount: this.keyDownCounter,
        eraseAmount: "",
        typingSpeed: "",
        coordinates: "",
      };
        console.log(messageDatas,chatVersion);
        // console.log(this.$getters.currentChatID)
        fb.setValue(
          `/conversations/${this.$getters.currentChatID()}/messages/${
            this.sentTime
          }`,
          ""
        );
        fb.setValue(`/messages/${this.sentTime}`, messageDatas);

      return;

      this.composingTime = this.sentTime - this.firstKeyTime;
      console.log(this.sentTime, this.firstKeyTime, this.composingTime);

      // const messageDatas = {
      //   text: this.messageContent,
      //   sendingUser: this.$getters.currentUserID(),
      //   sentTime: this.sentTime,
      //   charAmount: this.keyDownCounter,
      //   eraseAmount: "",
      //   typingSpeed: "",
      //   coordinates: "",
      // };
      this.keyDownCounter = 0;

      // this.$store.test = "changed";
      //check url avec chatid + usr Id

      // fb.setValue("/conversations/-N0ZeNmMNFfIJbPqgcND/messages/" + sentTime, messageDatas);
      //générer messages fb
    },
    
    getTime() {
      return new Date().getTime();
    },
    startElapsedTime() {
    this.requestElapsedTime(2000);
  },

    requestElapsedTime(millis) {
      this.stopElapsedTime();
      this.timeout = window.setTimeout(() => {
        this.onElapsedTime();
      }, millis);
    },

    onElapsedTime() {
      this.$refs.editor.insertElapsedTime();
      this.requestElapsedTime(800); // ms
    },

    stopElapsedTime() {
      window.clearTimeout(this.timeout);
    },
    getCharAmount() {},
    getWritingTime() {},
    getWritingSpeed() {},
    getTimeBetweenMessages() {
      // fb.listen(
      //   `/conversations/${this.$getters.currentChatID()}/messages/`,
      //   (value) => {
      //     const keys = Object.keys(value);
      //     const lastMessageID = keys[keys.length - 1];
      //     const beforeLastMessageID = keys[keys.length - 2];
      //     const timeBetweenMessages = lastMessageID - beforeLastMessageID;
      //     if (timeBetweenMessages <= 30000) {
      //       return "positive";
      //     } else if (timeBetweenMessages >= 1000 * 60 * 60) {
      //       return "negative";
      //     }
      //   }
      // );
    },
    pushCoeur() {},
    chooseCase() {
      // this.case1();
    },
    case1() {
      if (this.getTimeBetweenMessages() == "positive") {
        //push did ++
      } else if (this.getTimeBetweenMessages() == "negative") {
        //push didascalie --
      } else {
      }
    },
    case2() {
      if (this.deleteCount() == "positive") {
        //push did ++
      } else if (this.deleteCount() == "negative") {
        //push didascalie --
      } else {
      }
    },
    getTimeDatas() {
      //hr, min, sec, day, daytime, weekday, month, year, period
      const calcSeconds = Math.floor((this.sentTime / 1000) % 60);
      const calcMinutes = Math.floor((this.sentTime / (1000 * 60)) % 60);
      const calcHours = Math.floor((this.sentTime / (1000 * 60 * 60)) % 24);
      const calcDays = Math.floor(this.sentTime / (1000 * 60 * 60 * 24));

      let seconds = calcSeconds + " secondes";
      let minutes = calcMinutes + " minutes";
      let hours = calcHours + " heures";
      let days = calcDays + " jours";

      if (calcMinutes < 1 && calcHours < 1 && calcDays < 1) {
        minutes = "";
        hours = "";
        days = "";
      }
      if (calcHours < 1 && calcDays < 1) {
        hours = "";
        days = "";
      }
      if (calcDays < 1) {
        days = "";
      }
      return seconds, minutes, hours;
    },
  },

  beforeDestroy() {
    this.removeListener();
  },

  mounted() {
    this.$refs.editor.insertElapsedTime();
    console.log(this.$refs.editor.insertElapsedTime())
    // this.getTimeBetweenMessages();
    const currentChat = this.$getters.currentChatID();
    this.conversation = this.$getters.listenConversation(currentChat);
    // console.log(this.conversation);

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
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  margin: auto;
}

.footerChat {
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: $font-main;
  background: $background-color;
  position: fixed;
}
</style>
