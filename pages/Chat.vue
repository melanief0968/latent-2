<template>
  <!-- <div v-touch:swipe.left="swipeHandler"> -->
  <div class="chat-container">
    <div
      class="message-container"
      v-chat-scroll="{
        smooth: true,
        notSmoothOnInit: true,
        scrollonremoved: true,
      }"
    >
      <div class="item"></div>
      <template v-for="{ message, id } in messages">
        <Didascalies
          :icon="message.didType"
          v-if="message.messageType === 'did'"
          :key="message.sentTime"
          :name="message.userName"
          :text="message.didascalie"
          :contact="contactName"
        ></Didascalies>
        <Didascalies
          v-if="message.messageType === 'didScene'"
          :key="message.sentTime"
          :name="message.userName"
          :text="message.didascalie"
        ></Didascalies>
        <Didascalies
          v-if="message.messageType === 'didSceneSent'"
          :key="message.sentTime"
          :name="message.userName"
          :text="message.sceneSentence"
        ></Didascalies>

        <YellowLine
          v-if="message.messageType === 'did'"
          line-height="2"
        ></YellowLine>

        <Message
          v-else-if="message.messageType === 'msg'"
          :key="id"
          :author="userName"
          :messageId="id"
          :sentTime="message.textTime"
        ></Message>

        <YellowLine
          v-else-if="message.messageType === 'time'"
          :key="message.sentTime"
          :line-height="message.lineHeight"
          :nbDots="message.dotsNum"
          :grayDots= "message.grayDot"
        ></YellowLine>
      </template>
      <div class="item2"></div>
    </div>

    <footer class="footerChat">
      <InputMessage
        ref="editor"
        :placeholder="placeholder"
        @submit="onSubmit"
        @delete="getEraseAmount"
        @keydown="keysCount"
        @focus="firstTime"
      ></InputMessage>
    </footer>
    <!-- //! footer here -->
    <!-- <div v-for="index of 100">new contact {{index}}</div>     -->
  </div>
  <!-- </div> -->
</template>
<script>
import Message from "@/components/Message.vue";
import * as fb from "@/scripts/firebase.js";
import Didascalies from "../components/Didascalies.vue";
import YellowLine from "../components/YellowLine.vue";
import did from "@/scripts/didascalies.js";
import InputMessage from "../components/InputMessage.vue";
import { countCharOccurance } from "@/utils/string.js";
import * as location from "@/scripts/location.js";
import { getAttributes } from "@tiptap/core";
import * as calc from "@/scripts/calc.js";
// import * as bot from "@/scripts/botMsg.js";
import bot from "@/scripts/botMsg.js";

const GUIDE_BOT_ID = "-N4T2UM-9P5zeNlZwlrQ"

