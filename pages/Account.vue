<template>
  <div class="accountPage">
    <div class="itemA"></div>
    <div class="userprops-container">
      <div class="row">
        <div class="text-basic">Nom d'auteur·ice·x</div>
        <div class="italic userProps">{{ userProps.userName }}</div>
      </div>
      <div class="row">
        <div class="text-basic">Nom et Prénom</div>
        <div class="italic userProps">{{ userProps.names }}</div>
      </div>
      <div class="row">
        <div class="text-basic">Mot de passe</div>
        <div class="italic userProps">{{ psw }}</div>
      </div>
      <div class="row">
        <div class="text-basic">Genre</div>
        <div class="italic userProps">{{ userGender }}</div>
      </div>
    </div>
    <form @submit.prevent="onSubmit" class="userAttributs-container">
      <div class="text-basic">Description</div>
      <div class="italic">
        {{ userProps.name }} est
        <select class="attributs" v-model="prop1"  v-if="currentUserGender() === 'm' ">
          <option disabled value=""></option>
          <option>petit</option>
          <option>fort</option>
          <option>laid</option>
          <option>beau-parleur</option>
          <option>courbé</option>
          <option>élancé</option>
          <option>sympathique</option>
          <option>riche</option>
          <option>perdu</option>
          <option>dépressif</option>
          <option>facinant</option>
          <option>attachant</option>

        </select>
        <select class="attributs" v-model="prop1"  v-else-if="currentUserGender() === 'f' ">
          <option disabled value=""></option>
          <option>petite</option>
          <option>forte</option>
          <option>laide</option>
          <option>baratineuse</option>
          <option>courbée</option>
          <option>élancée</option>
          <option>sympathique</option>
          <option>riche</option>
          <option>perdue</option>
          <option>dépressive</option>
          <option>facinante</option>
          <option>attachante</option>
        </select>
        ,
        <select class="attributs" v-model="prop2"  v-if="currentUserGender() === 'm' ">
          <option disabled value=""></option>
          <option>grand</option>
          <option>jeune</option>
          <option>barbu</option>
          <option>courtois</option>
          <option>courbé</option>
          <option>fragile</option>
          <option>troublé</option>
          <option>naïf</option>
          <option>timide</option>
          <option>têtu</option>
          <option>éblouissant</option>
          <option>agréable</option>
        </select> 
        <select class="attributs" v-model="prop2"  v-if="currentUserGender() === 'f' ">
          <option disabled value=""></option>
          <option>grande</option>
          <option>jeune</option>
          <option>poilue</option>
          <option>courtoise</option>
          <option>courbée</option>
          <option>fragile</option>
          <option>troublée</option>
          <option>naive</option>
          <option>timide</option>
          <option>têtue</option>
          <option>éblouissante</option>
          <option>agréable</option>
        </select>
        mais
        <select class="attributs" v-model="prop3"  v-if="currentUserGender() === 'm' ">
          <option disabled value=""></option>
          <option>vieux</option>
          <option>beau</option>
          <option>humble</option>
          <option>impoli</option>
          <option>agréable</option>
          <option>imposant</option>
          <option>sarcastique</option>
          <option>parle beaucoup</option>
          <option>c'est un homme aux multiples talents</option>
          <option>a un grand coeur</option>
          <option>drôle</option>
          <option>intriguant</option>
          <option>très pauvre</option>
          <option>remarquable</option>
          <option>charmant</option>
        </select>
        <select class="attributs" v-model="prop3"  v-if="currentUserGender() === 'f' ">
          <option disabled value=""></option>
          <option>vieille</option>
          <option>belle</option>
          <option>humble</option>
          <option>impolie</option>
          <option>agréable</option>
          <option>imposante</option>
          <option>sarcastique</option>
          <option>parle beaucoup</option>
          <option>c'est une femme aux multiples talents</option>
          <option>a un grand coeur</option>
          <option>drôle</option>
          <option>intriguante</option>
          <option>très pauvre</option>
          <option>remarquable</option>
          <option>charmante</option>
        </select>.
      </div>
      <div class="italic">
        {{ userProps.name }} fait partie
        <select class="attributs" v-model="prop4">
          <option disabled value=""></option>
          <option>de la haute bourgeoisie</option>
          <option>de l'élite sociale</option>
          <option>d'un club secret</option>
          <option>d'une équipe sportive</option>
          <option>d'une riche famille</option>
          <option>d'un groupe de métal</option>
          <option>d'une association de geeks</option>
          <option>des meilleurs</option>
          <option>des suspects de l'enquête en cours</option>
          <option>des saltimbanques</option>
          <option>des fans de Marvel</option>
        </select> et se montre toujours
        <select class="attributs" v-model="prop5"  v-if="currentUserGender() === 'm' ">
          <option disabled value=""></option>
          <option>avenant</option>
          <option>prétentieux</option>
          <option>indifférent</option>
          <option>ambitieux</option>
          <option>généreux</option>
          <option>optimiste</option>
          <option>patient</option>
        </select>
        <select class="attributs" v-model="prop5"  v-if="currentUserGender() === 'f' ">
          <option disabled value=""></option>
          <option>avenante</option>
          <option>prétentieuse</option>
          <option>indifférente</option>
          <option>ambitieuse</option>
          <option>généreuse</option>
          <option>optimiste</option>
          <option>patiente</option>
        </select>, et paraît constamment
        <select class="attributs" v-model="prop6"  v-if="currentUserGender() === 'm' ">
          <option disabled value=""></option>
          <option>fatigué</option>
          <option>étrange</option>
          <option>attentionné</option>
          <option>fasciné</option>
          <option>désillusionné</option>
          <option>respecteux</option>
          <option>énergique</option>
        </select>
        <select class="attributs" v-model="prop6"  v-if="currentUserGender() === 'f' ">
          <option disabled value=""></option>
          <option>fatiguée</option>
          <option>étrange</option>
          <option>attentionnée</option>
          <option>fascinée</option>
          <option>désillusionnée</option>
          <option>respecteuse</option>
          <option>énergique</option>
        </select>.
      </div>
      <div class="italic">
        {{ userProps.name }} vis pour
        <select class="attributs" v-model="prop7">
          <option disabled value=""></option>
          <option>accomplir son rêve</option>
          <option>l'aventure</option>
          <option>la quête de la découverte</option>
          <option>les autres</option>
          <option>le théâtre</option>
          <option>la découverte de son grand amour</option>
          <option>son osbession pour le vin</option>
          <option>la destruction de sa famille</option>
          <option>l'amour de la cuisine</option>
          <option>sa passion de la tisane</option>
        </select> dans l'espoir
        <select class="attributs" v-model="prop8">
          <option disabled value=""></option>
          <option>de prouver sa valeur</option>
          <option>de trouver le bonheur</option>
          <option>d'être moins seul</option>
          <option>de devenir riche</option>
          <option>d'être enfin puissant</option>
          <option>d'atteindre la sérénité</option>
        </select>.
      </div>
      <div class="text-basic">{{ message }}</div>
      <button class="text-basic save" type="submit">{{enregistrer}}</button>
    </form>
    <a class="text-basic deco" @click="disconnect">
      <!-- <img class="icone-deco" src="/img/deco.png" /> -->
       Se déconnecter
    </a>

    <!-- <button>Add new conversation</button> -->
  </div>
