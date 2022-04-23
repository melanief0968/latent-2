<template>
  <div class="container">
    <Header v-bind:pageTitle="pageTitle"></Header>
    <main class="main">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import Bubble from "./components/Bubble.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Bubble,
    Header,
    Footer,
  },

  computed: {},

  data() {
    return {
      pageTitle: "Contacts"
    };
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


.footer {
  flex: 0 0 auto;
  background: blue;
}

.main {
  flex: 1 1 auto;
  overflow-y: scroll;
}
</style>
