<template>
  <div class="line-container">
    <div v-if="nbDots && this.$route.name === 'Chat' " class="dotContainer">
      <div v-for="dot in nbDots" class="dot">
        <div class="sentTime" v-if="dot === 1">1 jour</div>
        <div class="sentTime" v-else> {{ dot }} jours </div>
      </div>
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
<style scoped lang="scss">
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
  background: white;
  display: block;
  height: 5vw;
  width: 5vw;
  position: relative;
  div {
    white-space: nowrap;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
.dot::before {
  content: "";
  background: var(--dot-color);
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 5px;
  width: 5px;
  border-radius: 50%;
}
</style>
