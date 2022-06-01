<template>
  <!-- <div v-touch:swipe.right="swipeHandler"> -->
    <div class="book-container slider">
      <section class="message-book-container slider__content">
          <div class="description-container">Page de descrption personnage</div>
        <template v-for="{ message, id } in messages">
      
           <Didascalies
            v-if="message.messageType === 'did'"
            :key="message.sentTime"
            :text="message.didascalie"
            
          ></Didascalies>
           <Didascalies
            v-if="message.messageType === 'didTime'"
            :key="message.sentTime"
            :text="message.didascalieTime"
            
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
      <footer class="footerBook">
        <FooterBook></FooterBook>
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
      currentUserID: this.$getters.currentUserID()

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
    swipeHandler() {
      this.$router.replace({ path: '/chat' })
    },
    swipePage(){
      let items = document.querySelectorAll('section');
	    for (let i = 0; i < items.length; i++){
		  items[i].style.background = randomColor({luminosity: 'light'});
	    }
      // https://bestofvue.com/tag/text-slider
    }
  },
  mounted() {

    const currentChat = this.$getters.currentChatID();
    this.conversation = this.$getters.listenConversation(currentChat);
    console.log(currentChat)

  },
};
</script>
<style lang="scss">
.book-container {
  height: 95%;
  width: 90%;
  background-color: #F8F6F2;
}

.slider {
  margin: 5% 5% 5% 5%;
  position: relative;
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
}
.slider__snap {
  // box-shadow: inset 0px 0px 0 1px black;
  min-width: 100%;
  height: 100%;
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
  height: 100%;
  columns: 2;
  column-gap: 0;
  column-width: 100%;
}
.description-container{
  height: 100%;
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
  background-color: #F8F6F2;
}

</style>
