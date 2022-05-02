<template>
  <div class="contactPage">
    <ListItem
      v-for="{ conversation, id } in conversations"
      :title="itemTitle(conversation)"
      :key="id"
      @click.native="onItemClick(id)"
    >
      <div class="unread"></div>
    </ListItem>

    <!-- <button>Add new conversation</button> -->
  </div>
</template>
<script>
import ListItem from "@/components/ListItem.vue";

export default {
  components: {
    ListItem,
  },

  data() {
    return {
      people: [],
      conversations: [],
      removeListener: () => {},
    };
  },

  beforeDestroy() {
    this.removeListener();
  },

  computed: {},

  mounted() {
    const currentUserID = this.$getters.currentUserID();

    const userProps = this.$getters.user(currentUserID);

    if (userProps.conversations) {
      this.conversations = Object.values(userProps.conversations).map(
        (conversationId) => {
          const conversation = this.$getters.listenConversation(conversationId);
          return { conversation, id: conversationId };
        }
      );
    }
  },
  methods: {
    onItemClick(chatId) {
      this.$router.push({
        path: "/chat",
        query: {
          // chatId,
        },
      });
      this.$actions.setCurrentChatId(chatId);
    },
    randomBoolean() {
      return Boolean(Math.round(Math.random()));
    },

    itemTitle(conversation) {
      if (!conversation.users) return;

      const otherUserID = Object.values(conversation.users).find((userID) => {
        return userID !== this.$getters.currentUserID();
      });

      return this.$getters.listenUser(otherUserID).name;
      // $getters.user(conversation.users);
    },
  },
};
</script>
<style lang="scss">
.contactPage {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
}
</style>
