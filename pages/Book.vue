<template>
  <!-- <div v-touch:swipe.right="swipeHandler"> -->
    <div @click="fullScreenSwitch" class="book-container slider">
    <!-- <div class="book-container slider"> -->
      <section class="message-book-container slider__content">
          <div class="description-container">
            <div class="space"></div>
            <div class="bookTitle italic">{{bookTitle}}</div>
            <div class="description">{{playtype}}</div>
            <div class="perso">{{name1}}</div>
            <div class="description">{{description1}}</div>
            <div class="perso">{{name2}}</div>
            <div class="description">{{description2}}</div>
          </div>
        <template v-for="{ message, id } in messages">

           <Didascalies
            v-if="message.messageType === 'didScene'"
            :key="message.sentTime"
            :text="message.didascalie"
            class="centered-did"
          ></Didascalies>
        <Didascalies
          v-if="message.messageType === 'didSceneSent'"
          :key="message.sentTime"
          :name="message.userName"
          :text="message.sceneSentence"
          class="centered-did"
        ></Didascalies>
           <Didascalies
            v-if="message.messageType === 'did'"
            :key="message.sentTime"
            :text="message.didascalie"
          ></Didascalies>

           <Didascalies
            v-if="message.messageType === 'didTime'"
            :key="message.sentTime"
            :text="message.didascalieTime"
            class="centered-did"
          ></Didascalies>

          <Message

            v-else-if="message.messageType === 'msg'"
            :key="id"
            :messageId="id"
          ></Message>

        </template>
      </section>
      <!-- <div v-for="slider in sliders" class="slider__snap"></div> -->
      <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
	    <div class="slider__snap">
	    </div>
      <!-- <footer class="footerBook"> -->
        <!-- <FooterBook></FooterBook> -->
    </footer>
   </div>
  <!-- </div> -->
</template>
<script>
import Message from "@/components/Message.vue";
import * as fb from "@/scripts/firebase.js";
import Didascalies from "../components/Didascalies.vue";
import FooterBook from "../components/FooterBook.vue";

export default {
  components: {
    Message,
    Didascalies,
    FooterBook
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
      currentUserID: this.$getters.currentUserID(),
      bookTitle: "Loading...",
      playtype: "Loading",
      name1: "Loading...",
      name2: "Loading...",
      description1: "Loading...",
      description2: "Loading...",

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
    commentsItalic: function(){

      return
    }
  },
  methods: {
    fullScreenSwitch () {
      this.$emit('click')
    },
    swipeHandler() {
      this.$router.replace({ path: '/chat' })
    },
    swipePage(){
      let items = document.querySelectorAll('section');
	    for (let i = 0; i < items.length; i++){
		  items[i].style.background = randomColor({luminosity: 'light'});
	    }
      // https://bestofvue.com/tag/text-slider
    },
    getPlayInfos(){
      let playName = this.conversation.chatName
      let act = this.conversation.actStage+1
      let type = this.conversation.type
      if(!type){
        type = "Comédie"
      }
      let actWord = "acte"
      if(act>2){
        actWord = "actes"}
      this.playtype = `${type} en ${act} ${actWord}.`
      this.bookTitle = playName

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
      return contactName;
    },
    getGender(userID){
      let g= this.$getters.listenUser(userID).gender
      let gender = "Personne"
       if(g=="f"){
        gender="Femme"
      }else if(g=="m"){
        gender="Homme"
      }else if(g=="n"){
        gender="Personne"
      }
      return gender
    },
    userInfos(){
      this.name1 = this.$getters.currentUserName()
      let userID = this.$getters.currentUserID()
      this.name2 = this.getContactName()
      let attr2 = this.getOtherUser().attributs
      let attr1 = this.$getters.listenUser(this.$getters.currentUserID()).attributs
      let g1 = this.getGender(userID)
      let g2 = this.getGender(this.getOtherUser())
      console.log(g1)

      if(attr1){
        let descriptions1 = [`${g1} ${attr1.prop1}, provenant ${attr1.prop4}, ${attr1.prop2}`,`${g1} ${attr1.prop5}, toujours ${attr1.prop6}, dans l'espoir ${attr1.prop8}`,`${g1} vivant pour ${attr1.prop7}, semblant toujours très ${attr1.prop5}`,`${g1} ${attr1.prop1}, ${attr1.prop2}, mais ${attr1.prop3}`]
        let random = Math.floor(Math.random() * descriptions1.length);
        const description1 = descriptions1[random];
        this.description1= description1
      }else if(!attr1){
        let globalDesc = `${g1} se cherchant encore.`
        this.description1 = globalDesc
      }
      if(attr2){
        let descriptions2 = [`${g2} ${attr2.prop1}, provenant ${attr2.prop4}, ${attr2.prop2}`,`${g2} ${attr2.prop5}, toujours ${attr2.prop6}, dans l'espoir ${attr2.prop8}`,`${g2} vivant pour ${attr2.prop7}, semblant toujours très ${attr2.prop5}`,`${g2} ${attr2.prop1}, ${attr2.prop2}, mais ${attr2.prop3}`]
        let random = Math.floor(Math.random() * descriptions1.length);
        const description2 = descriptions2[random];
        this.description2= description2
      }else if(!attr2){
        let globalDesc = `${g2} se cherchant encore.`
        this.description2 = globalDesc
      }
    }
  },
  mounted() {

    const currentChat = this.$getters.currentChatID();
    this.conversation = this.$getters.listenConversation(currentChat);
    this.getPlayInfos()
    this.userInfos()
    console.log(currentChat, this.conversation)

  },
};
</script>
<style lang="scss">
.book-container {
  height: 95%;
  width: 90%;
  background-color: $background-book;
}

.slider {
  margin: 5% 5% 5% 5%;
  position: relative;
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
}
.book-fullscreen {

}
.slider__snap {
  // box-shadow: inset 0px 0px 0 1px black;
  min-width: 100%;
  height: 90%;
  // padding: 2em;
  scroll-snap-align: start;
  text-align: center;
  position: relative;
}
.slider__content {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% * 2);
  height: 80%;
  columns: 2;
  column-gap: 0;
  column-width: 100%;
  margin-top: 25%;
  .didascalieBox {
    .didascalie {
      padding: 10px;
      width: 90%;
      max-width: 90%;
      word-break: break-word;
    }
  }
}
.description-container{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  // margin-top: 50%;
}
.right-enter-active, .right-leave-active {
  transition: transform 0.2s;
}

.right-enter, .right-leave-to {
  transform: translateX(100%);
}

.right-enter-to, .right-leave {
  transform: translateX(0);
}

.left-enter-active, .left-leave-active {
  transition: transform 0.2s;
}

.left-enter, .left-leave-to {
  transform: translateX(-100%);
}

.left-enter-to, .left-leave {
  transform: translateY(0);
}

.footerBook {
  width: 100vw;
  position: fixed;
  height: 11%;
  bottom: 0;
  left: 0;
  font-family: $font-main;
  background: $background-color;
  position: fixed;
}

.book-background{
  background-color: $background-book;
}
.bookTitle{
  text-transform: uppercase;
  font-size: 40px;
  margin-bottom: $margin-5;
  text-align: center;
}
.perso{
  margin-top: $margin-5;
  text-transform: uppercase;
  font-family: $font-medium;
}
.description{
  width:80%;
  text-align: center;
  font-family: $font-light;
}
.space{
  height: 30%;
}

</style>
