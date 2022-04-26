<template>
  <div class="menuContainer">
    <!-- <div class="menuItem" v-for="menu in menus">{{menu.name}}</div> -->
    <div class="menuItem">{{textShown}}</div>
  </div>
</template>
<script>
export default {
  props:{
    text: {
      type: String,
      required: true,
    },
  },
 
  data() {
    return {
    };
  },
  computed: {
   textShown() {
        return `${this.text}`
    }
  },
};
</script>
<style lang="scss">
  .menuContainer {
    width:90%;
    margin: auto;
    box-sizing: border-box;
    position: relative;
    padding: 2% 0;
    border-bottom: 2px solid $color-main;
  }
  .menuItem{
    padding: 4% 0;
    font-family: $font-main;
    font-size: $title-size;
  }


</style>
