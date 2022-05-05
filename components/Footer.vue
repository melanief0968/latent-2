<template>
  <footer class="footer">
    <router-link class="buttonIcone" v-if="route === 'Contacts'" to="/index">
      <img class="icone" src="/static/img/index.png"></img>
      <div>Index</div>
    </router-link>
    <router-link buttonIcone v-if="route === 'Contacts'" to="/newcontact">
      <img class="icone" src="/static/img/people.png"></img>
      <div>Profil</div> 
    </router-link>
    <router-link buttonIcone v-if="route === 'Contacts'" to="/login">
      <img class="icone" src="/static/img/library.png"></img>
      <div>Bibliothèque</div>
    </router-link>


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
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-family: $font-main;
  background: $background-color;
  padding:  20px 5%;
   border-top: .9px solid $contrast-color;
}</style>
