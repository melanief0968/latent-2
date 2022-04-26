<template>
  <div class="menu">
    <ListMenus  v-for="(menu, index) in menus"
      :text="menu.name"
      :key="index"
    >
      {{ menu.name }}
    </ListMenus>
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
      {name:'Échanges', link:'to define'},
      {name:'Bibliothèque', link:'to define'},
      {name:'Profil', link:'to define'},
      {name:'Aide', link:'to define'},
    ]
    };
  },
  mounted() {
  },
  methods: {
    
  },
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
