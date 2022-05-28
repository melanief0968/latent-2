<template>
  <div class="container">
    <GoBack v-if="route != 'Login'"></GoBack>
    <!-- <Header v-bind:pageTitle="pageTitle"></Header> -->
    <Header v-if="route === 'Contacts'"></Header>
    <Header v-if="route === 'NewContact'"></Header>
    <Header v-if="route === 'Index'"></Header>
    <Header v-if="route === 'Account'"></Header>
    <!-- <Header v-if="route === 'NewContact'"></Header> -->
    <HeaderChat v-if="route === 'Chat'"></HeaderChat>
    <HeaderChat v-else-if="route === 'Book'"></HeaderChat>
    <main class="main" :class="{'book-background': route ==='Book'}" >
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </main>
    <Footer v-if="route === 'Contacts'"></Footer>

    <!-- <FooterChat v-if="route === 'Chat'"></FooterChat> -->
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import GoBack from "./components/GoBack.vue";   
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
    GoBack
    // FooterChat,
  },

  computed: {
    route() {
      return this.$route.name;
    },
  },

  data() {
    return {
      transitionName: '',
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
  watch: {
    '$route' (to, from) {
      if (to.path === '/chat' && from.path === '/book') {
        this.transitionName = 'right';
      } else if (to.path === '/book' && from.path === '/chat') {
        this.transitionName = 'left';
      } else {
        this.transitionName = '';
      }
    }
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
