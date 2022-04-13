<template>
  <footer class="header">
      yers
    <router-link v-if="route === 'Contacts'" to="/newcontact">Add new</router-link>
  </footer>
</template>
<script>
export default {
  computed: {
    route() {
      return this.$route.name;
    },
  },
};
</script>
<style lang="scss"></style>
