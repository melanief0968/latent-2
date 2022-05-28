<template>
  <div class="contactContent">
    <div class="contactName">{{ textShown }}</div>
    <div class="description italic">{{ subtitle }}</div>
    <!-- <button :disabled="unread">{{textShown}}
        </button> -->
    <div :class="iconClasses"></div>
    <slot></slot>
    <!-- <hr /> -->
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Loading...'
    },
    subtitle: {
      type: String,
      required: false,
      default: "Acte I, scène I",
    },
    unread: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      color: "blue",
    };
  },
  computed: {
    iconClasses() {
      return { "status-icon": true, unread: this.unread };
    },
    textShown() {
      return `${this.title}`;
    },
    subTextShown(){
      //acte, scène, persos
    }
  },
};
</script>
<style lang="scss">
.contactContent {
  width: 90%;
  margin: auto;
  box-sizing: border-box;
  position: relative;
  padding-top: 2%;
  padding-bottom: 4%;
  border-bottom: 2px solid $color-main;
}
.contactName {
  font-family: $font-main;
  font-size: $title-size;
}
.lastItalic {
  font-size: $msg-size;
  padding-top: 1vh;
}

.status-icon {
  // width: 1em;
  // height: 1em;
  right: 0;
  top: 20%;
  height: 20px;
  width: 20px;
  border-radius: 200%;
  position: absolute;

  &.unread {
    background-color: $color-main;
  }
}
</style>
