<template>
  <div class="contactPage">
    <ListItem
      v-for="{ conversation, id } in conversations"
      :title="itemTitle(conversation)"
      :subtitle="setSubtitle(conversation)"
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

    itemTitlePerso(conversation) {
      
      if (!conversation.users) return;

      const otherUserID = Object.values(conversation.users).find((userID) => {
        return userID !== this.$getters.currentUserID();
      });
      return this.$getters.listenUser(otherUserID).name;

      // $getters.user(conversation.users);
    },
    itemTitle(conversation) {
      if (!conversation.users) return;
      console.log(conversation)
      const TITLE = conversation.chatName
      return TITLE
      // $getters.user(conversation.users);
    },
    setSubtitle(conversation){
      if (!conversation.sceneStage) return;
      if (!conversation.actStage) return;
      let scenes = ["scène I", "scène II", "scène III", "scène IV","scène V","scène VI","scène VII","scène VIII","scène IX", "scène X"]
      let acts = ["Acte I", "Acte II", "Acte III", "Acte IV","Acte V","Acte VI","Acte VII","Acte VIII","Acte IX", "Acte X"]
      let act = acts[conversation.actStage]
      let scene= scenes[conversation.sceneStage]
      let otherUser = this.itemTitle(conversation)
      let user = this.$getters.currentUserName()
      const subtitle = `${act}, ${scene}, ${otherUser} et ${user}`
      return subtitle
    }
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
