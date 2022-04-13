<template>
  <div class="container">
    <header class="header">yes</header>
    <main class="main">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import Bubble from "./components/Bubble.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Bubble,
    Footer,
  },

  computed: {},

  data() {
    return {};
  },
  mounted() {
    // console.log(this.$router);
    // this.$router.push({ path: "/login" });
  },
  methods: {
    update() {
      //   this.myVariable = "you clicked me" + Math.random();
      //   requestAnimationFrame(() => {
      //     this.update();
      //   });
    },
    buttonClick() {
      // console.log('hello');
    },
  },
};
</script>
<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  // background: $color-dark;
  display: flex;
  flex-direction: column;
}

.hello {
  /* color: $color-dark; */
  /* background-color: black; */
}
.header {
  flex: 0 0 auto;
  background: red;
}

.footer {
  flex: 0 0 auto;
  background: blue;
}

.main {
  flex: 1 1 auto;
  overflow-y: scroll;
}
</style>
