<template>
  <div class="messageBox" :class="cssClasses">
    <!--  'leftAlign': route ==='Book' -->
    <div class="sentTime italic">{{ sentTime }}</div>
    <div class="messageName" v-if="route === 'Book'">{{ user.name }} –</div>
    <div :class="switchDisplay" v-if="message" v-html="text"></div>
    <div>{{ $state.test }}</div>
  </div>
</template>
<script>
// import * as fb from "@/scripts/firebase.js";

export default {
  components: {},
  props: ["messageId", "sentTime"],
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
      return this.$getters.user(this.message.sendingUser) || {};
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
          // leftAlign: (this.isBook = false)
        };
      } else {
        return {
          leftAlign: (this.isBook = true)

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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  display: flex;
  width: 100%;

  .message {
    align-self: start;
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
    align-self: flex-end;

    .message {
      border-radius: 10px 0px 10px 10px;
      align-self: flex-end;
    }
  }
}
  .leftAlign{
    flex-direction: row;
    align-items: flex-start;
  }

// .messageBox {
//   margin-top: 1.5vh;
//   margin-bottom: 1.5vh;
//   display: flex;
//   width: 100%;

.sentence {
  padding: 10px;
  // width: 90%;
  max-width: 70%;
  word-break: break-word;
  color: black;
  font-size: $msg-size;
  font-family: $font-light;
}
// }
.messageName {
  padding: 10px 0 10px 10px;
  font-size: $msg-size;
  font-family: $font-medium;
  font-weight: 400;
  text-transform: uppercase;
  min-width: fit-content;
}
.sentTime{
  font-size: $small-size;
  margin-bottom: 5px
}
</style>
