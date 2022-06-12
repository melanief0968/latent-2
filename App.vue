<template>
  <!-- <div class="container" :class=" { 'book-fullscreen' : isFullScreen } "> -->
  <div class="container">
    <transition name="fade-preloader">
      <div class="preloader" v-if="this.preloader === true">
        <div id="loadingContainer">
          <div id="loadingBox">
            <div id="loadingYellowLine" :class="{ 'loadingYellowLineActive': loadingYL }">
            </div>
            <div id="loadingWhiteBox" :class="{ 'loadingWhiteBoxActive': loadingWB }">
            </div>
            <div id="loadingLogo" :class="{ 'loadingLogoActive': loadingLogo }">
              LATENT*
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- <Header v-bind:pageTitle="pageTitle"></Header> -->
    <Header v-if="route === 'Contacts'"></Header>
    <Header v-if="route === 'NewContact'"></Header>
    <Header v-if="route === 'Index'"></Header>
    <Header v-if="route === 'Account'"></Header>
    <!-- <Header v-if="route === 'NewContact'"></Header> -->
    <HeaderChat v-if="route === 'Chat'"></HeaderChat>
    <HeaderChat v-else-if="route === 'Book'"></HeaderChat>
    <main @click="toggleMessage" class="main" :class="{'book-background': route ==='Book'}" >
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
    animation() {

    }
  },

  data() {
    return {
      isFullScreen: false,
      preloader: true,
      loadingYL: false,
      loadingWB: false,
      loadingLogo: false,
      transitionName: '',
      // pageTitle: "Contacts"
    };
  },

  mounted() {
    // console.log(this.$router);
    // this.$router.push({ path: "/login" }); setTimeout(function() {
    // this.computed.animation()
    setTimeout(function() {
      this.loadingYL = true
    }.bind(this), 500);
    setTimeout(function() {
      this.loadingWB = true
      console.log(this.loadingWB)
    }.bind(this), 1000);
    setTimeout(function() {
      this.loadingLogo = true
    }.bind(this), 1800);
    setTimeout(function() {
      this.loadingYL = false
    }.bind(this), 3500);
    setTimeout(function() {
      this.preloader = false
    }.bind(this), 4800);
  },

  methods: {
    toggleMessage () {
     this.$route.name === "Book" ? this.isFullScreen = !this.isFullScreen : this.isFullScreen;
    },
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

  &.book-fullscreen {
    main {
      overflow-y: hidden;
    }
    header, .footer {
      transition: all  0.2s linear;
      background: #F8F6F2 !important;
      border-bottom: 0.9px solid transparent;
    }
    .footer {
      border-top: 0.9px solid transparent;
    }

  }
  &:not(.book-fullscreen) {
    header, .footer {
      transition:all  0.2s linear;
    }
  }
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
  background-color: white;
  flex: 1 1 auto;
  overflow-y: scroll;
}
</style>
