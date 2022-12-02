<template>
  <header class="header">
      <div class="insideHeader" :class="{'header-center': route==='Contacts'}">
        <GoBack v-if="route != 'Contacts'"></GoBack>
        <h1 v-if="route === 'Index'">Index</h1>
        <h1 class="latent italic" v-if="route === 'Contacts'">LATENT*</h1>
        <h1 class="latent italic" v-if="route === 'AllConversations'">ARCHIVES</h1>
        <h1 v-if="route === 'Account'">Profil</h1>
        <!-- <router-link class="buttonIcone" v-if="route === 'Contacts'" to="/newcontact">
          <img class="icone" src="/img/add.png">
        </router-link> -->
        <h1 v-if="route === 'NewContact'">Nouveau Dialogue</h1>
        <!-- <h1 v-if="route === 'Chat'">{{contactName}}</h1> -->
      </div>
  </header>
</template>
<script>
import GoBack from "../components/GoBack.vue";
export default {
  components:{
    GoBack
  },
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
      //  contactName: "Fred"
    }
  },
  methods: {

  },
  mounted(){
  }

};
</script>
<style lang="scss">
.header {
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 15vh;
  display: flex;
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 40%);
  justify-content: center;
  align-items: flex-start;
}
.insideHeader{
  display: flex;
  flex-direction: row;
  height: auto;
  width: 90%;
  text-align: left;
  font-family: $font-main;
  // background: red;
  // padding:  0 5%;
  // border-bottom: .9px solid $contrast-color;
  justify-content: start;
  align-items: center;
}
.header-center{
  justify-content: center;
}
.buttonIcone{
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50%;
}
.icone{
  height: 100%;
}
.latent{
  font-family: $font-italic;
  text-align: center;
  // margin-left: 25%;
}

</style>
