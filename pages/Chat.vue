<template>
  <span v-touch:swipe.left="swipeHandler">
  <div class="chat-container">
    <div class="message-container" v-chat-scroll>
      <template v-for="{ message, id } in messages">
        <YellowLine
          v-if="message.messageType === 'did'"
          line-height="25"
        ></YellowLine>

        <Didascalies
          v-if="message.messageType === 'did'"
          :name="message.userName"
          :text="message.didascalie"
        ></Didascalies>
        <Message
          v-else-if="message.messageType === 'msg'"
          :key="id"
          :author="userName"
          :messageId="id"
        ></Message>
        <YellowLine
          v-else-if="message.messageType === 'time'"
          :line-height="yellowLineHeight()"
          :nbDots="getNbDots()"
        ></YellowLine>
      </template>
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
    </span>
</template>
<script>
import Message from "@/components/Message.vue";
import * as fb from "@/scripts/firebase.js";
import Didascalies from "../components/Didascalies.vue";
import YellowLine from "../components/YellowLine.vue";
import did from "@/scripts/didascalies.js";
import InputMessage from "../components/InputMessage.vue";
import { countCharOccurance } from "@/utils/string.js";
import { getAttributes } from "@tiptap/core";

export default {
  components: {
    Message,
    Didascalies,
    InputMessage,
    did,
    YellowLine,
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
      userName: "",
      did,
      inputType: "",
      gender: "",
      outputSignal: "",
      outputValue: "",
      timeBetweenMessages: 0,
    };
  },
  computed: {
    messages() {
      const messages = [];
      if (this.conversation && this.conversation.messages) {
        Object.keys(this.conversation.messages).forEach((messageId) => {
          const message = this.$getters.listenMessage(messageId);
          // console.log(message);
          // console.log(message.messageType);
          messages.push({ id: messageId, message });
        });
      }

      return messages;
    },
  },
  methods: {
    swipeHandler() {
      this.$router.replace({ path: '/book' })
    },
    getBaseMsg() {
      return {
        sendingUser: this.currentUserID,
        userName: this.$getters.user(this.currentUserID).name,
        // sentTime: this.sentTime,
      };
    },
    randomCase() {
      let cases = ["case1", "case2", "case3"];
      let random = Math.floor(Math.random() * cases.length);
      const _case = cases[random];
      //console.log(_case)
      return _case;
    },
    randomIndex() {
      let indexes = [0, 1, 2, 3, 4, 5];
      let random = Math.floor(Math.random() * indexes.length);
      this.index = indexes[random];
      return this.index;
    },

    keysCount(ev) {
      this.startElapsedTime();
      //seulement au first + enlever autres touches que les lettres et chiffres
      this.keyDownCounter++;
      if (this.keyDownCounter === 1) {
        return (this.firstKeyTime = this.getTime());
      }
      if (ev.keyCode == 32) {
        console.log("SPACE");
      }
      return;
    },

    sendDidascalie(time) {
      const didascalie = this.chooseDidascalie();

      if (!didascalie) return;

      const base = this.getBaseMsg()
      const didMessage = {
        ...base,
        messageType: "did",
        sentTime: time,
        didascalie,
      };

      this.sendMessage(didMessage);
    },

    onSubmit(event) {
      this.onSignal();
      this.getTimelaps();
      // console.log(Didascalies)
      this.stopElapsedTime();
      this.sentTime = this.getTime();
      // console.log(this.getCharAmount());
      // this.chooseOutput();
      // console.log(this.getWritingSpeed())
      // console.log(this.getTimeBetweenMessages())
      // console.log(this.getEraseAmount())
      // console.log(this.name)

      const text = event.value;
      const chatVersion = text;
      if (chatVersion == "") {
        return;
      }

      const numChars = text
        .replace(/[•|\–]+/g, "") // remove special chars
        .replace(/\s/g, "").length; // remove all spaces

      const bookVersion = text.replace(/[•|\–]+/g, (string) => {
        const { "–": eraseNumber = 0, "•": elapseNumber = 0 } =
          countCharOccurance(string);
        if (eraseNumber === 1 && elapseNumber < 1) {
          return "<i>(hésite)</i>";
        }
        if (eraseNumber === 3) {
          return "(wtf)";
        }
        // if (eraseNumber === 0 && elapseNumber > 2) {
        //   return "(wtf)";
        // }
        else {
          // return "<i>(it works)</i>";
        }
      });

      const baseMessage = this.getBaseMsg()
      const timeMessage = {
        ...baseMessage,
        messageType: "time",
        sentTime: this.sentTime++, //! to have unique id, even if same time
      };

      // ++this.sentTime;
      // this.sentTime++;
      // this.sentTime+1
      // this.sentTime+=1
      // this.sentTime=this.sentTime+1

      const textMessage = {
        ...baseMessage,
        sentTime: this.sentTime++,
        text: chatVersion,
        bookText: bookVersion,
        charAmount: this.keyDownCounter,
        eraseAmount: this.deleteKeyCounter,
        typingSpeed: this.getWritingSpeed().outputValue,
        coordinates: "",
        messageType: "msg",
      };

      // console.log(message, chatVersion);

      if (true) this.sendMessage(timeMessage);
      this.sendDidascalie(this.sentTime++);
      this.sendMessage(textMessage);
      // console.log(this.$getters.currentChatID)

      this.keyDownCounter = 0;
      this.deleteKeyCounter = 0;
      this.isChosen = false;
      return;
    },
    sendMessage(message) {
      const messageId = message.sentTime;

      fb.setValue(
        `/conversations/${this.$getters.currentChatID()}/messages/${messageId}`,
        ""
      );
      fb.setValue(`/messages/${messageId}`, message);
    },
    onSignal() {
      console.log(this.getTimelaps().dayName);
      if (this.getTimelaps().day === 1) {
        //didascalie
        this.outputSignal = "ratio";
        const DATA = {
          outputSignal: this.outputSignal,
        };
        return DATA;
      }
    },
    getTime() {
      return new Date().getTime();
    },
    getDate() {
      return new Date();
    },
    firstTime() {
      // this.$ref.editor.focus()
      let startWriting = this.getTime();
      return startWriting;
    },
    startElapsedTime() {
      this.requestElapsedTime(2500);
    },

    requestElapsedTime(millis) {
      this.stopElapsedTime();
      this.timeout = window.setTimeout(() => {
        this.onElapsedTime();
      }, millis);
    },

    onElapsedTime() {
      // this.$refs.editor.insertElapsedTime();
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
        outputSignal: "msg",
        outputValue: keydownNumber,
        inputType: "char",
      };
      if (keydownNumber <= 5 && keydownNumber >= 0) {
        RESULT.result = "positive";
      } else if (keydownNumber >= 90) {
        RESULT.result = "negative";
      } else {
      }
      return RESULT;
    },
    getEraseAmount() {
      this.deleteKeyCounter++;
      console.log("JEFFACE");
      const RESULT = {
        result: "",
        outputSignal: "msg",
        outputValue: this.deleteKeyCounter,
        inputType: "erase",
      };
      console.log(this.deleteKeyCounter);
      if (this.deleteKeyCounter <= 6 && this.deleteKeyCounter >= 4) {
        RESULT.result = "positive";
      } else if (this.deleteKeyCounter >= 10) {
        RESULT.result = "negative";
      }
      return RESULT;
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
        outputSignal: "msg",
        outputValue: wordsPerMin,
        inputType: "speed",
      };
      if (wordsPerMin <= 28) {
        RESULT.result = "negative";
      } else if (wordsPerMin >= 90) {
        RESULT.result = "positive";
      } else {
      }
      return RESULT;
    },
    getTimelaps() {
      //if 10 didascalies
      //random
      let day = this.getDate().getDay();
      let days = [
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi",
        "dimanche",
      ];
      //debut de semaine, weekend,
      //saison

      let monthName = this.getDate().toLocaleString("default", {
        month: "long",
      });

      let dayName = days[day - 1];
      let hour = this.getDate().getHours();
      let min = this.getDate().getMinutes();
      let sec = this.getDate().getSeconds();
      let month = this.getDate().getMonth() + 1;
      let year = this.getDate().getFullYear();

      const DATE = {
        hour,
        min,
        sec,
        dayName,
        monthName,
        day,
        month,
        year,
      };
      this.outputValue = { dayName, day, monthName };
      // console.log(DATE);
      return DATE;
    },
    getTimeBetweenMessages() {
      let lastMessageID;
      let beforeLastMessageID;
      this.timeBetweenMessages;

      const RESULT = {
        result: "",
        outputSignal: "msg",
        outputValue: "",
        inputType: "time",
      };
      //REECRIRE AU PROPRE AVEC STORE
      fb.listen(
        `/conversations/${this.$getters.currentChatID()}/messages/`,
        (value) => {
          const keys = Object.keys(value);
          lastMessageID = keys[keys.length - 1];
          beforeLastMessageID = keys[keys.length - 2];
          this.timeBetweenMessages = lastMessageID - beforeLastMessageID;
          let TIME = this.getTimeDatas(this.timeBetweenMessages);
          if (this.timeBetweenMessages <= 3000) {
            RESULT.result = "positive";
            RESULT.outputValue = TIME;
          } else if (this.timeBetweenMessages >= 1000 * 60 * 60) {
            RESULT.result = "negative";
            RESULT.outputValue = TIME;
          } else {
          }
        }
      );
      return RESULT;
    },
    yellowLineHeight() {
      //manque le calcul, actuellement renvoie timeBetweenMessages avec une valeur de 0, surement plus haut que ça coince
      // let height = Math.sqrt(this.timeBetweenMessages) * 0.15;
      // console.log(height)


      // for (let i = 0; i < days; i++) {
      //   const dotContainer = document.createElement("div");
      //   const dot = document.createElement("div");
      //   dotContainer.style.top = ((((i + 1) * height) / (days + 1)) - 25) + "px";
      // }
      // let rHeight = [100, 160, 200, 50, 20, 10];
      // let random = Math.floor(Math.random() * rHeight.length);
      return 300;
    },
    getNbDots() {
      //manque le calcul renvoie valeure nulle
      // let days = Math.floor(this.timeBetweenMessages / (1000 * 60 * 60 * 24));
      // console.log(days)
      return 4
    },

    intimacyLevel() {
      //!faire vrai calcul
      //  console.log(this.getTimeBetweenMessages().result)
      let level = "level1";
      if (this.getTimeBetweenMessages().result === "positive") {
        level = "level2";
      } else if (this.getTimeBetweenMessages().result === "negative") {
        level = "level1";
      } else {
        level = "level3";
      }
      // console.log("level:"+this.level)
      return level;
    },

    getResult(_array, level, _case) {
      if (_array.length > 0) {
        let pushDid = null;
        const shuffledArr = _array.sort(() => 0.5 - Math.random());
        console.log(_array, shuffledArr);
        const output = shuffledArr[0];
        console.log(output);
        //--> 'positif', 'negatif', ''
        if (output.result == "") {
          shuffledArr.shift();
          this.getResult(shuffledArr, level, _case);
        } else {
          const indexNbr =
            did[output.outputSignal][output.inputType][level][output.result][
              _case
            ].length;
          const index = Math.floor(Math.random() * indexNbr);
          console.log(
            "Didascalie : ",
            output.inputType,
            level,
            output.result,
            _case
          );
          pushDid = did[output.outputSignal][output.inputType][level][
            output.result
          ][_case][index][this.gender]({
            name: this.name,
            outputValue: output.outputValue,
          });
          return pushDid;
        }
      } else {
        return null;
      }
    },

    chooseDidascalie() {
      let _case = this.randomCase();
      const level = this.intimacyLevel();
      if (level == "level1") {
        _case = "case3";
      }
      let char = this.getCharAmount();
      let erase = this.getEraseAmount();
      let time = this.getTimeBetweenMessages();
      let speed = this.getWritingSpeed();

      const allOutputs = [char, erase, time, speed];
      return this.getResult(allOutputs, level, _case);
    },

    setTimeRatio() {
      if (this.getTimelaps().min == "58") {
        this.sentTime = this.getTime();
        console.log("its happening");
        //!OK IM LOSTTTTTTTTTTTTTTTTTTTTTTTTTTT
        const messageDatas = {
          // text: undefined,
          // bookText: undefined,
          sendingUser: this.currentUserID,
          userName: this.$getters.user(this.currentUserID).name,
          sentTime: this.sentTime,
          // charAmount: this.keyDownCounter,
          // eraseAmount: this.deleteKeyCounter,
          // typingSpeed: this.getWritingSpeed().outputValue,
          // coordinates: "",
          // messageType:"msg",
          didascalie: this.chooseDidascalie(),
        };
        console.log(messageDatas);
        // console.log(this.$getters.currentChatID)
        //   fb.setValue(
        //     `/conversations/${this.$getters.currentChatID()}/messages/${
        //       this.sentTime
        //     }`,
        //     ""
        //   );
        //   fb.setValue(`/messages/${this.sentTime}`, messageDatas);
        // }else{
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
      // const TIME = {
      //   seconds,
      //   minutes,
      //   hours,
      //   days
      // }
      const TIME = minutes;
      return TIME;
    },
  },

  beforeDestroy() {
    this.removeListener();
  },
  mounted() {
    this.name = this.$getters.user(this.currentUserID).name;
    this.gender = this.$getters.user(this.currentUserID).gender;
    // this.$refs.editor.insertElapsedTime();
    const currentChat = this.$getters.currentChatID();
    this.conversation = this.$getters.listenConversation(currentChat);
    setTimeout(() => {
      this.setTimeRatio();
    }, 5000);
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
  overflow: hidden;
  position: relative;
  margin: auto;
}
.message-container {
  overflow: scroll;
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
