<template>
  <div class="didascalieBox">
    <div class="didascalie italic">{{text}}</div>
  </div>
</template>
<script>
import * as fb from "@/scripts/firebase.js";
import did from "@/scripts/didascalies.js";

export default {
  components: {
  did
  },
  props: {

  },
  data() {
    return {
      text: did,
    };
  },
  computed: {
  },

  methods: {},
  mounted() {},
  beforeDestroy() {
  },

};
</script>
<style lang="scss">
.didascalieBox {
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  display: flex;
  justify-content: center;
  width: 100%;

  .didascalie {
    padding: 10px;
    // width: 55%;
    max-width: 90%;
    word-break: break-word;
    text-align: center;
    color: black;
    font-size: $italic-size;
  }

}

</style>
