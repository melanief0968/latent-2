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
  props:{
    // contactName:{
    //   type: String
    // }
  },
  computed: {
    route() {
      return this.$route.name;
    },
  },
  data(){
    return{
       contactName: "Loading...",
       chatName: "Loading...",
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
.header {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  text-align: left;
  font-family: $font-main;
  background: $background-color;
  padding:  0 5%;
  border-bottom: .9px solid $contrast-color;
  justify-content: space-between;
}
h1{
  font-weight: normal;
}
</style>
