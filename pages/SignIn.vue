<template>
  <div class="signInPage">
    <div class="title italic">LATENT*</div>
    <div class="login-description italic">
      L'espace de conversation sur mesure.
    </div>
    <YellowLine></YellowLine>
    <form @submit.prevent="onSubmit">
      <div class="text-basic">Créer un compte</div>
      <input type="text" placeholder="Nom d'auteur·ice·x" v-model="username" />
      <input type="text" placeholder="Prénom" v-model="name" />
      <input type="text" placeholder="Nom" v-model="surname" />
      <select v-model="gender">
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
      <button type="submit">→</button>
      <div class="text-basic">{{ message }}</div>
    </form>
    <YellowLine></YellowLine>
    <router-link to="/login" class="text-basic">Se connecter</router-link>
  </div>
</template>
<script>
import * as fb from "@/scripts/firebase";
import YellowLine from "@/components/YellowLine.vue";

const USER_NAME_ERROR = "Le nom d'auteur existe déjà";
const USER_PSW_ERROR = "Les mots de passe ne correspondent pas";
const USER_EMPTY_ERROR = "Il faut remplir tous les champs";
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
    };
  },
  mounted() {

  },
  methods: {
    onSubmit(ev) {
      //! filter entries you MUST add a rule in firebase https://console.firebase.google.com/project/latent-2022/database/latent-2022-default-rtdb/rules
      fb.filterEntries("users", "username", this.username).then((results) => {
        if (results != null) {
          this.message = USER_NAME_ERROR;
          return;
        }
      });
      //prettier-ignore
      if(this.username === "" || this.name === "" || this.gender === "" || this.psw === ""){
          this.message = USER_EMPTY_ERROR;
      }else if(this.psw != this.psw2){
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
          }

          const id = fb.createEntry("/users/", accountDatas);
          console.log(id, accountDatas);
          this.$router.push({
            path: "/contacts",
            query: {
              // userId:id,
            },
          });
          this.$actions.setCurrentUserID(id);
          // console.log(this.$store);
        
              
      }
    },
  },
};
</script>
<style lang="scss">
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
}
.title {
  text-align: center;
  font-size: 250%;
  margin: $margin-5 0;
}
.login-description {
  font-size: $italic-size;
  text-align: center;
  margin: 0 0 $margin-5 0;
}
.text-basic {
  text-align: center;
}
</style>
