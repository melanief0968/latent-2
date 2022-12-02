<template>
  <div class="contactPage">
    <div class="item"></div>
    
    <ListItem
      v-for="{ conversation, id } in sortedConversations"
      :title="itemTitle(conversation)"
      :subtitle="setSubtitle(conversation)"
      :key="id"
      @click.native="onItemClick(id)"
    >
    </ListItem>

    <!-- <button>Add new conversation</button> -->
  </div>
</template>
<script>
import ListItem from "@/components/ListItem.vue";
import * as fb from "@/scripts/firebase";

export default {
  components: {
    ListItem
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
      // if (!value.conversations) return;

      this.conversations = Object.values(value).map(
        (conversationId) => {
          const conversation = this.$getters.listenConversation(conversationId);

          return { conversation, id: conversationId };
        }
      );

    },
  },

  methods: {
    // checkReadMessages(conversationMessages, id) {
    //   // const userProps = this.$getters.user(currentUserID);
    //   // console.log(this.userProps);
    //   const unreadmessages = Object.keys(
    //     this.userProps.unreadchats?.[id] || {}
    //   );
    //   // console.log(this.userProps.unreadchats);
    //   const messages = Object.keys(conversationMessages || {});

    //   const unread = unreadmessages.some((messageId) => {
    //     return messages.includes(messageId);
    //   });


    //   return unread;
    // },
    conversationList() {
      fb.listen(`conversations`, value=>{
        let chatIds = Object.keys(value)
        this.userProps = chatIds
      })

    },

    onItemClick(chatId) {
      this.$router.push({
        path: "/web",
        query: {
          // chatId,
        },
      });
      this.$actions.setCurrentChatId(chatId);
    },

    itemTitlePerso(conversation) {
      if (!conversation.users) return;
      const otherUserID = Object.values(conversation.users).find((userID) => {
        return userID !== this.$getters.currentUserID();
      });
      const UserID = Object.values(conversation.users).find((otherID) => {
        return otherID !== otherUserID;
      });
  
      const name1 = this.$getters.listenUser(otherUserID).name
      const name2 = this.$getters.listenUser(UserID).name
      const names = {name1, name2}
      return names;

    },
 
    itemTitle(conversation) {

      if (!conversation.users) return;
      const TITLE = conversation.chatName;
      return TITLE;
      // $getters.user(conversation.users);
    },
    setSubtitle(conversation) {

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
      let otherUser = this.itemTitlePerso(conversation).name1;
      let user = this.itemTitlePerso(conversation).name2;
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
