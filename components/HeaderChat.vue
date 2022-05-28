<template>
  <header class="header">
      <!-- <h1 v-if="route === 'Index'">Index</h1>
      <h1 v-if="route === 'Contacts'">Échanges</h1> -->
      <!-- <h1 v-if="route === 'NewContact'">Nouveau Dialogue</h1> -->
      <h1 v-if="route === 'Chat'">{{contactName}}</h1>
      <h1 v-if="route === 'Book'">{{chatName}}</h1>
      <router-link v-if="route === 'Chat'" to="/book">Book</router-link>
      <router-link v-if="route === 'Book'" to="/chat">Chat</router-link>
  </header>
</template>
<script>
export default {
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
       chatName: "Loading...",
       contactName: "Loading...",
    }
  },
  methods: {
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
  margin-left: 7%;
}

</style>
