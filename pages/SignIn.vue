<template>
  <div class="signInPage">
    <div class="title italic">LATENT*</div>
    <div class="login-description italic">
      L'espace de conversation sur mesure.
    </div>
    <yellowLine></yellowLine>
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
    <yellowLine></yellowLine>
    <router-link to="/login" class="text-basic">Se connecter</router-link>
  </div>
</template>
<script>
import * as fb from "@/scripts/firebase";
import yellowLine from "@/components/yellowLine.vue";

const USER_NAME_ERROR = "Le nom d'auteur existe déjà";
const USER_PSW_ERROR = "Les mots de passe ne correspondent pas";
const USER_EMPTY_ERROR = "Il faut remplir tous les champs";
export default {
  components: {
    yellowLine,
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
      fb.filterEntries("users", "name", this.username).then((results) => {
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
          const accountDatas = {
              username:this.username, 
              name:this.name,
              surname:this.surname,
              gender:this.gender,
              psw:this.psw,
          }
          const id = fb.createEntry("/users/", accountDatas);
          console.log(id, accountDatas);
          this.$router.push({
            path: "/contacts",
            query: {
            userId:id,
            },
          });
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
