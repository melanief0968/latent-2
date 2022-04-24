<template>
    <div class="chat-container">
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <!-- <div v-for="index of 100">new contact {{index}}</div>     -->
    </div> 
</template>
<script>
import Message from "@/components/Message.vue";
export default {
    components:{
        Message,
    },
}
</script>
<style lang="scss">
.chat-container{
// height: 80%;
  width:90%;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  margin: auto;
}
</style>