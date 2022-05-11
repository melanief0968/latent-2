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
  // On passe le name et le case en props pour les définir dans la boucle de chat
  props: ['name', '_case'],
  data() {
    return {
      text: "no text",
    };
  },
  computed: {

  },
  methods: {
    test(name,_case){
      this.text = didascalies["msg"]["char"]["level3"]["positive"][_case][0]["m"]({"name":name,"time":"6h"});
    }
  },
  mounted() {
    this.test(this.name, this._case)
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
