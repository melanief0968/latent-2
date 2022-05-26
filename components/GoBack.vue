<template>
  <button class="go-back" @click="goBack">back</button>
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
      top: 5vh;
    left: 4vw;
    position: absolute;
  cursor: pointer;
  z-index:100
}
button {
  border: 0;
}
</style>