</template>
<script>
import ListItem from "@/components/ListItem.vue";
import * as fb from "@/scripts/firebase";
const PROPS_ERROR = "Remplis tous les champs !";
export default {
  components: {
    ListItem,
  },

  data() {
    return {
      psw: "*******",
      userGender: "Loading...",
      prop1:"",
      prop2:"",
      prop3:"",
      prop4:"",
      prop5:"",
      prop6:"",
      prop7:"",
      prop8:"",
      message:"",
      enregistrer: "Enregistrer"
    };
  },

  beforeDestroy() {},

  computed: {
    userProps() {
      const currentUserID = this.$getters.currentUserID();
      const userName = this.$getters.listenUser(currentUserID).username;
      const name = this.$getters.listenUser(currentUserID).name;
      const surName = this.$getters.listenUser(currentUserID).surname;
      const names = `${name} ${surName}`;
      const psw = this.$getters.listenUser(currentUserID).psw;
      const g = this.$getters.listenUser(currentUserID).gender;

      let gender = "Loading";
      if (g == "m") {
        gender = "Homme";
      } else if (g == "f") {
        gender = "Femme";
      } else if (g == "n") {
        gender = "Non binaire";
      }
      this.userGender = gender
      const userProps = {
        userName: userName,
        name: name,
        names: names,
        g: gender,
      };

      return userProps;
    },
  },

  mounted() {
    const currentUserID = this.$getters.currentUserID();
    Object.entries(this.$getters.listenUser(currentUserID).attributs).forEach(([propKey, value]) => {
      this[propKey] = value
    });
  },
  methods: {
    currentUserGender() {
      const currentUserID = this.$getters.currentUserID();
      let gender = this.$getters.listenUser(currentUserID).gender
      return gender;
    },
     onSubmit(ev) {
      //prettier-ignore
      if(this.prop1 === "" || this.prop2 === "" || this.prop3 === "" || this.prop4 === "" || this.prop5 === "" || this.prop6 === "" || this.prop7 === "" || this.prop8 === ""){
          this.message = PROPS_ERROR;
      }else{

          const userAttr = {
              prop1:this.prop1,
              prop2:this.prop2,
              prop3:this.prop3,
              prop4:this.prop4,
              prop5:this.prop5,
              prop6:this.prop6,
              prop7:this.prop7,
              prop8:this.prop8,

          }
          let userID = this.$getters.currentUserID()
          const userAttributs = fb.setValue(`/users/${userID}/attributs`, userAttr);
          this.enregistrer = "Enregistré !"
          console.log(userAttributs);

          // this.$actions.setCurrentUserID(id);
          // console.log(this.$state);


      }
    },
    disconnect() {
      this.$actions.setLogin(false);
      this.$router.push({
        path: "/login",
      });
    },
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
.userProps {
  margin: var(--margin-5) 0;
  width: 50%;
  display: flex;
  flex-direction: column;
}
.userAttributs-container {
  margin: var(--margin-5) 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--color-main);
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.icone-deco {
  height: 4vh;
}
.userprops-container {
  border-bottom: 2px solid var(--color-main);
}
.deco{
  text-align: center;
 }
.attributs{
    margin: 0;
    padding-bottom: 0;
    margin-bottom: 1.5vh;
    background-color: white;
    border: 0px solid var(--contrast-color);
    border-bottom: 1px dashed;
    text-align: center;    
    width: auto;
    font-family: var(--font-italic);
    font-style: italic;
    font-weight: 500;
}
.save{
  margin:0;
  font-weight: 100;
  padding:0;
  width:100%;
}
.text-basic {

   color: black;
}
.itemA{

  width: 90%;
  height: 8vh;
  margin: auto;
  box-sizing: border-box;
  position: relative;
  padding-top: 2%;
  padding-bottom: 4%;

  display: flex;
  flex-direction: column;

}
</style>
