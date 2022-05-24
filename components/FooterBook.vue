<template>
  <footer class="footer">
      <button>≤</button>
      <div>{{pageNumber}}</div>
      <button>≥</button>
    <div class="navigation-container"></div>
  </footer>
</template>
<script>

export default {
  computed: {},
  data() { 
    return{
      pageNumber:1
    }
  },
  methods: {
  },
};
</script>
<style lang="scss">
.navigation-container {
  bottom: 0;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
}
</style>
