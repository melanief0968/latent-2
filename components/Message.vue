<template>
  <div class="messageBox" :class="cssClasses">
    <div class="messageName" v-if="route === 'Book'">{{userName}} </div>
    <div class="message" v-if="message">
      {{ text }}
    </div>
    <div>{{ $store.test }}</div>
  </div>
</template>
<script>
// import * as fb from "@/scripts/firebase.js";

export default {
  components: {},
  props: {
    messageId: {
      type: String,
    },
    // text:{
    //     type: Array,
    // }
  },
  data() {
    return {
      userName: "Name –",
      message: this.$getters.listenMessage(this.messageId),
    };
  },
  computed: {
   
    route() {
      return this.$route.name;
    },
    text() {
      if (!this.message.text) return "";

      return this.message.text
      //WTF IS THAT
      // return this.message.text.replace(/[•|\*]/g, (char) => {
      //   if (char === "•") return '<span class="elapse">•</span>';
      //   else if (char === "*") return '<span class="erase">*</span>';
      // });
    },
    cssClasses() {
      const userID = this.$getters.currentUserID();
      //console.log(this.message.sendingUser);
      return {
        toRight: this.message.sendingUser === userID,
      };
    },
  },

  methods: {
     getSendingUser(){
       const userID2 = this.$getters.user(this.message.sendingUser);
       this.userName = userID2.name;
    },
  },
  mounted() {
    this.getSendingUser()
  },
  beforeDestroy() {
    // this.removeListener();
    // console.log('im dead');
  },
  // msgId: String,
  // usrId: String,
  // content: String,
  // time: String,
  // read: Boolean,
  // charAmount: Number,
  // wordsPerMin: Number,
  // eraseAmount: Number,
  // location: String,
};
</script>
<style lang="scss">
.messageBox {
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  display: flex;
  width: 100%;

  .message {
    padding: 10px;
    width: 55%;
    max-width: 70%;
    word-break: break-word;
    border: 0.9px solid $contrast-color;
    background-color: $background-color;
    color: black;
    font-size: $msg-size;
    font-family: $font-main;
    border-radius: 0px 10px 10px 10px;
  }

  &.toRight {
    justify-content: end;

    .message {
      border-radius: 10px 0px 10px 10px;
    }
  }
}

// .messageBox {
//   margin-top: 1.5vh;
//   margin-bottom: 1.5vh;
//   display: flex;
//   width: 100%;

//   .message {
//     padding: 10px;
//     width: 90%;
//     max-width: 70%;
//     word-break: break-word;
//     color: black;
//     font-size: $msg-size;
//     font-family: $font-main;
//   }
// }
//   .messageName {
//     font-size: $msg-size;
//     font-family: $font-main;
//     text-transform: uppercase;
//   }
</style>
