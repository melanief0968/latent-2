<template>
    <span classe="go-back">
        <button @click="goBack">back</button>
    </span>
</template>

<script>
    export default {
        methods: {
            goBack(){
                if(this.$route.name === "Chat"){
                        this.$router.push({
                        path: "/contacts",
                    });
                }
                else{
                    return this.$router.go(-1);
                }
            }
        },
        computed:{
            route() {
            // return this.$route.name;
            },
        }
    };
</script>
<style scoped>
    .go-back{
        display: flex;
        cursor: pointer;
    }
    button{
        border: 0;
    }
</style>
