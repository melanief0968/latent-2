<template>
  <footer class="footer classic">
    <div class="buttonIcone" @click="infos()">
      <img class="icone info" src="/img/info.png">
      <!-- <div>Index</div> -->
    </div>
    <router-link class="buttonIcone add" v-if="route === 'Contacts'" to="/newcontact">
          <img class="icone" src="/img/add-2.png">
          <!-- <div>Nouveau dialogue</div> -->
        </router-link>
    <router-link class="buttonIcone" v-if="route === 'Contacts'" to="/account">
      <img class="icone" src="/img/account.png">
      <!-- <div>Profil</div>  -->
    </router-link>

    <!-- <router-link buttonIcone v-if="route === 'Contacts'" to="/login">
      <img class="icone" src="/img/library.png">
      <div>Bibliothèque</div>
    </router-link> -->


  </footer>
</template>
<script>
export default {
  computed: {
    route() {
      return this.$route.name;
    },
  },
  methods:{
    infos(){
      const currentUserID = this.$getters.currentUserID();
      let chatBotID = this.$getters.listenUser(currentUserID).chatBotID;
      console.log(chatBotID)
       this.$router.push({
            path: "/chat",
            query: {
              // userId,
            },
          });
      this.$actions.setCurrentChatId(chatBotID);
    }
  }
};
</script>
<style lang="scss">
.footer {
  flex: 0 0 auto;
  height: 11%;
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-family: $font-main;
  background: $background-color;
  align-items: center;
  // padding:  20px 5%;
   border-top: .9px solid $contrast-color;
   padding: 0 5%;
}
.classic{
  justify-content: space-around;
}
.add{
      height: 80%;
    margin-bottom: 20%;
}
.info{
  height: 80%;
}
</style>
