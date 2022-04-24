<template>
  <footer class="footer">
   
    <router-link v-if="route === 'Contacts'" to="/login">Index</router-link>
    <router-link v-if="route === 'Contacts'" to="/newcontact">Nouveau dialogue</router-link>
    <router-link v-if="route === 'Contacts'" to="/login">Bibliothèque</router-link>

  </footer>
</template>
<script>
export default {
  computed: {
    route() {
      return this.$route.name;
    },
  },
};
</script>
<style lang="scss">
.footer {
  flex: 0 0 auto;
  text-align: left;
  font-family: $font-main;
  background: $background-color;
  padding:  0 5%;
   border-top: .9px solid $contrast-color;
}</style>
