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
        chatname:"",
        message: "",
        };
    },
    methods: {
        onSubmit(ev) {
            fb.filterEntries("users", "username", this.username).then((results) => {
                if (results === null) {
                    this.message = USER_ERROR;
                    return;
                }
                const [firstResult] = Object.entries(results);
                const [userId] = firstResult;
                const contactId= userId;
                const currentUserID = this.$getters.currentUserID();
                const chatName = this.chatname;
    
                const chatId = fb.createEntry("/conversations/", {contactId:contactId,currentUserID, chatName});


                fb.setValue(`/users/${currentUserID}/conversations/${chatId}/`,{chatName});
                fb.setValue(`/users/${contactId}/conversations/${chatId}/`,{chatName});
                this.$router.push({
                    path: "/chat",
                    query: {
                    chatId:chatId,
                    },
                });
            });
        //   console.log(this.username, this.password);
        },
    },
}
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
.yellowLine{
    height: 30%;
}
</style>