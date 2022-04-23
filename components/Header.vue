<template>
  <header class="header">
      <h1>{{pageTitle}}</h1>
  </header>
</template>
<script>
export default {
  props:{
    pageTitle:{
      type: String
    }
  },
  computed: {
    
  },
  data(){
    return{
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
}
h1{
  font-weight: normal;
}
</style>
