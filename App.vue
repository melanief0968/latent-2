<template>
  <div class="container">
    <!-- <Header v-bind:pageTitle="pageTitle"></Header> -->
    <Header v-if="route === 'Contacts'"></Header>
    <HeaderChat v-if="route === 'Chat'"></HeaderChat>
    <HeaderChat v-else-if="route === 'Book'"></HeaderChat>
    <main class="main">
      <router-view></router-view>
    </main>
    <Footer v-if="route === 'Contacts'"></Footer>
    <!-- <FooterChat v-if="route === 'Chat'"></FooterChat> -->
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import Bubble from "./components/Bubble.vue";
import HeaderChat from "./components/HeaderChat.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import FooterChat from "./components/FooterChat.vue";

export default {
  components: {
    Bubble,
    HeaderChat,
    Header,
    Footer,
    FooterChat,
  },

  computed: {
    route() {
      return this.$route.name;
    },
  },

  data() {
    return {
      // pageTitle: "Contacts"
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


// .footer {
//   flex: 0 0 auto;
//   background: blue;
// }

.main {
  flex: 1 1 auto;
  overflow-y: scroll;
}
</style>
