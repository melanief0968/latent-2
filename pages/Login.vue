<template>
  <div class="loginPage">
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Author" v-model="username" />
      <input type="password" placeholder="Secret" v-model="password" />
      <button type="submit">→</button>
      <div>{{ message }}</div>
    </form>
    <router-link to="/signin">Sign in</router-link>
  </div>
</template>
<script>
import * as fb from "@/scripts/firebase";

const USER_LOGIN_ERROR = "user or mail not found";

export default {
  data() {
    return {
      username: "Oscar",
      password: "pipicaca12",
      message: "",
    };
  },
  methods: {
    onSubmit(ev) {
      fb.filterEntries("users", "name", this.username).then((results) => {
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
}
</style>
