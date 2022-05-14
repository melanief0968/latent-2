<template>
  <div class="chat-container">
    <div class="message-container">
      <template v-for="{ message, id } in messages" v-chat-scroll>

        <!--TODO v-if est workaround en attendant le watch-->
        <!--On passe le name de l'auteur dans la didascalie -->
        <Didascalies v-if="message.userName !==undefined" :name="message.userName" :_case="randomCase()"></Didascalies>
        <!--<YellowLine></YellowLine>-->
        <Message v-if="true" :key="id" :author="userName" :messageId="id"></Message>
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
      userName: '',
      did:did,
      level: 1,
      lastRandom: -1,
      inputType:"",
      gender:"",
      posNegResult:"",
      outputSignal:"",
      outputValue:"",
      randomLoop:0,
      isChosen: false,
      timeBetweenMessages:0,
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

    randomCase() {
      // example de retour de string qui détérmine le case
      let cases = ['case1','case2','case3']
      let random = Math.floor(Math.random() * cases.length);
      return cases[random]

    },

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

    },


    onSubmit(event) {
      this.onSignal()
      this.getTimelaps()
      // console.log(ev);
      // console.log(Didascalies)
      this.stopElapsedTime();
      this.sentTime = this.getTime();
      // console.log(this.getCharAmount());
      this.chooseOutput()
      // console.log(this.getWritingSpeed())
      // console.log(this.getTimeBetweenMessages())
      // console.log(this.getEraseAmount())
      // console.log(this.name)



      const chatVersion = event.value;
      if(chatVersion == ""){
        return
      }
      const bookVersion = event.value.replace(/[•|\–]+/g, (string) => {
        const { "–": eraseNumber = 0, "•": elapseNumber = 0 } =
          countCharOccurance(string);

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

      const messageDatas = {
        text: chatVersion,
        bookText: bookVersion,
        sendingUser: this.currentUserID,
        userName:  this.$getters.user(this.currentUserID).name,
        sentTime: this.sentTime,
        charAmount: this.keyDownCounter,
        eraseAmount: this.deleteKeyCounter,
        typingSpeed: this.getWritingSpeed().outputValue,
        coordinates: "",
        messageType:"msg",
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
      this.isChosen = false;
      return;
    },
    onSignal(){
      console.log(this.getDate())
      // if(this.getDate ==)
    },
    getTime() {
      return new Date().getTime();
    },
    getDate() {
      return new Date();
    },
    firstTime(){
      // this.$ref.editor.focus()
      let startWriting = this.getTime();
      console.log("CLICK")
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
        outputSignal: "msg",
        outputValue :keydownNumber
      }
      if (keydownNumber <= 5 && keydownNumber >= 0 ) {
        RESULT.result = "positive";
      } else if (keydownNumber >= 90) {
        RESULT.result = "negative";
      } else {
      }
      return RESULT;
    },
    getEraseAmount(){
      // this.$refs.editor.onErase();
      this.deleteKeyCounter++;
      console.log("JEFFACE")
      const RESULT = {
        result: "",
        outputSignal: "msg",
        outputValue :this.deleteKeyCounter
      }
      // console.log(this.deleteKeyCounter);
      if (this.deleteKeyCounter <= 4 && this.deleteKeyCounter >= 1) {
        RESULT.result = "positive";
      } else if (this.deleteKeyCounter >= 10) {
        RESULT.result = "negative";
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
        outputSignal: "msg",
        outputValue :wordsPerMin
      }
      if (wordsPerMin <= 28) {
        RESULT.result = "negative";
      } else if (wordsPerMin >= 90) {
        RESULT.result = "positive";
      } else {
      }
      return RESULT;
    },
    getTimelaps(){
      //if 10 didascalies
      //random
        let day = this.getDate().getDay();
        let days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
        //debut de semaine, weekend, 
        //saison

        let monthName=  this.getDate().toLocaleString('default', { month: 'long' })

        let dayName = days[day-1];
        let hour = this.getDate().getHours();
        let min = this.getDate().getMinutes();
        let sec = this.getDate().getSeconds();
        let month = this.getDate().getMonth()+1;
        let year = this.getDate().getFullYear();

      const DATE= {
        hour,
        min,
        sec,
        dayName,
        monthName,
        day,
        month,
        year
      }
      this.outputValue = {dayName,day,monthName}
      console.log(DATE);

      

    },
    getTimeBetweenMessages() {
      let lastMessageID;
      let beforeLastMessageID;
      this.timeBetweenMessages;

      const RESULT = {
        result: "",
        outputSignal: "msg",
        outputValue :""
      }
      //REECRIRE AU PROPRE AVEC STORE
      fb.listen(
        `/conversations/${this.$getters.currentChatID()}/messages/`,
        (value) => {
          const keys = Object.keys(value);
          lastMessageID = keys[keys.length - 1];
          beforeLastMessageID = keys[keys.length - 2];
          this.timeBetweenMessages = lastMessageID - beforeLastMessageID;
          let TIME = this.getTimeDatas(this.timeBetweenMessages)
          if (this.timeBetweenMessages <= 3000) {
            RESULT.result = "positive";
            RESULT.outputValue = TIME;
          } else if (this.timeBetweenMessages >= 1000 * 60 * 60) {
            RESULT.result = "negative";
            RESULT.outputValue = TIME;
          }else{}
        }
      );
      return RESULT
    },
    yellowLineHeight(){
          // let height = Math.sqrt(this.timeBetweenMessages) * 0.15;
          // let days = Math.floor(this.timeBetweenMessages / (1000 * 60 * 60 * 24));
          // for (let i = 0; i < days; i++) {
          //   const dotContainer = document.createElement("div");
          //   const dot = document.createElement("div");
          //   dotContainer.style.top = ((((i + 1) * height) / (days + 1)) - 25) + "px";
          // }
    },
    pushDidascalie(){
      this.chooseOutput();
      const didascaliesDatas = {
        text: "créer une phrase et fill with console in chooseOutput",
        bookText: "same",
        messageType:"didascalie",
        userName:  this.$getters.user(this.currentUserID).name,
      }
      fb.setValue(
        `/conversations/${this.$getters.currentChatID()}/didascalies/${
          this.sentTime
        }`,
        ""
      );
      fb.setValue(`/didascalies/${this.sentTime}`, didascaliesDatas);
    },

    intimacyLevel(){
      //!faire vrai calcul
    //  console.log(this.getTimeBetweenMessages().result)
      if(this.getTimeBetweenMessages().result === "positive"){
        this.level = 2;
      }else if (this.getTimeBetweenMessages().result === "negative"){
        this.level = 1;
      }else{
        this.level = 3;
      }
      // console.log("level:"+this.level)
      return this.level
    },
    chooseOutput() {
      this.intimacyLevel()
      let char = this.getCharAmount();
      let erase = this.getEraseAmount();
      let time = this.getTimeBetweenMessages();
      let speed = this.getWritingSpeed();

      if(this.randomLoop >=4){
        console.log("STOP")
        this.randomLoop = 0;
        return 
      }else if(this.randomLoop <=3){
        if(char.outputSignal||erase.outputSignal||time.outputSignal||speed.outputSignal === "msg"){
          let r = this.getRandom() * 4;
          this.lastRandom = r / 4;
            if (r < 1) {
              this.chooseChar()
            } 
            else if (r < 2) {
              this.chooseTime()
            } 
            else if (r < 3) {
              this.chooseErase()
            } 
            else if (r < 4) {
              this.chooseSpeed()
            } 
            console.log(this.isChosen)
            if(this.isChosen == true){
              this.sentTime = this.getTime()
              console.log("msg:"+this.outputSignal, " calcul:"+this.inputType, " level:"+this.level, " result:"+this.posNegResult, " case:"+this.randomCase()," index :?",this.gender, " value:"+this.outputValue)
            }

        }else if(result.outputSignal == "change"){
    
        }else if(result.outputSignal == "ratio"){
    
        }else{
          return
        }
      }
    },

    chooseChar(){
      let char = this.getCharAmount();
      console.log("I WAS IN CHAR")
      // console.log ("char result:"+ char.result)
      if(char.result ==="positive"){
        console.log("I WAS IN POS-CHAR")
        this.posNegResult = "positive"
        this.outputSignal = char.outputSignal;
        this.inputType = "char";
        this.outputValue = char.outputValue;
        this.isChosen = true;
        // console.log("msg:"+this.outputSignal, " calcul:"+this.inputType, " level:"+this.level, " result:"+this.posNegResult, " case:"+this.randomCase()," index :?",this.gender, " value:"+this.outputValue)
      }else if(char.result ==="negative"){
        console.log("I WAS IN NEG-CHAR")
        this.posNegResult = "negative"
        this.outputSignal = char.outputSignal;
        this.inputType = "char";
        this.outputValue = char.outputValue;
        this.isChosen = true;
        // console.log("msg:"+this.outputSignal, " calcul:"+this.inputType, " level:"+this.level, " result:"+this.posNegResult, " case:"+this.randomCase()," index :?",this.gender, " value:"+this.outputValue)
      }else{
        console.log("NO CHAR RESULT")
        this.randomLoop ++
        this.chooseOutput();
      }
    },
    chooseTime(){
      let time = this.getTimeBetweenMessages();
      console.log("I WAS IN TIME")
      if(time.result ==="positive"){
        console.log("I WAS IN POS-TIME")
        this.posNegResult = "positive"
        this.outputSignal = time.outputSignal;
        this.inputType = "time";
        this.outputValue = time.outputValue;
        this.isChosen = true;
        // console.log("msg:"+this.outputSignal, " calcul:"+this.inputType, " level:"+this.level, " result:"+this.posNegResult, " case:"+this.randomCase()," index :?",this.gender, " value:"+this.outputValue)
      }else if(time.result ==="negative"){
        console.log("I WAS IN NEG-TIME")
        this.posNegResult = "negative"
        this.outputSignal = time.outputSignal;
        this.inputType = "time";
        this.outputValue = time.outputValue;
        this.isChosen = true;
        // console.log("msg:"+this.outputSignal, " calcul:"+this.inputType, " level:"+this.level, " result:"+this.posNegResult, " case:"+this.randomCase()," index :?",this.gender, " value:"+this.outputValue)
      }else{
        console.log("NO TIME RESULT")
        this.randomLoop ++
        this.chooseOutput();
      }
    },
    chooseErase(){
      let erase = this.getEraseAmount();
      console.log("I WAS IN erase")
      if(erase.result ==="positive"){
        console.log("I WAS IN POS-ERASE")
        this.posNegResult = "positive"
        this.outputSignal = erase.outputSignal;
        this.inputType = "erase";
        this.outputValue = erase.outputValue;
        this.isChosen = true;
        // console.log("msg:"+this.outputSignal, " calcul:"+this.inputType, " level:"+this.level, " result:"+this.posNegResult, " case:"+this.randomCase()," index :?",this.gender, " value:"+this.outputValue)
      }else if(erase.result ==="negative"){
        console.log("I WAS IN NEG-ERASE")
        this.posNegResult = "negative"
        this.outputSignal = erase.outputSignal;
        this.inputType = "erase";
        this.outputValue = erase.outputValue;
        this.isChosen = true;
        // console.log("msg:"+this.outputSignal, " calcul:"+this.inputType, " level:"+this.level, " result:"+this.posNegResult, " case:"+this.randomCase()," index :?",this.gender, " value:"+this.outputValue)
      }else{
        console.log("NO ERASE RESULT")
        this.randomLoop ++
        this.chooseOutput();
      }
    },
    chooseSpeed(){
      let speed = this.getWritingSpeed();
      console.log("I WAS IN speed")
      if(speed.result ==="positive"){
        console.log("I WAS IN POS-SPEED")
        this.posNegResult = "positive"
        this.outputSignal = speed.outputSignal;
        this.inputType = "speed";
        this.outputValue = speed.outputValue;
        this.isChosen = true;
        // console.log("msg:"+this.outputSignal, " calcul:"+this.inputType, " level:"+this.level, " result:"+this.posNegResult, " case:"+this.randomCase()," index :?",this.gender, " value:"+this.outputValue)
      }else if(speed.result ==="negative"){
        console.log("I WAS IN NEG-SPEED")
        this.posNegResult = "negative"
        this.outputSignal = speed.outputSignal;
        this.inputType = "speed";
        this.outputValue = speed.outputValue;
        this.isChosen = true;
        // console.log("msg:"+this.outputSignal, " calcul:"+this.inputType, " level:"+this.level, " result:"+this.posNegResult, " case:"+this.randomCase()," index :?",this.gender, " value:"+this.outputValue)
      }else{
        console.log("NO speed RESULT")
        this.randomLoop ++
        this.chooseOutput();
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
    getRandom(){
      let threshold = 0.25;
      let random = Math.random();
      if (Math.abs(random - this.lastRandom) < threshold) {
        // console.log("swap");
        if (random < 0.5) {
          random += 0.5;
        } else {
          random -= 0.5;
        }
      }
      // console.log(random);
      return random;
    },
  },

  beforeDestroy() {
    this.removeListener();
  },
  mounted() {
    this.name = this.$getters.user(this.currentUserID).name;
    this.gender = this.$getters.user(this.currentUserID).gender;
    this.$refs.editor.insertElapsedTime();
    const currentChat = this.$getters.currentChatID();
    this.conversation = this.$getters.listenConversation(currentChat);

    // let child = this.$refs.didascalies;
    // console.log(child);
    // let name = "Elodie";
    // let _case = "case2";
    //
    // child.test(name, _case)
  }
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
