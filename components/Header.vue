<template>
  <header class="header">
      <h1 v-if="route === 'Contacts'">Échanges</h1>
      <h1 v-if="route === 'Chat'">{{contactName}}</h1>
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
       contactName: "Fred"
    }
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
h1{
  font-weight: normal;
}
</style>
