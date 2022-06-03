<template>
  <div class="didascalieBox" :class="{'didBox-book': route ==='Book'}">
    <img v-if="this.icon !== undefined " :src="iconType" class="didIcon"></img>
    <div class="didascalie italic" :class="{'did-book': route ==='Book'}">{{text}}</div>
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
  props: ['name', 'text', 'icon'],
  computed: {
    route() {
      return this.$route.name;
    },
    iconType() {
      if (this.icon === undefined) {
        return ""
      } else {
        return "../../static/img/" + this.icon + ".png"
      }
    }
  },
  methods: {
    // test(name,_case){
    //   // this.text = didascalies["msg"]["char"]["level3"]["positive"][_case][0]["m"]({"name":name,"time":"6h"});
      // this.text = didascalies[outputSignal][inputType][level][result][_case][0][gender]({"name":name,outputValue:outputValue});
    //
    // }
  },
  mounted() {
    // this.test(this.name, this._case)
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
  align-items: center;
  flex-direction: column;

  width: 100%;

  .didascalie {
    padding: 10px;
    // width: 55%;
    max-width: 90%;
    word-break: break-word;
    text-align: center;
    color: black;
    font-size: $italic-size;
    position: relative;
  }
  .didIcon {
    display: block;
    width: 15px;
  }


  .did-book{
    text-align: left;
  }
}
.didBox-book{
  align-items: left ;
}

</style>
