<template>
  <div class="newContactPage">
    <!-- <div class="item3"></div> -->
    <form class= "newContact" @submit.prevent="onSubmit">
    <YellowLine :lineHeight="yellowLineHeight()"></YellowLine>
      <div class="text-basic">Avec Qui ?</div>
      <input type="text" placeholder="Nom d'auteur·ice·x" v-model="username" />
      <div class="text-basic">Titre de la conversation</div>
      <input type="text" placeholder='"En attendant Godot"' v-model="chatname" />
      <button class="text-basic connect" type="submit">Créer</button>
      <div class="text-basic">{{ message }}</div>
    <YellowLine :lineHeight="yellowLineHeight()"></YellowLine>
    </form>
  </div>
  <!-- <div v-for="index of 100">new contact {{index}}</div>     -->
</template>
<script>
import * as fb from "@/scripts/firebase";
import YellowLine from "@/components/YellowLine.vue";

const USER_ERROR = "Le nom d'auteur·ice·x n'existe pas.";
const CONV_ERROR = "Vous avez déjà une conversation en cours avec cette personne.";
export default {
  components: {
    YellowLine,
  },
  data() {
    return {
      username: "",
      chatname: "",
      message: "",
    };
  },
  methods: {
     yellowLineHeight(){
      let height = 12
      return height;
    },
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
        console.log(contactId);
        const contactName = props.name;
        const currentUserID = this.$getters.currentUserID();

        const userName = this.$getters.currentUserName();
        const chatName = this.chatname;
        const sceneStage = 0
        const actStage = 0
        const distance = "Une certaine distance"
        const type = this.playtype()

        const chatId = fb.createEntry("/conversations/", {
          chatName, sceneStage,actStage,distance,type
        });
       
        this.$actions.setCurrentChatId(chatId);
        // console.log(this.$getters.currentChatID())
        fb.createEntry(`/conversations/${chatId}/users`, currentUserID);
        fb.createEntry(`/conversations/${chatId}/users`, contactId);
          // console.log(currentUserID,contactId)

        fb.createEntry(`/users/${currentUserID}/conversations/`, chatId);
        fb.createEntry(`/users/${contactId}/conversations/`, chatId);

        this.$router.push({
          path: "/chat",
          query: {
            // chatId: chatId,
          },
        });
            
  

      // this.$actions.setCurrentChatId(chatId);
      // console.log(currentUserID,contactId)
      });
      //   console.log(this.username, this.password);
    },
    playtype(){
      let types = ["Drame", "Comédie", "Comédie musicale","Farce", "Mélodrame", "Tragédie", "Tragi-comédie", "Satire", "Romance", "Vaudeville", "Improvisation"]
      let random = Math.floor(Math.random() * types.length);
      const type = types[random];
      return type
    },
  },
  mounted(){
    
    // console.log(this.$getters.user(currentUserID));
  }
};
</script>
<style lang="scss" scoped>
.newContactPage {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

}
.yellowLine {
  height: 20%;
  min-height: 10%;
}
.item3 {
  width: 90%;
  height: 11vh;
  // margin: auto;
  box-sizing: border-box;
  position: relative;
  padding-top: 2%;
  padding-bottom: 4%;

  display: flex;
  flex-direction: column;
}
.connect{
  margin:0;
  font-weight: 100;
}

</style>
