<template>
  <div class="menu">
    <router-link :to="{name:menu.link}" v-for="(menu, index) in menus">
      <ListMenus
        :text="menu.name"
        :key="index"
        :name="menu.name"
      >
  <!--      @click.native="onItemClick(menus.name)"-->
          {{ menu.name }}
      </ListMenus>
    </router-link>
  </div>
</template>
<script>
import ListMenus from "@/components/ListMenus.vue";
import Header from '../components/Header.vue';


export default {
  components: {
    ListMenus,
    Header,
  },

  data() {
    return {
      menus:[
      {name:'Échanges', link:'Contacts'},
      {name:'Bibliothèque', link:'Contacts'},
      {name:'Profil', link:'Account'},
      {name:'Aide', link:'Account'},
    ]
    };
  },
  mounted() {
    let menuItem = this.menus;
  },
  methods: {
    onItemClick(menuItem) {
      console.log(this.menus.link)
      // this.$router.push({
      //   path: `/${this.menus.link}`,
      //   query: {
      //     // chatId,
      //   },
      // });
  },
  }
};
</script>
<style lang="scss">
.menu {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
}
</style>
