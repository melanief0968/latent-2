<template>
  <div class="signInPage">
    <div class="title italic">LATENT*</div>
    <div class="login-description italic">
      L'espace de conversation sur mesure.
    </div>
    <YellowLine :lineHeight="yellowLineHeight()"></YellowLine>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Nom d'auteur·ice·x" v-model="username" />
      <input type="text" placeholder="Prénom" v-model="name" />
      <input type="text" placeholder="Nom" v-model="surname" />
      <select class="select" v-model="gender">
        <option disabled value="">Genre</option>
        <option>Femme</option>
        <option>Homme</option>
        <option>Non binaire</option>
      </select>
      <!-- <span>Sélectionné : {{ selected }}</span> -->
      <input type="password" placeholder="Mot de passe" v-model="psw" />
      <input
        type="password"
        placeholder="Confirmation du mot de passe"
        v-model="psw2"
      />
      <button type="submit" class="text-basic connect">Créer un compte</button>
      <!-- <button type="submit">→</button> -->
      <div v-show="messageDiv" class="errorMessage italic">{{ message }}</div>
    </form>
    <YellowLine :lineHeight="yellowLineHeight()"></YellowLine>
    <router-link to="/login" class="text-basic">Se connecter</router-link>
  </div>
</template>
<script>
import * as fb from "@/scripts/firebase";
import YellowLine from "@/components/YellowLine.vue";

const USER_NAME_ERROR = "* Le nom d'auteur existe déjà";
const USER_PSW_ERROR = "* Les mots de passe ne correspondent pas";
const USER_EMPTY_ERROR = "* Il faut remplir tous les champs";
export default {
  components: {
    YellowLine,
  },
  data() {
    return {
      username: "",
      name: "",
      surname: "",
      gender: "",
      psw: "",
      psw2: "",
      message: "",
      messageDiv: false,
    };
  },
  mounted() {

  },
  methods: {
     yellowLineHeight(){
      let height = 6
      return height;
    },
    onSubmit(ev) {

  
      // //! filter entries you MUST add a rule in firebase https://console.firebase.google.com/project/latent-2022/database/latent-2022-default-rtdb/rules
      fb.filterEntries("users", "username", this.username).then((results) => {
        if (results != null) {
          this.messageDiv = true
          this.message = USER_NAME_ERROR;
          return;
        }
      });
      //prettier-ignore
      if(this.username === "" || this.name === "" || this.gender === "" || this.psw === ""){
          this.messageDiv = true
          this.message = USER_EMPTY_ERROR;
      }else if(this.psw != this.psw2){
            this.messageDiv = true
            this.message = USER_PSW_ERROR;
      }else{
          if (this.gender === "Femme"){
            this.gender = "f";
          }else if(this.gender === "Homme"){
            this.gender = "m";
          }else if(this.gender === "Non binaire"){
            this.gender = "n";
          }
          const accountDatas = {
              username:this.username,
              name:this.name,
              surname:this.surname,
              gender:this.gender,
              psw:this.psw,
              conversations:[],
              geoLocation:{latitude:"", longitude:""}
          }

          const id = fb.createEntry("/users/", accountDatas);
          
       

          const chatName = "Introduction"
          const sceneStage = 0
          const actStage = 0
          const type = "Manuel d'instruction"
          const distance = "Une certaine distance"
          const messageIndex = 0
          const demoConvID = fb.createEntry("/conversations/", {
            chatName, sceneStage,actStage,distance,type, messageIndex
          });
          const demoID = "-N4T2UM-9P5zeNlZwlrQ"
          fb.createEntry(`/conversations/${demoConvID}/users`, id);
          fb.createEntry(`/conversations/${demoConvID}/users`, demoID);
          fb.createEntry(`/users/${id}/conversations/`, demoConvID);
          fb.createEntry(`/users/${demoID}/conversations/`, demoConvID);
          fb.setValue(`/users/${id}/chatBotID/`, demoConvID);

          console.log(id, accountDatas);
          this.$router.push({
            path: "/contacts",
            query: {
              // userId:id,
            },
          });
          this.$actions.setCurrentUserID(id);
          console.log(this.$state);


      }
    },
  },
};
</script>
<style lang="scss" scoped>
.signInPage {
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
  height: 10%;
    min-height: 10%;
}
.title {
 text-align: center;
  font-size: 250%;
  margin: $margin-5 0 0 0;
   padding: 5% 0 5%  0;
}
.login-description {
  font-size: $italic-size;
  text-align: center;
  margin: 0 0 $margin-5 0;
}
.text-basic {
  text-align: center;
   padding: 5% 0 5%  0;
   font-size: $msg-size ;
   font-display: $font-main;
   color: black;
}
.select{
  width: 80%;
  text-align: center;
  text-align-last:center;
  padding-left: 30%;

  //  -webkit-appearance: none; /* turn off drop-down arrow*/
  //   -moz-appearance: none;
  // direction: ltr;
  color: gray;

}
.connect{
   margin:0;
  font-weight: 100;
}
.errorMessage{
  padding: 0;
  margin: 0;
  color: $color-main;
  font-size: $msg-size;

}

</style>
