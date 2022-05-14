<template>
  <div class="line-container">
    <div class="dot" v-if="isDot"></div>
    <div class="yellowLine" :style="cssStyle"></div>
  </div>
</template>
<script>
export default {
  props: {
    lineHeight: {
      type: Number,
    },
  },
  computed: {
    cssStyle() {
      if (this.lineHeight >= 150) {
        this.isDot = true
      } else {
        this.isDot = false
      }
      return { height: this.lineHeight + "px" };
    },
    dotDisplay() {
      this.lineHeight >= 200 ? this.isDot = true : this.isDot = false
    },

  },

  data() {
    return {
      isDot: false,
    };
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
  height: 50px;
  width: 2px;
}
.dot {
  background: var(--dot-color);
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 10px;
  width: 10px;
  border-radius: 50%;
}
</style>
