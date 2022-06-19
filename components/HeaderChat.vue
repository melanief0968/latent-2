<template>
  <header class="header" :class="{'white-header': route==='Book'}">
  <!-- <header class="header"> -->
    <div class="insideHeaderConv">
      <!-- <h1 v-if="route === 'Index'">Index</h1>
      <h1 v-if="route === 'Contacts'">Échanges</h1> -->
      <!-- <h1 v-if="route === 'NewContact'">Nouveau Dialogue</h1> -->
      <GoBack></GoBack>
      <h1 v-if="route === 'Chat'">{{contactName}}</h1>
      <h1 v-if="route === 'ChatDemo'">{{guide}}</h1>
      <h1 class="book-title" v-if="route === 'Book'">{{chatName}}</h1>
      <toggle-button
          :value="false"
          @change="swipeHandler"
          :width="toggleWidth"
          :height="toggleHeight"
          :color="{checked: 'var(--color-main)', unchecked: 'lightgrey'}"
      />
<!--      <router-link v-if="route === 'Chat'" to="/book">Book</router-link>-->
<!--      <router-link v-if="route === 'Book'" to="/chat">Chat</router-link>-->
  </div>
  </header>
</template>
<script>

import GoBack from "../components/GoBack.vue";
export default {
  components:{
    GoBack
  },
  // props: {
  //   contactName: {
  //     default: "Loading...",
  //   }
  // },
  computed: {
    route() {
      return this.$route.name;
    },
  },
  data(){
    return{
      toggleWidth: 50,
      toggleHeight: 25,
       chatName: "Loading...",
       contactName: "Loading...",
       guide: "Guide"
    }
  },
  methods: {
    swipeHandler() {
      if (this.$route.name === "Book") {
        this.$router.replace({ path: '/chat' })
      } else {
        this.$router.replace({ path: '/book' })
      }

    },
    getContactName(){
      const chatID = this.$getters.listenConversation(this.$getters.currentChatID())
      const user = chatID.users
      const otherUser = Object.values(user).find((userID) => {
        return userID !== this.$getters.currentUserID();
      });
      const contactName = this.$getters.listenUser(otherUser).name;
      this.contactName = contactName;
      this.chatName = chatID.chatName;

    }


    },
  mounted(){
    this.getContactName();
  }

};
</script>
<style lang="scss">
h1{
  font-weight: normal;
  // margin-left: 7%;
}
.book-title{
  font-size: $msg-size;
}
.insideHeaderConv{
  display: flex;
  flex-direction: row;
  height: 80%;
  width: 90%;
  text-align: left;
  font-family: $font-main;
  // background: red;
  justify-content: space-between;
  align-items: center;
}
.white-header{
  background: linear-gradient(0deg, rgba(241,236,226,0) 0%, rgba(255,255,255,1) 100%) !important;
}
.header  {
  > div {
    &.book-fullscreen {
      background: red !important;
    }
  }
}
</style>
