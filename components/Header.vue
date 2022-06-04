<template>
  <header class="header">
      <h1 v-if="route === 'Index'">Index</h1>
      <h1 class="latent" v-if="route === 'Contacts'">LATENT*</h1>
      <h1 v-if="route === 'Account'">Profil</h1>
      <router-link class="buttonIcone" v-if="route === 'Contacts'" to="/newcontact">
        <img class="icone" src="../static/img/add.png">
        <!-- <div>Nouveau dialogue</div> -->
      </router-link>
      <h1 v-if="route === 'NewContact'">Nouveau Dialogue</h1>
      <!-- <h1 v-if="route === 'Chat'">{{contactName}}</h1> -->
  </header>
</template>
<script>

export default {
  components:{

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
  display: flex;
   height: 10%;
  flex: 0 0 auto;
  flex-direction: row;
  text-align: left;
  font-family: $font-main;
  background: $background-color;
  padding:  0 5%;
  border-bottom: .9px solid $contrast-color;
  justify-content: space-between;
  align-items: center;
}
.buttonIcone{
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30%;
}
.icone{
  height: 100%;
}
.latent{
  font-family: $font-italic;
}

</style>
