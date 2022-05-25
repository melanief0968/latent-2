<template>
  <div class="messageBox" :class="cssClasses">
    <div class="messageName" v-if="route === 'Book'">{{ user.name }} –</div>
    <div :class="switchDisplay" v-if="message">
      {{ text }}
    </div>
    <div>{{ $state.test }}</div>
  </div>
</template>
<script>
// import * as fb from "@/scripts/firebase.js";

export default {
  components: {},
  props: ["messageId"],
  data() {
    return {
      message: this.$getters.listenMessage(this.messageId),
      isBook: false,
      isChat: true,
    };
  },
  computed: {
    route() {
      return this.$route.name;
    },
    user() {
      return this.$getters.user(this.message.sendingUser) || {}
    },
    // username() {
    //   return this.user?.name;
    // },
    text() {
      if (!this.message.text) return "";
      if (this.$route.name === "Chat") {
        return this.message.text;
      }
      if (this.$route.name === "Book") {
        return this.message.bookText;
      }


      // return this.message.text.replace(/[•|\*]/g, (char) => {
      //   if (char === "•") return '<span class="elapse">•</span>';
      //   else if (char === "*") return '<span class="erase">*</span>';
      // });
    },
    cssClasses() {
      const userID = this.$getters.currentUserID();
      //console.log(this.message.sendingUser);
      if (this.$route.name === "Chat") {
        return {
          toRight: this.message.sendingUser === userID,
        };
      }
    },
    switchDisplay() {
      if (this.$route.name === "Book") {
        return {
          sentence: (this.isBook = true),
          message: (this.isChat = false),
        };
      } else {
        return {
          sentence: (this.isBook = false),
          message: (this.isChat = true),
        };
      }
    },
  },

  methods: {
    changeDisplay() {
      if (this.$route.name === "Book") {
        this.isBook = true;
      } else {
      }
    },
    // getSendingUser() {
    //   return ;
    //   //  this.userName = this.$getters.user(this.message.sendingUser).name;
    // },
  },
  mounted() {
    // console.log(this.getSendingUser());
    // this.user = this.getSendingUser();
    this.changeDisplay();
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

.sentence {
  padding: 10px;
  width: 90%;
  max-width: 70%;
  word-break: break-word;
  color: black;
  font-size: $msg-size;
  font-family: $font-main;
}
// }
.messageName {
  padding: 10px 0 10px 10px;
  font-size: $msg-size;
  font-family: $font-main;
  text-transform: uppercase;
}
</style>
