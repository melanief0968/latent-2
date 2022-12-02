<template>
  <div class="loginPage">
    <div class="title italic">LATENT*</div>
    <div class="login-description italic">
      L'espace de conversation sur mesure.
    </div>
    <YellowLine :lineHeight="yellowLineHeight()"></YellowLine>
    <form @submit.prevent="onSubmit">
      <div class="text-basic who">Qui est-ce ?</div>
      <input type="text" autocomplete="username" placeholder="Nom d'auteur·ice·x" v-model="username" />
      <input type="password" autocomplete="current-password" placeholder="Mot de passe" v-model="password" />
      <button class="text-basic connect" type="submit">Se connecter</button>
      <div v-show="messageDiv" class="errorMessage italic" >{{ message }}</div>
    </form>
    <YellowLine :lineHeight="yellowLineHeight()"></YellowLine>
    <router-link to="/signin" class="text-basic">Créer un compte</router-link>
  </div>
</template>
<script>
import * as fb from "@/scripts/firebase";
import YellowLine from "@/components/YellowLine.vue";

const USER_LOGIN_ERROR = "* nom ou mot de passe invalide";

export default {
  components: {
    YellowLine,
  },
  data() {
    return {
      username: "",
      password: "",
      message: "",
      messageDiv: false,
    };
  },
  methods: {
    yellowLineHeight(){
      let height = 12
      return height;
    },
    onSubmit(ev) {

      fb.filterEntries("users", "username", this.username).then((results) => {
        if (results === null) {
          this.messageDiv = true
          this.message = USER_LOGIN_ERROR;
          return;
        }

        const [firstResult] = Object.entries(results);

        const [userId, props] = firstResult;

        if (props.psw === this.password) {
          if(this.username != "Archive"){
            this.$router.push({
              path: "/contacts",
              query: {
                // userId,
              },
            });

          }else if (this.username == "Archive"){
              this.$router.push({
              path: "/allconversations",
              query: {
              },
            });
          }

          // console.log(this.$state);
          this.$actions.setCurrentUserID(userId);
          this.$actions.setCurrentUserName(props.name);
          this.$actions.setUser(userId, props);
          this.$actions.setLogin(true);
          // console.log(firstResult);
        } else {
          //   console.log("Wrong Password!");
          this.messageDiv = true
          this.message = USER_LOGIN_ERROR;
        }
      });
      //   console.log(this.username, this.password);
      console.log(this.$state);
    },
    // noDisplay(){
    //   if(this.messageDiv == true){
    //     console.log("wrong");
    //   }
    // }
  },
};
</script>
<style lang="scss" scoped>
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
  min-height: 10%;
}
.title {
  text-align: center;
  font-size: 250%;
  // margin: $margin-5 0;
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
button {
  font-size: 30px;
  border: none;
  background-color: transparent;
  // margin-bottom: 8px;
  cursor: pointer;
}
.errorMessage{
   padding: 0;
  margin: 0;
  color: $color-main;
  font-size: $msg-size;
}
.connect{
  margin:0;
  font-weight: 100;
}
.who{
  margin-top: 0;
}
</style>
