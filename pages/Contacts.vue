<template>
  <div class="contactPage">
    <div class="item"></div>
    <ListItem
      v-for="{ conversation, id } in sortedConversations"
      :title="itemTitle(conversation)"
      :subtitle="setSubtitle(conversation)"
      :key="id"
      :unread="checkReadMessages(conversation.messages, id)"
      @click.native="onItemClick(id)"
    >
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
      userProps: null,
      removeListener: () => {},
    };
  },

  beforeDestroy() {
    this.removeListener();
  },

  computed: {
    sortedConversations() {
      return this.conversations
        .map((entry, index) => {
          const messages = Object.keys(entry.conversation.messages || {});
          let lastMessageTime = index;
          if (messages && messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            lastMessageTime = parseInt(lastMessage);
            // console.log("msgtime", lastMessage);
          }

          return { ...entry, lastMessageTime };
        })
        .sort((a, b) => {
          return b.lastMessageTime - a.lastMessageTime;
        });
      //  let lastMessageTime = 0;
    },
  },

  mounted() {
    this.conversationList();
  },

  watch: {
    userProps(value) {
      // console.log("BOI", value.conversations);
      if (!value.conversations) return;

      console.log("New conv", Object.keys(value.conversations).length);

      const oldConversations = this.conversations;

      this.conversations = Object.values(value.conversations).map(
        (conversationId) => {
          const conversation = this.$getters.listenConversation(conversationId);

          // console.log(JSON.stringify(conversation))
          // let lastMessage = this.lastMessageData(conversation.messag);

          // console.log(conversation)
          // console.log(lastMessage)
          // lastMessage.sort(function (a, b) {
          // return parseInt(b[0], 10) - parseInt(a[0], 10);
          // });

          return { conversation, id: conversationId };
        }
      );

      // console.log(this.conversations);
      // .sort((a, b) => {
      //   return parseInt(b.lastMessageTime) - parseInt(a.lastMessageTime);
      // });
    },
  },

  methods: {
    checkReadMessages(conversationMessages, id) {
      // const userProps = this.$getters.user(currentUserID);
      console.log(this.userProps);
      const unreadmessages = Object.keys(
        this.userProps.unreadchats?.[id] || {}
      );
      console.log(this.userProps.unreadchats);
      const messages = Object.keys(conversationMessages || {});

      const unread = unreadmessages.some((messageId) => {
        return messages.includes(messageId);
      });

      // console.log(unread);

      // console.log('updating', conversation);
      // console.log(this.userProps.unreadmessages);
      return unread;
    },
    conversationList() {
      const currentUserID = this.$getters.currentUserID();
      this.userProps = this.$getters.listenUser(currentUserID);
      // this.userProps = this.$getters.user(currentUserID);
    },
    // lastMessageData(conversation) {
    //   // const lastMessages = [];
    //   if (conversation.messages) {
    //     // let messagesArray = Object.keys(conversation.messages);
    //     let lastMessage = messagesArray[messagesArray.length - 1];
    //     lastMessages.push(lastMessage);
    //     console.log(lastMessages);
    //     lastMessages.sort(function (a, b) {
    //       return parseInt(b[0], 10) - parseInt(a[0], 10);
    //     });
    //     // console.log(lastMessages)
    //   }
    //   // console.log(lastMessage)
    //   return lastMessages;
    // },
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
      const TITLE = conversation.chatName;
      return TITLE;
      // $getters.user(conversation.users);
    },
    setSubtitle(conversation) {
      // if (!conversation.sceneStage) return;
      // if (!conversation.actStage) return;
      // console.log(conversation.sceneStage, conversation.actStage)
      let scenes = [
        "scène I",
        "scène II",
        "scène III",
        "scène IV",
        "scène V",
        "scène VI",
        "scène VII",
        "scène VIII",
        "scène IX",
        "scène X",
      ];
      let acts = [
        "Acte I",
        "Acte II",
        "Acte III",
        "Acte IV",
        "Acte V",
        "Acte VI",
        "Acte VII",
        "Acte VIII",
        "Acte IX",
        "Acte X",
      ];
      let act = acts[conversation.actStage];
      let scene = scenes[conversation.sceneStage];
      let otherUser = this.itemTitlePerso(conversation);
      let user = this.$getters.currentUserName();
      const subtitle = `${act}, ${scene}, ${otherUser} et ${user}`;
      return subtitle;
    },
  },
};
</script>
<style lang="scss">
.item {
  width: 90%;
  height: 11vh;
  margin: auto;
  box-sizing: border-box;
  position: relative;
  padding-top: 2%;
  padding-bottom: 4%;

  display: flex;
  flex-direction: column;
}
.contactPage {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
}
</style>
