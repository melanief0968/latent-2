<template>
  <div class="contactContent">
    <div class="contactName">{{ textShown }}</div>
    <div class="description-listItem italic">{{ subtitle }}</div>
    <!-- <button :disabled="unread">{{textShown}}
        </button> -->
    <div :class="iconClasses">
    </div>
      <!-- <img  src="/img/notif.png" :class="iconClasses"> -->
    <!-- <slot></slot> -->
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
      default: true,
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
      return `${this.subtitle}`;
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
  display: flex;
  flex-direction: column;

}
.description-listItem{
  font-size: 15px;
  text-align: left;
}
.contactName {
  font-family: $font-main;
  font-size: $medium-size;
  // text-transform: capitalize;
}
.lastItalic {
  font-size: $msg-size;
  padding-top: 1vh;
}

.status-icon {
  // width: 1em;
  // height: 1em;

  right: 8%;
  top: 20%;
  height: 14px;
  width: 14px;
  border-radius: 200%;
  position: absolute;

  &.unread {
    //background-color: $color-main;
    background-image:  url("/img/notif.png");
    background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
