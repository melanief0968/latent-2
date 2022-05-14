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
      this.lineHeight > 150 ?  this.isDot = true : this.isDot = false;

      return { height: this.lineHeight + "px" };
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
  height: 5px;
  width: 5px;
  border-radius: 50%;
}
</style>
