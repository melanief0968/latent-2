<template>
  <div class="newContactPage">
    <yellowLine :lineHeight="10"></yellowLine>
    <form @submit.prevent="onSubmit">
      <div class="text-basic">Avec Qui ?</div>
      <input type="text" placeholder="Nom d'auteur·ice·x" v-model="username" />
      <div class="text-basic">Pour la bibliothèque...</div>
      <input type="text" placeholder="Titre du texte" v-model="chatname" />
      <button type="submit">→</button>
      <div class="text-basic">{{ message }}</div>
    </form>
    <yellowLine></yellowLine>
  </div>
  <!-- <div v-for="index of 100">new contact {{index}}</div>     -->
</template>
<script>
import * as fb from "@/scripts/firebase";
import yellowLine from "@/components/yellowLine.vue";

const USER_ERROR = "Le nom d'auteur·ice·x n'existe pas.";
export default {
  components: {
    yellowLine,
  },
  data() {
    return {
      username: "",
      chatname: "",
      message: "",
    };
  },
  methods: {
    onSubmit(ev) {
      fb.filterEntries("users", "username", this.username).then((results) => {
        console.log(this.username);
        console.log(results);
        if (results === null) {
          this.message = USER_ERROR;
          return;
        }
        const [firstResult] = Object.entries(results);
        const [userId, props] = firstResult;
        const contactId = userId;
        const contactName = props.name;
        const currentUserID = this.$getters.currentUserID();
        const userName = this.$getters.currentUserName();
        const chatName = this.chatname;

        const chatId = fb.createEntry("/conversations/", {
          chatName,
        });

        fb.createEntry(`/conversations/${chatId}/users`, currentUserID);
        fb.createEntry(`/conversations/${chatId}/users`, contactId);

        fb.createEntry(`/users/${currentUserID}/conversations/`, chatId);
        fb.createEntry(`/users/${contactId}/conversations/`, chatId);
        // fb.setValue(`/users/${contactId}/conversations/${chatId}/`, {
        //   chatName,
        //   currentUserID,
        //   userName,
        // });
        this.$router.push({
          path: "/chat",
          query: {
            chatId: chatId,
          },
        });
      });
      //   console.log(this.username, this.password);
    },
  },
};
</script>
<style lang="scss">
.newContactPage {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.yellowLine {
  height: 30%;
}
</style>
