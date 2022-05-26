<template>
  <div class="accountPage">
    <div class="userprops-container">
      <div class="row">
        <div class="text-basic">Nom d'auteur·ice·x</div>
      <div class="italic userProps">{{userProps.userName}}</div>
      </div>
      <div class="row">
        <div class="text-basic">Nom et Prénom</div>
      <div class="italic userProps">{{userProps.names}}</div>
      </div>
      <div class="row">
        <div class="text-basic">Mot de passe</div>
      <div class="italic userProps">{{psw}}</div>
      </div>
      <div class="row">
        <div class="text-basic">Genre</div>
      <div class="italic userProps">{{userProps.gender}}</div>
      </div>
    </div>
     <div class="userprops-container">
       <div class="text-basic">Description</div>
       <div class="italic userProps">{{userProps.name}} est ....</div>
     </div>
     <a class="text-basic" @click="disconnect">Se déconnecter</a>
     
     

    <!-- <button>Add new conversation</button> -->
  </div>
</template>
<script>
import ListItem from "@/components/ListItem.vue";

export default {
  components: {
    ListItem,
  },

  data() {
    return {
      psw: "*******"
    };
  },

  beforeDestroy() {

  },

  computed: {
    userProps(){
      const currentUserID = this.$getters.currentUserID();
      const userName = this.$getters.listenUser(currentUserID).username
      const name = this.$getters.listenUser(currentUserID).name
      const surName = this.$getters.listenUser(currentUserID).surname
      const names = `${name} ${surName}`
      const psw = this.$getters.listenUser(currentUserID).psw
      const g = this.$getters.listenUser(currentUserID).gender


      let gender ="Loading";
        if(g=="m"){
          gender= "Homme"
        }else if(g=="f"){
          gender= "Femme"
        }else if(g=="n"){
          gender= "Non binaire"
        }
        console.log(gender)

      const userProps= {
        userName: userName,
        name: name,
        names: names,
        gender: gender

      }
      return userProps
    }
  },

  mounted() {

    // const userProps = this.$getters.user(currentUserID);
  console.log(this.$state)
    
  },
  methods: {
   disconnect(){
      this.$actions.setLogin(false);
      this.$router.push({
        path: "/login",
      });
   }
    },
   
};
</script>
<style lang="scss">
.accountPage {

  padding: 5%;

  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}
.userProps{
  margin: var(--margin-5) 0;
  width: 50%;
}
.row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.userprops-container{
  border-bottom: 2px solid var(--color-main);
}
</style>
