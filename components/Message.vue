<template>
    <div class="messageBox leftBox">
      <div class="message leftMsg"> {{msgArray}} </div>
    </div>
</template>
<script>
export default {
    props: {
        // msgArray:{
        //     type: Array,
        // }
    },
    data() {
        return {
          msgArray: "hi"
        }
    },
    mounted() {
        // console.log('im born');
    },
    beforeDestroy() {
        // console.log('im dead');
    }
            // msgId: String,
            // usrId: String,
            // content: String,
            // time: String,
            // read: Boolean,
            // charAmount: Number,
            // wordsPerMin: Number,
            // eraseAmount: Number,
            // location: String,

}
</script>
<style lang="scss">
.messageBox{
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  width: 100%;
}
.message{
  padding: 10px;
  width : 55%;
  max-width: 70%;
  word-break: break-word;
  border: .9px solid $contrast-color;
  background-color: $background-color;
  color: black;
  font-size: $msg-size;
  font-family: $font-main;
}
.rightMsg{
  right:0;
  border-radius: 10px 0px 10px 10px;
}
.leftMsg{
  border-radius: 0px 10px 10px 10px;
}
.rightBox{
  width: 100%;
  margin-left:35%;
}
.leftBox{
  display: flex;
  justify-content: start;
}
</style>