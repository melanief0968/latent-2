<template>
  <div>
    <div class="title">
      {{textShown}}
      <!-- <slot></slot> -->
    </div>
    <button :disabled="unread">{{textShown}}
        </button>
    <div :class="iconClasses"></div>
    <hr />
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
    };
  },
  computed: {
    iconClasses() {
      return { "status-icon": true, unread: this.unread };
    },
    textShown() {
        return `Person: ${this.text}`
    }
  },
};
</script>
<style lang="scss">
.status-icon {
  width: 1em;
  height: 1em;

  &.unread {
    background-color: blue;
  }
}
</style>
