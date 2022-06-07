<template>
  <button class="go-back" @click="goBack">
    <img class="icone-back" src="../static/img/back.png"></button>
</template>

<script>
export default {
  methods: {
    goBack() {

        
    //   this.$actions.setLogin(false);

    //   this.$router.push({
    //     path: "/login",
    //   });

    //   return;
    // console.log("CLICK")

      if (this.$route.name === "Chat") {
        this.$router.push({
          path: "/contacts",
        });
      } else {
        return this.$router.go(-1);
      }
    },
  },
  computed: {
    route() {
      // return this.$route.name;
    },
  },
};
</script>
<style scoped>
.go-back {
  cursor: pointer;
  z-index:100;
  height:25px
}
button {
  border: 0;
  padding: 0;
}
.icone-back{
  height:100%;
}
</style>
