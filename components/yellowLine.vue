<template>
  <div class="yellowLine" :style="cssStyle">
    <!-- {{lineHeight}} -->
  </div>
</template>
<script>
export default {
  props: {
    lineHeight: {
      type: String,
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

}
</style>
