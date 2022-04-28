<template>
  <div class="yellowLine" :style="cssStyle">
    <!-- {{lineHeight}} -->
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
      return { height: this.lineHeight + "px" };
    },
  },

  data() {
    return {};
  },
};
</script>
<style lang="scss">
.yellowLine {
  flex: 0 0 auto;
  background-color: $color-main;
  height: 50px;
  width: 2px;
  margin: $margin-5 0;
}
</style>
