<template>
  <footer class="footer">
    <div class="input-container">
      <input type="text" placeholder="Message" v-model="message"/>
      <button type="submit">→</button>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
  },
  data(){
    return{
      message:""
    }
  }
};
</script>
<style lang="scss">
.input-container{
  // bottom: 0;
  // left: 0;
  // display: flex;
  // justify-content: space-around;
  // flex-direction: row-reverse;
  // align-items: center;
  // width: 95vw;
  // background-color: $background-color;
  // text-align: left;
  // font-family: var(--normalFont);
  // font-size: var(--normalSize);
  // padding: 10px 0px;
  // min-height: 8%;
  // z-index: 100;
}
</style>
