<template>
  <div class="container">
    <nav class="menuBar">
      <router-link to="/login">Login</router-link>
    </nav>
    <main class="main">
        <router-view></router-view>
    </main>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import Bubble from "./components/Bubble.vue";

export default {
  components: {
    Bubble,
  },

  data() {
    return {};
  },
  mounted() {},
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
    background: $color-dark;
    display: flex;
    flex-direction: column;
}

.hello {
  /* color: $color-dark; */
  /* background-color: black; */
}
.menuBar {
    flex: 0 0 auto;
    background: white;
}
.main {
    flex: 1 1 auto;
}

</style>
