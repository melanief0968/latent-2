<template>
  <!-- <div v-touch:swipe.left="swipeHandler"> -->
    <div class="chat-container">
      <div class="message-container" v-chat-scroll>
        <template v-for="{ message, id } in messages">
          <Didascalies
            :icon="message.didType"
            v-if="message.messageType === 'did'"
            :key="message.sentTime"
            :name="message.userName"
            :text="message.didascalie"
            :contact="getContactName()"
          ></Didascalies>

          <YellowLine
            v-if="message.messageType === 'did'"
            line-height="3"
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
      keyDownCounter:0,
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
      charAmount:0,
      eraseAmount:0,
      totalErase:0,
      contactName:""
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
      setTimeout(() => {
        if(messages.length === 0){
          console.log("no msg")
          console.log(messages.length)
          this.setFirstScene()
        }
      }, 2000);


      
      console.log(messages.length)

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
      let cases = ["case1", "case2", "case3", "case4","case5"];
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
      if (!didascalie) {
        return;
      }

      const base = this.getBaseMsg();
      const didMessage = {
        ...base,
        messageType: "did",
        sentTime: time,
        didascalie,
        didType:this.didType
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
      this.outputSignal = "msg";
      this.onSignal();
      this.getTimelaps();

      this.changeScene();
      this.stopElapsedTime();
      this.sentTime = this.getTime();


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
          return "<i>(it works)</i>";
        }
      });

      const baseMessage = this.getBaseMsg();
      const timeMessage = {
        ...baseMessage,
        messageType: "time",
        sentTime: this.sentTime++, //! to have unique id, even if same time
        lineHeight: this.yellowLineHeight().height,
        dotsNum:this.yellowLineHeight().days,
      };

      const didascalieTime = this.sentTime++;
      // console.log(message, chatVersion);
      const textMessage = {
        ...baseMessage,
        sentTime: this.sentTime++,
        text: chatVersion,
        bookText: bookVersion,
        charAmount: this.charAmount,
        eraseAmount: this.deleteKeyCounter,
        typingSpeed: this.getWritingSpeed().outputValue,
        coordinates: "",
        messageType: "msg",
        textTime: this.yellowLineHeight().textTime
      };


      if (true) this.sendMessage(timeMessage);

      this.sendDidascalie(didascalieTime);
      this.sendMessage(textMessage);
      // console.log(this.$getters.currentChatID)

      this.deleteKeyCounter = 0;
      this.keyDownCounter = 0;
      this.isChosen = false;
      return;
    },

    setFirstScene(){
          this.sentTime = this.getTime();
          const didascalie = `Acte I, scène I`;
          const base = this.getBaseMsg();
          const didMessage = {
            ...base,
            messageType: "did",
            sentTime: this.sentTime,
            didascalie,
            // didType:this.didType
          };

          this.sendMessage(didMessage);
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
    setScenes(){
      let scenes = ["scène I", "scène II", "scène III", "scène IV","scène V","scène VI","scène VII","scène VIII","scène IX", "scène X"]
      let acts = ["Acte I", "Acte II", "Acte III", "Acte IV","Acte V","Acte VI","Acte VII","Acte VIII","Acte IX", "Acte X"]
      let chatID = this.$getters.currentChatID()
      let currentSceneIndex = this.$getters.listenConversation(chatID).sceneStage
      let currentActIndex = this.$getters.listenConversation(chatID).actStage
      let newSceneIndex = currentSceneIndex
      let newActIndex = currentActIndex
      let setScene = scenes[newSceneIndex];
      let setAct = acts[newActIndex];
      let hasChanged = false
        //*CHANGE SCENE
       if(this.getEllapseTime() >= (1000 * 60 * 60 *12)){
          hasChanged=true
          newSceneIndex = currentSceneIndex + 1       
          if(newSceneIndex == 10){
            newSceneIndex = 0
            newActIndex = currentActIndex + 1
          }else{

          }
        } else if (this.getEllapseTime() >= (1000 * 60 * 60 *24)){//
          hasChanged=true
          newSceneIndex = 0
          newActIndex = currentActIndex + 1
        }
          setScene =scenes[newSceneIndex]
          setAct =acts[newActIndex]
          const SCENES_DATA = {
            setScene, 
            newSceneIndex, 
            setAct, 
            newActIndex,
            hasChanged
          }

          return SCENES_DATA
      
        
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
    changeScene(){
      if(this.setScenes().hasChanged == true){
        let chatID = this.$getters.currentChatID()
        fb.setValue(`/conversations/${chatID}/sceneStage/`,this.setScenes().newSceneIndex);
        fb.setValue(`/conversations/${chatID}/actStage/`,this.setScenes().newActIndex);
        this.sentTime = this.getTime();
          const didascalie = `${this.setScenes().setAct}, ${this.setScenes().setScene}`;
          const base = this.getBaseMsg();
          const didMessage = {
            ...base,
            messageType: "did",
            sentTime: this.sentTime,
            didascalie,
            // didType:this.didType
          };

          this.sendMessage(didMessage);
        
        console.log(this.$getters.listenConversation(chatID).sceneStage,
        this.$getters.listenConversation(chatID).actStage)
      }else{
        return
      }
    },
    yellowLineHeight() {
      let timeBetweenMessages = this.getEllapseTime()
      
      if(timeBetweenMessages){
        let timeLineData = Math.floor(timeBetweenMessages / (1000 * 60))
      let textTime =""
      if (timeLineData <= 100){
        textTime =`${timeLineData}m`
      }else if(timeLineData > 100){
        textTime =`${Math.floor(timeLineData/60)}h`
      }else if(timeLineData > 6000){
        textTime =`${Math.floor(timeLineData/(60*24))}j`
      }
      // console.log(timeLineData)
      // console.log(timeBetweenMessages)

        const calcDays = Math.floor(timeBetweenMessages / (1000 * 60 * 60 * 24));
        let days = calcDays
        if(days<1){
          days = 0;
        }
        // console.log(days)
        let height = Math.sqrt(timeBetweenMessages) * 0.015;
       
        const LINE_DATAS = {
          height,
          days,
          textTime
        }
        return LINE_DATAS;

      }else{
        const LINE_DATAS = {
          height:2,
          days:0,
          textTime:""
        }

          console.log(LINE_DATAS);
      return LINE_DATAS;
      }

      // for (let i = 0; i < days; i++) {
      //   const dotContainer = document.createElement("div");
      //   const dot = document.createElement("div");
      //   dotContainer.style.top = ((((i + 1) * height) / (days + 1)) - 25) + "px";
      // }
      // let rHeight = [100, 160, 200, 50, 20, 10];
      // let random = Math.floor(Math.random() * rHeight.length);
    },
    getNbDots() {
      // let days = Math.floor(this.timeBetweenMessages / (1000 * 60 * 60 * 24));
      // console.log(days)
      return 4;
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
      this.requestElapsedTime(3000);
    },

    requestElapsedTime(millis) {
      this.stopElapsedTime();
      this.timeout = window.setTimeout(() => {
        this.onElapsedTime();
      }, millis);
    },

    onElapsedTime() {
      this.$refs.editor.insertElapsedTime();
      console.log("ELLAPPSSE")
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
        didType:"msg"
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
      this.totalErase = this.deleteKeyCounter-1;
      // console.log("JEFFACE");
      const RESULT = {
        result: "",
        outputSignal: "msg",
        outputValue: this.totalErase,
        inputType: "erase",
        didType:"msg"
      };
      // console.log(this.totalErase);
      if (this.totalErase <= 3 && this.totalErase >= 1) {
        RESULT.result = "positive";
      } else if (this.totalErase >= 10) {
        RESULT.result = "negative";
      }
      console.log(RESULT)
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
        didType:"time"
      };
      if (wordsPerMin <= 28 && wordsPerMin>= 1) {
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
          if(message.messageType == "msg"){
            // console.log(message)
            let messagesTime = message.sentTime
            messageArray.push(messagesTime)
          }
        });
        let lastMsgID = messageArray[messageArray.length-1];
        let beforeLastMsgID = messageArray[messageArray.length - 2];
        
        let timeBetweenMessages = lastMsgID-beforeLastMsgID
        // console.log(timeBetweenMessages)
        return timeBetweenMessages
      }
    },
    
    getTimeBetweenMessages() {
      // console.log(this.getEllapseTime())
      let timeBetweenMessages= this.getEllapseTime();
      const RESULT = {
        result: "",
        outputSignal: "msg",
        outputValue: "",
        inputType: "time",
        didType:"time"
      };
      let TIME = this.getTimeDatas(timeBetweenMessages);
          if(timeBetweenMessages <= 1000){
            RESULT.result ="positive";
            RESULT.outputValue = "quelques instants"
          }else if (timeBetweenMessages <= 3000 && timeBetweenMessages >=1001) {
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
        didType:"time"
      };
      return RESULT;
    },
    getLocationTrigger() {
      const RESULT = {
        result: "positive",
        outputSignal: "ratio",
        outputValue: "test loca",
        inputType: "timeTrigger",
        didType:"loca"
      };
      return RESULT;
    },


    intimacyLevel() {
      // possibilité de passer d'un level à l'autre avec Time between MSG
      let level = "level1";
      if(this.name == "Mélanie"&& this.getContactName()== "Jamy"){
        level = "level3";
        return level
      } else if(this.name == "Mélanie"&& this.getContactName()== "Sébastien"){
        level = "level2";
      }else if(this.name == "Mélanie"&& this.getContactName()== "Mathilde"){
        level = "level4";
      }else if(this.name == "Mélanie"&& this.getContactName()== "Elodie"){
        level = "level1";
      }
       else {
         level = "level3";
      }
      return level;
    },

    getResult(_array, level, _case) {
      if (_array.length > 0) {
        let pushDid = null;
        const shuffledArr = _array.sort(() => 0.5 - Math.random());
        // console.log(_array, shuffledArr);
        const output = shuffledArr[0];
        console.log(output);
        //--> 'positif', 'negatif', ''
        if (level== "level1"){
          if(output.result != ""){

            output.result = "positive"
          }
        }
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
          this.didType = output.didType
          pushDid = did[output.outputSignal][output.inputType][level][
            output.result
          ][_case][index][this.gender]({
            name: this.name,
            contact:this.contactName,
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

      let timeTrigger = this.getTimeTrigger();
      let locationTrigger = this.getLocationTrigger();
      if (this.outputSignal == "msg") {
        console.log("ITS A MESSAGE");
        const allOutputs = [char, erase, time, speed];
        return this.getResult(allOutputs, level, _case);
      } else if (this.outputSignal == "ratio") {
        console.log("ITS A RATIO");
        const allOutputs = [timeTrigger, locationTrigger];
        return this.getResult(allOutputs, level, _case);
      }
    },

    setTimeRatio() {
      if (this.getTimelaps().min == "58") {
        this.sentTime = this.getTime();
        console.log("its happening");
        this.outputSignal = "ratio";
        //!OK IM LOSTTTTTTTTTTTTTTTTTTTTTTTTTTT
        this.sendDidascalie(this.sentTime);
      }
    },
    sendLocation(){
      console.log(location.getLocation())
      // console.log(location.getLocation().latitude,location.getLocation().longitude)
    },
    getTimeDatas(time) {
      //hr, min, sec, day, daytime, weekday, month, year, period
      const calcSeconds = Math.floor((time / 1000) % 60);
      const calcMinutes = Math.floor((time / (1000 * 60)) % 60);
      const calcHours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const calcDays = Math.floor(time / (1000 * 60 * 60 * 24));
      const calcWeeks = Math.floor(time / (1000 * 60 * 60 * 24*7));
      const calcMonths = Math.floor(time / (1000 * 60 * 60 * 24*30));

      let seconds = calcSeconds;
      let minutes = calcMinutes;
      let hours = calcHours;
      let days = calcDays;
      let weeks = calcWeeks;
      let months = calcMonths;
      let s = " secondes";
      let m = " minutes";
      let h = " heures";
      let d = " jours";

      if (calcMinutes < 1 && calcHours < 1 && calcDays < 1) {
        return `${seconds} secondes`
        minutes = "";
        hours = "";
        days = "";
        m = "";
        h = "";
        d = "";
      }
      if (calcHours < 1 && calcDays < 1) {
        return `${minutes} minutes et ${seconds} secondes`
        hours = "";
        days = "";
        h = "";
        d = "";
      }
      if (calcDays < 1) {
        return ` ${hours} heures et ${minutes} minutes`
        days = "";
        d = "";
      }
      if (calcWeeks < 1) {
        return `${days} jours et ${hours} heures`
      }
      if (calcMonths < 1) {
        return `${weeks} semaines et ${days} jours`
      }
      const TIME = {
        seconds,
        s,
        minutes,
        m,
        hours,
        h,
        days,
        d
      }
      // const TIME = minutes;
      return TIME;
    },
    getContactName(){
      const chatID = this.$getters.listenConversation(this.$getters.currentChatID())
      const user = chatID.users
      const otherUser = Object.values(user).find((userID) => {
        return userID !== this.$getters.currentUserID();
      });
      const contactName = this.$getters.listenUser(otherUser).name;
      this.contactName = contactName;
      return this.contactName
    },
    setLocationData(){
      return location.getLocation()

    }
  },

  beforeDestroy() {
    this.removeListener();
  },
  mounted() {
    this.name = this.$getters.user(this.currentUserID).name;
    this.gender = this.$getters.user(this.currentUserID).gender;
    // this.setScenes()
  // this.sendLocation()
    // console.log(location.getLocation())

    
    // console.log(location.city)
    // console.log(location.inRange())
    // console.log(location.watchPos())
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition
    // https://gist.github.com/viktorbezdek/3957601
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
  height: 88%;
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
  height:13%;
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: $font-main;
  background: $background-color;
  position: fixed;
}
</style>
