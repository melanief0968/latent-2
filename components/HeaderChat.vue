<template>
  <header class="header">
      <!-- <h1 v-if="route === 'Index'">Index</h1>
      <h1 v-if="route === 'Contacts'">Échanges</h1>
      <h1 v-if="route === 'NewContact'">Nouveau Dialogue</h1> -->
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
       contactName: "FRED",
       chatName: "FREDDIIE",
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
  justify-content: space-between;
}
h1{
  font-weight: normal;
}
</style>
