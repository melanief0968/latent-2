<template>
  <footer class="footer book">
    <div class="navigation-container">
      <a class="navigation">≤</a>
      <div>{{pageNumber}}</div>
      <a class="navigation">≥</a>
    </div>
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
<style lang="scss" scoped>
.navigation-container {
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.book{
  height: 100%;
  background-color: white
}

.navigation > span, p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: left;
}


</style>
