<template>
  <div class="contactContent">
    <div class="contactName">
      {{textShown}}
      <!-- <slot></slot> -->
    </div>
    <div class="description italic">{{description}}</div>
    <!-- <button :disabled="unread">{{textShown}}
        </button> -->
    <div :class="iconClasses"></div>
    <!-- <hr /> -->
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    unread: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      color: "blue",
      yes: true,
      description: "Acte I, scène II",
    };
  },
  computed: {
    iconClasses() {
      return { "status-icon": true, unread: this.unread };
    },
    textShown() {
        return `${this.text}`
    }
  },
};
</script>
<style lang="scss">
  .contactContent {
    width:90%;
    margin: auto;
    box-sizing: border-box;
    position: relative;
    padding-top: 2%;
    padding-bottom: 4%;
    border-bottom: 2px solid $color-main;
  }
  .contactName{
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