export default {
  components: {
    Message,
    Didascalies,
    InputMessage,
    did,
    YellowLine,
    bot,
  },
  data() {
    return {
      placeholder: 'Ecrire',
      // messageIds: {},
      conversation: null,
      removeListener: () => {},
      messageContent: "",
      sentTime: 0,
      firstKeyTime: 0,
      keyDownCounter: 0,
      deleteKeyCounter: 0,
      currentUserID: this.$getters.currentUserID(),
      name: "",
      userName: "",
      did,
      inputType: "",
      gender: "",
      outputSignal: "",
      outputValue: "",
      timeBetweenMessages: 0,
      didType: "",
      charAmount: 0,
      eraseAmount: 0,
      totalErase: 0,
      contactName: this.contactName,
      afterDelay: false,
      lat: 0,
      lng: 0,
      cityHasChanged: false,
      lastMsgTime: 0,
      city: this.$getters.currentCity(),
      distance: "quelques",
      chatID:"",
      userSubmit: false
    };
  },
  computed: {
    messages() {
      const messages = [];
      // this.loadingMsg = true;
      if (this.conversation && this.conversation.messages) {
        Object.keys(this.conversation.messages).forEach((messageId) => {
          const message = this.$getters.listenMessage(messageId);
          // console.log(message);
          // console.log(message.messageType);
          // if (this.$route.name === "Book") {
          //   // if(message.messageType == "msg" || message.messageType == "did"){
          //   //   messages.push({ id: messageId, message });
          //   // }
          // }else{
          messages.push({ id: messageId, message });
          // }
        });
      }

      // setTimeout(() => {
      // }, 2000);

      // console.log(messages.length)

      return messages;
    },
  },
  methods: {
    swipeHandler() {
      this.$router.replace({ path: "/book" });
    },
    getBaseMsg() {
      return {
        sendingUser: this.currentUserID,
        userName: this.$getters.user(this.currentUserID).name,
        // sentTime: this.sentTime,
      };
    },
    randomCase() {
      let cases = ["case1", "case2", "case3", "case4", "case5"];
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

    sendDidascalie(time) {
      const didascalie = this.chooseDidascalie();
      // console.log(didascalie)
      if (!didascalie) {
        return;
      }

      const base = this.getBaseMsg();
      const didMessage = {
        ...base,
        messageType: "did",
        sentTime: time,
        didascalie,
        didType: this.didType,
      };

      this.sendMessage(didMessage);
    },
    keysCount(ev) {
      this.startElapsedTime();
      //seulement au first + enlever autres touches que les lettres et chiffres
      this.keyDownCounter++;
      if (this.keyDownCounter === 1) {
        return (this.firstKeyTime = this.getTime());
      }
    },
    onSubmit(event) {
      //TODO EDIT RANDOM PLACEHOLDER
      this.placeholder = 'Ecrire';
      // console.log('City has changed', value);
      if (this.cityHasChanged) {
        // send message didascalie
        this.cityHasChanged = false;
      }
      this.lastMsgTime = this.getTime();

      this.outputSignal = "msg";
      // this.onSignal();
      this.getTimelaps();

      this.stopElapsedTime();
      this.sentTime = this.getTime();
      // console.log("time of msg: " + this.sentTime)dfghjkl

      const text = event.value;
      const chatVersion = text;
      if (chatVersion == "") {
        return;
      }

      // const numChars = text
      this.charAmount = text
        .replace(/[•|\–]+/g, "") // remove special chars
        .replace(/\s/g, "").length; // remove all spaces

      const bookVersion = text.replace(/[•|\–]+/g, (string) => {
        const { "–": eraseNumber = 0, "•": elapseNumber = 0 } =
          countCharOccurance(string);
        if (eraseNumber === 3) {
          return " <i>(prends un instant pour reformuler)</i> ";
        }
        if (eraseNumber === 4) {
          return " <i>(reformule)</i> ";
        }
        if (eraseNumber === 5) {
          return " <i>(se corrige)</i> ";
        }
        if (eraseNumber === 6) {
          return " <i>(se rectifie)</i> ";
        }
        if (eraseNumber === 7) {
          return " <i>(se reprend)</i> ";
        }
        if (eraseNumber === 8) {
          return " <i>(se ravise, puis continue)</i> ";
        }
        if (eraseNumber === 9) {
          return " <i>(hésite un instant)</i> ";
        }
        if (eraseNumber > 10) {
          return " <i>(revient sur ses propos)</i> ";
        }
        if (elapseNumber === 3) {
          return " <i>(s'arrête un instant)</i> ";
        }
        if (elapseNumber === 4) {
          return " <i>(lève la tête avant de continuer)</i> ";
        }
        if (elapseNumber === 5) {
          return " <i>(distrait)</i> ";
        }
        if (elapseNumber === 6) {
          return " <i>(réfléchit)</i> ";
        }
        if (elapseNumber === 7) {
          return " <i>(est hésitant)</i> ";
        }
        if (elapseNumber === 8) {
          return " <i>(reprend ses esprits)</i> ";
        }
        if (elapseNumber === 9) {
          return " <i>(est embarrasé)</i> ";
        }
        if (elapseNumber > 10) {
          return " <i>(fait une longue pause)</i> ";
        }
        if (eraseNumber === 3 && elapseNumber < 1) {
          return " <i>(marmone puis continue)</i> ";
        }
        if (eraseNumber === 5 && elapseNumber < 2) {
          return "<i>(décontenancé)</i>";
        } else if (eraseNumber < 1 && elapseNumber < 1) {
          return " <i>(it works)</i> ";
        } else {
          return "";
        }
      });

      const baseMessage = this.getBaseMsg();
      const timeMessage = {
        ...baseMessage,
        messageType: "time",
        sentTime: this.sentTime++, //! to have unique id, even if same time
        lineHeight: this.yellowLineHeight().height,
        dotsNum: this.yellowLineHeight().days,
        grayDot: 4,
      };
      const sceneTime = this.sentTime + 2;
      const didascalieTime = this.sentTime + 5;
      // console.log(message, chatVersion);
      const textTime = this.yellowLineHeight().textTime;

      const textMessage = {
        ...baseMessage,
        sentTime: this.sentTime + 6,
        text: chatVersion,
        bookText: bookVersion,
        charAmount: this.charAmount,
        eraseAmount: this.deleteKeyCounter,
        typingSpeed: this.getWritingSpeed().outputValue,
        coordinates: "",
        messageType: "msg",
        textTime,
      };
      if (true) this.sendMessage(timeMessage);
      if(this.getOtherUser() != GUIDE_BOT_ID){
        this.changeScene(sceneTime);
        this.sendDidascalie(didascalieTime);
      }
      this.sendMessage(textMessage);
      // console.log(this.$getters.currentChatID)
      this.userSubmit = true
      this.deleteKeyCounter = 0;
      this.keyDownCounter = 0;
      this.isChosen = false;
      return;
    },

    setFirstScene() {
      this.sentTime = this.getTime();
      const didascalie = "Acte I, scène I";
      let sentenceType = "firstScene";
      const sceneSentence = this.getSceneSentence(sentenceType);
      const userName = this.$getters.user(this.currentUserID).name
      const firstConnexion = `${this.getDate().getDate()} ${this.getTimelaps().monthName} ${this.getTimelaps().year}`
      const introBot = `${userName} arrive pour la première fois le ${firstConnexion}.`;
      const base = this.getBaseMsg();
      const didMessage = {
        ...base,
        messageType: "didScene",
        sentTime: this.sentTime,
        didascalie,
        // didType:this.didType
      };
      const sceneSentenceDid = {
        ...base,
        messageType: "didSceneSent",
        sentTime: this.sentTime + 2,
        sceneSentence,
      };
      const introDidBot = {
        ...base,
        messageType: "didScene",
        sentTime: this.sentTime + 2,
        didascalie:introBot,
      };
      
      this.sendMessage(didMessage);

      if(this.getOtherUser() == GUIDE_BOT_ID){
        this.sendMessage(introDidBot);
      }else{
        this.sendMessage(sceneSentenceDid);
      }

      //   let chatID = this.$getters.currentChatID()
      //   let conversation = this.$getters.listenConversation(chatID)
      //   const messages = [];
      //   if (conversation && conversation.messages) {
      //   Object.keys(conversation.messages).forEach((messageId) => {
      //    const message = this.$getters.listenMessage(messageId);
      //     if(message.messageType == "msg"){
      //      return
      //     }
      //   });
      // }else{
      //   //send didascalie Acte I scene I
      // }
    },
    setScenes() {
      let scenes = [
        "scène I",
        "scène II",
        "scène III",
        "scène IV",
        "scène V",
        "scène VI",
        "scène VII",
        "scène VIII",
        "scène IX",
        "scène X",
      ];
      let acts = [
        "Acte I",
        "Acte II",
        "Acte III",
        "Acte IV",
        "Acte V",
        "Acte VI",
        "Acte VII",
        "Acte VIII",
        "Acte IX",
        "Acte X",
      ];
      let chatID = this.$getters.currentChatID();
      let currentSceneIndex =
        this.$getters.listenConversation(chatID).sceneStage;
      let currentActIndex = this.$getters.listenConversation(chatID).actStage;
      let newSceneIndex = currentSceneIndex;
      let newActIndex = currentActIndex;
      let setScene = scenes[newSceneIndex];
      let setAct = acts[newActIndex];
      let hasChanged = false;
      let SCENES_DATA;
      //*CHANGE SCENE
      let sceneExist = this.$getters.listenConversation(chatID).sceneStage;
      // console.log(this.$getters.listenConversation(chatID).sceneStage);
      if (sceneExist != undefined) {
        // console.log("THERE IS SCENES");
        if (this.getEllapseTime() >= 1000 * 60 * 60 * 12) {
          //1000 * 60 * 60 *12
          hasChanged = true;
          newSceneIndex = currentSceneIndex + 1;
          if (newSceneIndex == 10) {
            newSceneIndex = 0;
            newActIndex = currentActIndex + 1;
          } else {
          }
        } else if (this.getEllapseTime() >= 1000 * 60 * 60 * 24) {
          //
          hasChanged = true;
          newSceneIndex = 0;
          newActIndex = currentActIndex + 1;
        }
        setScene = scenes[newSceneIndex];
        setAct = acts[newActIndex];
        SCENES_DATA = {
          setScene,
          newSceneIndex,
          setAct,
          newActIndex,
          hasChanged,
        };
        // console.log(SCENES_DATA);
        return SCENES_DATA;
      } else if (!sceneExist) {
        // console.log("NO SCENEC");
        return (SCENES_DATA = {
          hasChanged: false,
        });
        return;
      }

      // (`/messages/${messageId}`, message)

      // if(this.getEllapseTime() >= 2000 && nbMessages >=50){
      //     scene = [0]
      //     acte = actes[i+1]
      //     return acte + scene
      // }else if (this.getEllapseTime() >=10000){
      //   scene = [0]
      //     acte = actes[i+1]
      //     return acte + scene
      // }
    },
    changeScene(time) {
      if (this.setScenes().hasChanged == true) {
        // console.log("it was true");
        let chatID = this.$getters.currentChatID();
        fb.setValue(
          `/conversations/${chatID}/sceneStage/`,
          this.setScenes().newSceneIndex
        );
        fb.setValue(
          `/conversations/${chatID}/actStage/`,
          this.setScenes().newActIndex
        );
        this.sentTime = this.getTime();
        console.log("time of scene: " + this.sentTime);
        const didascalie = `${this.setScenes().setAct}, ${
          this.setScenes().setScene
        }`;
        let timeBetweenMessages = this.getEllapseTime();
        let timeData = calc.getTimeDatas(timeBetweenMessages);
        const didascalieTime = `${timeData} passent.`;

        let sentenceType = "scene";
        const sceneSentence = this.getSceneSentence(sentenceType);

        const base = this.getBaseMsg();

        const didMessage = {
          ...base,
          messageType: "didScene",
          sentTime: time,
          didascalie,
        };
        // console.log(sceneSentence)
        const didTimeMessage = {
          ...base,
          messageType: "didTime",
          sentTime: time + 1,
          didascalieTime,
        };
        const sceneSentenceDid = {
          ...base,
          messageType: "didSceneSent",
          sentTime: time + 2,
          sceneSentence,
        };
        // console.log(sceneSentence)
        if(this.getOtherUser() != GUIDE_BOT_ID){
          this.sendMessage(didMessage);
          this.sendMessage(didTimeMessage);
          this.sendMessage(sceneSentenceDid);
        }
        // console.log("scene: " + didMessage.sentTime);
        // console.log("ellapsed Time: " + didTimeMessage.sentTime);
        // console.log("commentaire SCÈNE: " + sceneSentenceDid.sentTime);

        // console.log(
        //   this.$getters.listenConversation(chatID).sceneStage,
        //   this.$getters.listenConversation(chatID).actStage
        // );
      } else {
        return;
      }
    },
    getSceneSentence(type) {
      let pushScene = null;
      const indexNbr = did["initScenes"][type].length;
      const index = Math.floor(Math.random() * indexNbr);
      pushScene = did["initScenes"][type][index]();
      return pushScene;
    },
    yellowLineHeight() {
      let timeBetweenMessages = this.getEllapseTime();
      if (timeBetweenMessages) {
        let timeLineData = Math.floor(timeBetweenMessages / 1000);
        // console.log("temps yellowline" + timeLineData)
        let textTime = "2h";
        if (timeLineData <= 60) {
          textTime = `${timeLineData}sec`;
        } else if (timeLineData >= 61 && timeLineData <= 6000) {
          textTime = `${Math.floor(timeLineData / 60)}min`;
        } else if (timeLineData >= 6001 && timeLineData <= 86400) {
          textTime = `${Math.floor(timeLineData / (60 * 60))}h`;
        } else if (timeLineData > 86401) {
          textTime = `${Math.floor(timeLineData / (60 * 60 * 24))}j`;
        }
        // console.log(timeLineData)
        // console.log(timeBetweenMessages)

        const calcDays = Math.floor(
          timeBetweenMessages / (1000 * 60 * 60 * 24)
        );
        let days = calcDays;
        let hours = 1;
        if (days < 1) {
          days = 0;
        }
        // console.log(days)
        // let height
        // for(let i = 0; i< days; i++){
        // height = ((((i + 1) * height) / (days + 1)) - 25)
        // }
        let height = Math.sqrt(timeBetweenMessages) * 0.009;
        if (height <= 2.5) {
          height = 2.6;
        }
        // console.log(height)

        const LINE_DATAS = {
          height,
          days,
          textTime,
          hours
        };
        return LINE_DATAS;
      } else {
        const LINE_DATAS = {
          height: 2,
          days: 0,
          textTime: "",
          // hours
        };

        console.log(LINE_DATAS);
        return LINE_DATAS;
      }

      // for (let i = 0; i < days; i++) {
      //   const dotContainer = document.createElement("div");
      //   const dot = document.createElement("div");
      //   dotContainer.style.top = ((((i + 1) * height) / (days + 1)) - 25) + "px";
      // }
    },

    sendMessage(message) {
      const messageId = message.sentTime;
      const chatId = this.$getters.currentChatID();
      fb.setValue(`/conversations/${chatId}/messages/${messageId}`, "");

      fb.setValue(
        `/users/${this.getOtherUser()}/unreadchats/${chatId}/${messageId}`,
        ""
      );

      console.log(this.getOtherUser());
      fb.setValue(`/messages/${messageId}`, message);
    },
    onSignal() {
      // console.log(this.getTimelaps().dayName);
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
      this.requestElapsedTime(5000);
    },

    requestElapsedTime(millis) {
      this.stopElapsedTime();
      this.timeout = window.setTimeout(() => {
        this.onElapsedTime();
      }, millis);
    },

    onElapsedTime() {
      this.$refs.editor.insertElapsedTime();
      console.log("ELLAPPSSE");
      this.requestElapsedTime(2000); // ms
    },

    stopElapsedTime() {
      window.clearTimeout(this.timeout);
    },
    getCharAmount() {
      //comment compter uniquement les chars ?
      let charAmount = this.charAmount;
      const RESULT = {
        result: "",
        outputSignal: "msg",
        outputValue: charAmount,
        inputType: "char",
        didType: "msg",
      };
      if (charAmount <= 5 && charAmount >= 1) {
        RESULT.result = "positive";
      } else if (charAmount >= 90) {
        RESULT.result = "negative";
      } else {
      }
      return RESULT;
    },
    getEraseAmount() {
      this.deleteKeyCounter++;
      this.totalErase = this.deleteKeyCounter - 1;
      // console.log("JEFFACE");
      const RESULT = {
        result: "",
        outputSignal: "msg",
        outputValue: this.totalErase,
        inputType: "erase",
        didType: "msg",
      };
      // console.log(this.totalErase);
      if (this.totalErase <= 3 && this.totalErase >= 1) {
        RESULT.result = "positive";
      } else if (this.totalErase >= 10) {
        RESULT.result = "negative";
      }
      // console.log(RESULT);
      return RESULT;
    },
    getWritingTime() {
      let writingTime = this.sentTime - this.firstKeyTime;
      return writingTime;
    },
    getWritingSpeed() {
      let writingTime = this.getWritingTime();
      //prettier-ignore
      let wordsPerMin = Math.floor(this.charAmount * 60 / writingTime * 1000 / 5);
      const RESULT = {
        result: "",
        outputSignal: "msg",
        outputValue: wordsPerMin,
        inputType: "speed",
        didType: "time",
      };
      if (wordsPerMin <= 28 && wordsPerMin >= 1) {
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
    getEllapseTime() {
      if (this.conversation && this.conversation.messages) {
        const messageArray = [];
        Object.keys(this.conversation.messages).forEach((messageId) => {
          const message = this.$getters.listenMessage(messageId);
          if (message.messageType == "msg") {
            // console.log(message)
            let messagesTime = message.sentTime;
            messageArray.push(messagesTime);
          }
        });
        // let lastMsgID = messageArray[messageArray.length - 1];
        let lastMsgID = this.lastMsgTime;
        let beforeLastMsgID = messageArray[messageArray.length - 1];

        let timeBetweenMessages = lastMsgID - beforeLastMsgID;
        // console.log("TIME ENTRE MSG= " + timeBetweenMessages/1000)
        return timeBetweenMessages;
      }
    },

    getTimeBetweenMessages() {
      // console.log(this.getEllapseTime())
      let timeBetweenMessages = this.getEllapseTime();
      const RESULT = {
        result: "",
        outputSignal: "msg",
        outputValue: "",
        inputType: "time",
        didType: "time",
      };
      let TIME = calc.getTimeDatas(timeBetweenMessages);
      if (timeBetweenMessages <= 1000) {
        RESULT.result = "positive";
        RESULT.outputValue = "quelques instants";
      } else if (timeBetweenMessages <= 3000 && timeBetweenMessages >= 1001) {
        RESULT.result = "positive";
        RESULT.outputValue = TIME;
      } else if (timeBetweenMessages >= 1000 * 60 * 60) {
        RESULT.result = "negative";
        RESULT.outputValue = TIME;
      } else {
      }
      // console.log(RESULT)
      return RESULT;
    },
    getTimeTrigger() {
      const RESULT = {
        result: "positive",
        outputSignal: "ratio",
        outputValue: "test time",
        inputType: "timeTrigger",
        didType: "time",
      };
      return RESULT;
    },
    getLocationTrigger() {
      // if(this.cityHasChanged == true){
      let city = this.city;
      // console.log("LOCATION IS TRIGGERED")
      const RESULT = {
        result: "positive",
        outputSignal: "dataChange",
        outputValue: city,
        inputType: "city",
        didType: "loca",
      };
      console.log(RESULT);
      return RESULT;
      // }else {
      //    let city = this.city
      //   // console.log("LOCATION IS TRIGGERED")
      //     const RESULT = {
      //       result: "",
      //       outputSignal: "dataChange",
      //       outputValue: "no result",
      //       inputType: "city",
      //       didType: "loca",
      //     };
      //     console.log(RESULT)
      //     return RESULT;
      // }
    },
    distDatas() {
      let distance = this.distance;
      if (distance < 1) {
        distance = `${distance * 1000}m`;
      } else if (distance >= 1) {
        distance = `${distance}km`;
      }
      console.log(distance);
      const RESULT = {
        result: "positive",
        outputSignal: "dataChange",
        outputValue: distance,
        inputType: "distance",
        didType: "loca",
      };
      console.log(RESULT);
      return RESULT;
    },

    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },

    getResult(_array, level, _case, _counter) {
      if (_array.length > 0) {
        let pushDid = null;
        this.shuffle(_array); //_array.sort(() => 0.5 - Math.random());
        const shuffledArr = _array;
        // console.log(_array, shuffledArr);
        const output = shuffledArr[0];
        //--> 'positif', 'negatif', ''
        if (level == "level1") {
          if (output.result != "") {
            output.result = "positive";
          }
        }
        if (output.result == "") {
          shuffledArr.shift();
          console.log(shuffledArr);
          _counter++;
          return this.getResult(shuffledArr, level, _case, _counter);
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
          this.didType = output.didType;
          pushDid = did[output.outputSignal][output.inputType][level][
            output.result
          ][_case][index][this.gender]({
            name: this.name,
            contact: this.contactName,
            outputValue: `<strong>${output.outputValue}</strong>`,
          });
          console.log(pushDid);
          return pushDid;
        }
      } else {
        return null;
      }
    },

    chooseDidascalie() {
      let _case = this.randomCase();
      const level = calc.intimacyLevel(this.name, this.contactName);
      if (level == "level1") {
        _case = "case3";
      }

      let char = this.getCharAmount();
      let erase = this.getEraseAmount();
      let time = this.getTimeBetweenMessages();
      let speed = this.getWritingSpeed();
      console.log(this.outputSignal);
      let timeTrigger = this.getTimeTrigger();
      let locationTrigger = this.getLocationTrigger();
      let distTrigger = this.distDatas();

      if (this.outputSignal == "msg") {
        // console.log("ITS A MESSAGE");
        const allOutputs = [char, erase, time, speed];
        let test_counter = 1;
        let resultat = this.getResult(allOutputs, level, _case, test_counter);
        // console.log("resultat",resultat);
        return resultat; //this.getResult(allOutputs, level, _case);
      } else if (this.outputSignal == "ratio") {
        console.log("ITS A RATIO");
        const allOutputs = [timeTrigger];
        return this.getResult(allOutputs, level, _case);
      } else if (this.outputSignal == "dataChange") {
        console.log("ITS A DATACHANGED");
        const allOutputs = [locationTrigger, distTrigger];
        _case = "case3";
        return this.getResult(allOutputs, level, _case);
      }
    },

    setTimeRatio() {
      if(this.getOtherUser() != GUIDE_BOT_ID){
        if (this.getTimelaps().min == "58") {
          this.sentTime = this.getTime();
          console.log("its happening");
          this.outputSignal = "ratio";
          this.sendDidascalie(this.sentTime);
        } else if (this.getTimelaps().min == "34") {
          this.sentTime = this.getTime();
          console.log("its time");
          this.outputSignal = "dataChange";
          this.city = this.$getters.currentCity();
          this.sendDidascalie(this.sentTime);
        }
      }
    },
    setNewCity() {
      if(this.getOtherUser() != GUIDE_BOT_ID){
                 console.log("this is not bot");
        if (this.cityHasChanged == true) {
          this.sentTime = this.getTime();
          console.log("city changed")
          this.outputSignal = "dataChange";
          this.sendDidascalie(this.sentTime);
        } else if (!this.cityHasChanged) {
          return;
        }
      }
    },
    setDistance() {
      if(this.getOtherUser() != GUIDE_BOT_ID){
        let chatID = this.$getters.currentChatID();
        let lastDist = this.$getters.listenConversation(chatID).distance;
        console.log(lastDist);
        if (!lastDist) {
          lastDist = 10;
        }
        console.log("i got it");
        let userCoords = this.$getters.currentLocation();
        console.log(userCoords);
        let otherUserCoords = this.$getters.listenUser(
          this.getOtherUser()
        ).geoLocation;
        console.log(otherUserCoords);
        let distance = location.calcDist(userCoords, otherUserCoords) / 1000;
        let diff = Math.abs(lastDist - distance);
        console.log(diff);
        if (diff < 0.005) {
          return;
        } else if ((lastDist = "Une certaine distance" || diff >= 0.05)) {
          fb.setValue(`/conversations/${chatID}/distance`, distance);
          console.log(distance);
          this.distance = Math.round(distance * 100) / 100;
          this.outputSignal = "dataChange";
          this.sentTime = this.getTime();
          this.sendDidascalie(this.sentTime);
          return this.distance;
        }
      }
    },
    getOtherUser() {
      const chatID = this.$getters.listenConversation(
        this.$getters.currentChatID()
      );
      const user = chatID.users;
      const otherUser = Object.values(user).find((userID) => {
        return userID !== this.$getters.currentUserID();
      });
      return otherUser;
    },
    getContactName() {
      let otherUser = this.getOtherUser();
      const contactName = this.$getters.listenUser(otherUser).name;
      this.contactName = contactName;
      return this.contactName;
    },
    sendMessgageBot(){
      const textTime = this.yellowLineHeight().textTime;
      let time = this.getTime()
      let currentIndex = this.$getters.listenConversation(this.currentChatID).messageIndex;
      let botArray = bot.BOT_MSG
     
      // let msgText = botArray[currentIndex].text

      let newIndex 
      if(currentIndex >= botArray.length-1) return
      console.log(currentIndex,botArray.length)
      for(let i = 0; i<botArray.length; i++){
        let msgText = botArray[i].text
        let type = botArray[i].type
        let height = botArray[i].height
        const botMsg = {
          sendingUser: this.getOtherUser(),
          userName: this.$getters.user(this.currentUserID).name,
          text: msgText,
          bookText: msgText,
          messageType: "msg",
          sentTime: time++,
          // textTime,
        }
        const botDid = {
          sendingUser: this.getOtherUser(),
          userName: this.$getters.user(this.currentUserID).name,
          didascalie: msgText,
          bookText: msgText,
          messageType: "did",
          sentTime: time++,
        }
        const botTimeMsg = {
        sendingUser: this.getOtherUser(),
        userName: this.$getters.user(this.currentUserID).name,
        messageType: "time",
        sentTime: time++,
        lineHeight: height,
        dotsNum: 0,
        grayDot: 0,
      }
        newIndex = botArray[i]
        console.log(newIndex, i)
        msgText = newIndex.text
        console.log(msgText)

        if(botArray[i].waitForResp){
          console.log("I STOPPED", msgText);
            if(!this.userSubmit){
              }else if(this.userSubmit){
              this.sendBotMessage(type, botMsg, botDid,botTimeMsg)
              this.userSubmit = false
            }
        }else if (!botArray[i].waitForResp){
          this.sendBotMessage(type, botMsg, botDid,botTimeMsg)

        }
        // console.log(newIndex)
        fb.setValue(`/conversations/${this.currentChatID}/messageIndex`, i)
      }

    },
    sendBotMessage(type, botMsg, botDid,botTimeMsg){
      if(type == "msg"){
        console.log("HEEEEEEEEEEEE", type)
          this.sendMessage(botMsg);
          console.log("Delayed for 1 second.");
      }else if (type == "did"){
          console.log("DIIIIIIIIIIIIIIE", type)
          this.sendMessage(botDid);
      } else if (type == "time"){
          console.log("TIIIIIME", type)
      
          this.sendMessage(botTimeMsg);
      }
    }
  },

  beforeDestroy() {
    this.removeListener();
  },
  watch: {
    messages(value) {
      if (value.length === 0) this.setFirstScene();
      if (this.getOtherUser() == GUIDE_BOT_ID){
        console.log("its empty & bot")
      }
    },

    "$state.currentCity"(value) {
      this.cityHasChanged = true;
      console.log(value);
      console.log("CITY HAS CHANGED");
      this.city = this.$getters.currentCity(value);
      // console.log(this.city)
      this.setNewCity();
    },
    "$state.currentLocation"(value, oldValue) {
      if (!oldValue.latitude) return;

      //! distance here

      // this.cityHasChanged = true;

      // console.log("New location", value, oldValue);
      let distance = location.calcDist(value, oldValue);
      let coords = {
        latitude: value.latitude,
        longitude: value.longitude,
      };
      if (distance >= 5) {
        console.log("diff position user " + distance + "m");
        fb.setValue(`/users/${this.currentUserID}/geoLocation`, coords);
        this.setDistance();
      }
    },
  },
  mounted() {
    this.currentChatID = this.$getters.currentChatID();
    fb.setValue(
      `/users/${this.currentUserID}/unreadchats/${this.currentChatID}`,
      null
    );

    this.name = this.$getters.user(this.currentUserID).name;
    this.gender = this.$getters.user(this.currentUserID).gender;

    
    if(this.getOtherUser() == GUIDE_BOT_ID){
      this.sendMessgageBot()
      console.log("this is demo")
      console.log (bot.BOT_MSG[0], bot.BOT_DID)
      console.log()
      // console.log(this.getDate().getDate(), this.getTimelaps().monthName, this.getTimelaps().year)
      // return
    }
    this.setScenes();
    // this.updateCoords()
    // this.setDistance()
    this.getContactName();
    // console.log(location.city)
    // console.log(location.inRange())
    // console.log(location.watchPos())
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition
    // https://gist.github.com/viktorbezdek/3957601

    this.conversation = this.$getters.listenConversation(this.currentChatID);

    setTimeout(() => {
      this.afterDelay = true;
    }, 2000);
    setTimeout(() => {
      this.setTimeRatio();
    }, 5000);
  },
};
</script>
<style lang="scss">
.chat-container {
  height: 100%;
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
.item2 {
  width: 90%;
  height: 15vh;
  margin: auto;
  box-sizing: border-box;
  position: relative;
  padding-top: 2%;
  padding-bottom: 4%;

  display: flex;
  flex-direction: column;
}
.footerChat {
  width: 100vw;
  //max-height: 13%;
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: $font-main;
  background: $background-color;
  position: fixed;
}
</style>
