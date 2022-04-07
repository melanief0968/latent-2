<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        myText: {
            // default: "hello",
            // required: true,
            type: String,
        },
    },
    data() {
        return {
            
        }
    },
    mounted() {
        // console.log('im born');
    },
    beforeDestroy() {
        // console.log('im dead');
    }

}
</script>