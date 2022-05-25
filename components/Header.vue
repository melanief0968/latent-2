<template>
  <header class="header">
      <h1 v-if="route === 'Index'">Index</h1>
      <h1 v-if="route === 'Contacts'">Échanges</h1>
      <router-link class="buttonIcone" v-if="route === 'Contacts'" to="/newcontact">
        <img class="icone" src="../static/img/people.png">
        <div>Nouveau dialogue</div>
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
  flex: 0 0 auto;
  text-align: left;
  font-family: $font-main;
  background: $background-color;
  padding:  0 5%;
  border-bottom: .9px solid $contrast-color;
}
.buttonIcone{
  // display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
h1{
  font-weight: normal;
}
</style>
