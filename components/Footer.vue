<template>
  <footer class="footer classic">
    <router-link class="buttonIcone" v-if="route === 'Contacts'" to="/index">
      <img class="icone" src="../static/img/index.png">
      <div>Index</div>
    </router-link>
    <router-link class="buttonIcone" v-if="route === 'Contacts'" to="/newcontact">
          <img class="icone" src="../static/img/add.png">
          <!-- <div>Nouveau dialogue</div> -->
        </router-link>
    <router-link class="buttonIcone" v-if="route === 'Contacts'" to="/account">
      <img class="icone" src="../static/img/profil.png">
      <div>Profil</div> 
    </router-link>

    <!-- <router-link buttonIcone v-if="route === 'Contacts'" to="/login">
      <img class="icone" src="/static/img/library.png">
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
  //  height: 4%;
}
</style>
