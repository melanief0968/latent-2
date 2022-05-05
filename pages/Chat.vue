<template>
  <div class="chat-container">
    <div class="message-container">
      <template v-for="{ message, id } in messages" v-chat-scroll>
        <Message v-if="true" :key="id" :messageId="id"></Message>
        <Didascalies
          v-else-if="message.type === 'didascalie'"
          :key="id"
        ></Didascalies>
        <!-- <YellowLine></YellowLine> -->
      </template>
      <Didascalies ref="didascalies"></Didascalies>
    </div>
    <footer class="footerChat">
      <InputMessage
        ref="editor"
        @submit="onSubmit"
        @delete="getEraseAmount"
        @keydown="keysCount"
        @focus="firstTime"
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
import YellowLine from "../components/YellowLine.vue";
import did from "@/scripts/didascalies.js";
import InputMessage from "../components/InputMessage.vue";
import { countCharOccurance } from "@/utils/string.js";

export default {
  components: {
    Message,
    Didascalies,
    InputMessage,
    did,
    YellowLine
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
      currentUserID: this.$getters.currentUserID(),
      name: "",    
      did:did  
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
      //seulement au first + enlever autres touches que les lettres et chiffres
      this.keyDownCounter++;
      if(this.keyDownCounter === 1){
        return this.firstKeyTime = this.getTime();
      }
      if (ev.key.space) {
        console.log("SPACE");
      }
      return;


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
      // console.log(Didascalies)
      this.stopElapsedTime();
      this.sentTime = this.getTime();
      // console.log(this.getCharAmount());
      // console.log(this.getWritingSpeed())
      // console.log(this.getTimeBetweenMessages())
      console.log(this.getEraseAmount())
      // console.log(this.name)



      const chatVersion = event.value;
      if(chatVersion == ""){
        return
      }
      // console.log(chatVersion)
      const bookVersion = event.value.replace(/[•|\–]+/g, (string) => {
        const { "–": eraseNumber = 0, "•": elapseNumber = 0 } =
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

      // console.log(bookVersion, chatVersion);
      const messageDatas = {
        text: chatVersion,
        bookText: bookVersion,
        sendingUser: this.currentUserID,
        sentTime: this.sentTime,
        charAmount: this.keyDownCounter,
        eraseAmount: "",
        typingSpeed: "",
        coordinates: "",
      };
        // console.log(messageDatas,chatVersion);
        // console.log(this.$getters.currentChatID)
        fb.setValue(
          `/conversations/${this.$getters.currentChatID()}/messages/${
            this.sentTime
          }`,
          ""
        );
        fb.setValue(`/messages/${this.sentTime}`, messageDatas);

      this.keyDownCounter = 0;
      this.deleteKeyCounter = 0;

      return;
    },
    
    getTime() {
      return new Date().getTime();
    },
    firstTime(){
      // this.$ref.editor.focus()
      let startWriting = this.getTime();
      console.log("CLICK")
      return startWriting;
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
    getCharAmount() {
      //comment compter uniquement les chars ?
      let keydownNumber = this.keyDownCounter;

      const RESULT = {
        result: "",
        keydownNumber :keydownNumber
      }
      if (keydownNumber <= 5 && keydownNumber >= 0 ) {
        RESULT.result = "positive";
        RESULT.keydownNumber = keydownNumber;
      } else if (keydownNumber >= 90) {
        RESULT.result = "negative";
        RESULT.keydownNumber = keydownNumber;
      } else {
      }
      return RESULT;
    },
    getEraseAmount(){
      // this.$refs.editor.onErase();
      this.deleteKeyCounter++;
      const RESULT = {
        result: "",
        deleteKeyCounter :this.deleteKeyCounter
      }
      console.log(this.deleteKeyCounter);
      if (this.deleteKeyCounter <= 4 && this.deleteKeyCounter >= 1) {
        RESULT.result = "positive";
        RESULT.deleteKeyCounter = this.deleteKeyCounter;
      } else if (this.deleteKeyCounter >= 10) {
        RESULT.result = "negative";
        RESULT.deleteKeyCounter = this.deleteKeyCounter;
      }
      return RESULT

    },
    getWritingTime() {
      let writingTime = this.sentTime - this.firstKeyTime;
      return writingTime;
    },
    getWritingSpeed() {
      let writingTime = this.getWritingTime();
      //prettier-ignore
      let wordsPerMin = Math.floor(this.keyDownCounter * 60 / writingTime * 1000 / 5);
      const RESULT = {
        result: "",
        wordsPerMin :wordsPerMin
      }
      if (wordsPerMin <= 28) {
        RESULT.result = "negative";
        RESULT.wordsPerMin = wordsPerMin;
      } else if (wordsPerMin >= 90) {
        RESULT.result = "positive";
        RESULT.wordsPerMin = wordsPerMin;
      } else {
      }
      return RESULT;
    },

    getTimeBetweenMessages() {
      let lastMessageID;
      let beforeLastMessageID;
      let timeBetweenMessages;

      const RESULT = {
        result: "",
        timeBetweenMessages :timeBetweenMessages
      }
      //REECRIRE AU PROPRE AVEC STORE
      fb.listen(
        `/conversations/${this.$getters.currentChatID()}/messages/`,
        (value) => {
          const keys = Object.keys(value);
          lastMessageID = keys[keys.length - 1];
          beforeLastMessageID = keys[keys.length - 2];
          timeBetweenMessages = lastMessageID - beforeLastMessageID;
          let TIME = this.getTimeDatas(timeBetweenMessages)
          if (timeBetweenMessages <= 30000) {
            RESULT.result = "positive";
            RESULT.timeBetweenMessages = TIME;
          } else if (timeBetweenMessages >= 1000 * 60 * 60) {
            RESULT.result = "negative";
            RESULT.timeBetweenMessages = TIME;
          }else{}
        }
      );
      return RESULT
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
    getTimeDatas(time) {
      //hr, min, sec, day, daytime, weekday, month, year, period
      const calcSeconds = Math.floor((time / 1000) % 60);
      const calcMinutes = Math.floor((time / (1000 * 60)) % 60);
      const calcHours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const calcDays = Math.floor(time / (1000 * 60 * 60 * 24));

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
      const TIME = {
        seconds,
        minutes,
        hours, 
        days
      }
      return TIME;
    },
  },

  beforeDestroy() {
    this.removeListener();
  },

  mounted() {
    this.name = this.$getters.user(this.currentUserID).name;
    this.$refs.editor.insertElapsedTime();
    const currentChat = this.$getters.currentChatID();
    this.conversation = this.$getters.listenConversation(currentChat);

    let child = this.$refs.didascalies;
    console.log(child);
    let name = "gael";
    let _case = "case2";
    
    child.test(name,_case);
  // 
  

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
