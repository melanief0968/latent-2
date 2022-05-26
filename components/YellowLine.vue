<template>
  <div class="line-container">
    <div v-if="nbDots && this.$route.name === 'Chat' " class="dotContainer">
      <div v-for="dot in nbDots" class="dot"></div>
    </div>
    <div class="yellowLine" :style="cssStyle"></div>
  </div>
</template>
<script>

export default {
  props: ['lineHeight', 'nbDots'],
  computed: {
    cssStyle() {
      return { height: this.lineHeight + "vh" };
    },
    route() {
      return this.$route.name;
    },
  },
};
</script>
<style scoped>
.line-container {
  position: relative;
}

.yellowLine {
  display: block;
  margin: auto;
  background-color: var(--color-main);
  /* height: 50px; */
  width: 2px;
}
.dotContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.dot {
  background: var(--dot-color);
  display: block;
  height: 5px;
  width: 5px;
  border-radius: 50%;
}
</style>
