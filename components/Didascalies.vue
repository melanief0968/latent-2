<template>
  <div class="didascalieBox">
    <div class="didascalie italic">{{text}}</div>
  </div>
</template>
<script>
import * as fb from "@/scripts/firebase.js";
import didascalies from "@/scripts/didascalies.js";

export default {
  components: {
  didascalies
  },
  props: {

  },
  data() {
    return {
      text: "salut",
    };
  },
  computed: {
  },

  methods: {
    test(name,_case){

      /**
       * 
       */

      this.text = didascalies["msg"]["char"]["supposition"]["positive"][_case][0]["m"]({"name":name,"time":"12h"});
    }
  },
  mounted() {
    // this.test();
  },
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
