<template>
  <div class="loginPage">
    <div class="title italic">LATENT*</div>
    <div class="login-description italic">
      L'espace de conversation sur mesure.
    </div>
    <yellowLine :lineHeight="150"></yellowLine>
    <form @submit.prevent="onSubmit">
      <div class="text-basic">Qui est-ce ?</div>
      <input type="text" placeholder="Nom d'auteur·ice·x" v-model="username" />
      <input type="password" placeholder="Mot de passe" v-model="password" />
      <button type="submit">→</button>
      <div class="text-basic">{{ message }}</div>
    </form>
    <yellowLine :lineHeight="150"></yellowLine>
    <router-link to="/signin" class="text-basic">Créer un compte</router-link>
  </div>
</template>
<script>
import * as fb from "@/scripts/firebase";
import yellowLine from "@/components/yellowLine.vue";

const USER_LOGIN_ERROR = "nom ou mot de passe invalide";

export default {
  components: {
    yellowLine,
  },
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    onSubmit(ev) {
      fb.filterEntries("users", "username", this.username).then((results) => {
        if (results === null) {
          this.message = USER_LOGIN_ERROR;
          return;
        }

        const [firstResult] = Object.entries(results);

        const [userId, props] = firstResult;

        if (props.psw === this.password) {
          console.log("MATCH");
          this.$router.push({
            path: "/contacts",
            query: {
              userId,
            },
          });

          console.log(this.$store);
          this.$actions.setCurrentUserID(userId);
        } else {
          //   console.log("Wrong Password!");
          this.message = USER_LOGIN_ERROR;
        }
      });
      //   console.log(this.username, this.password);
    },
  },
};
</script>
<style lang="scss">
.loginPage {
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
  height: 20%;
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
  text-align: c enter;
}
button {
  font-size: 30px;
  border: none;
  background-color: transparent;
  // margin-bottom: 8px;
  cursor: pointer;
}
</style>
