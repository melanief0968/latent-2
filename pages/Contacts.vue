<template>
  <div class="contactPage">
    <!-- <ListItem
      v-for="(person, index) in people"
      :text="person.name"
      :unread="person.unread"
      :key="index"
    >
      {{ person.name }}
    </ListItem> -->
    <ListItem v-for="(person, index) in people"
      :text="person.name"
      :unread="person.unread"
      :key="index"
    >
      {{ person.name }}
    </ListItem>
    
    <button @click="onClick">add something</button>
    <button >Add new conversation</button>
    
  </div>
</template>
<script>
import ListItem from "@/components/ListItem.vue";
import * as fb from "@/scripts/firebase.js";

export default {
  components: {
    ListItem,
    conversationsList:{},
    removeListener: () => {},
  },

  data() {
    return {
      people: [],
    };
  },

   beforeDestroy() {
    // this.removeListener();
  },

  mounted() {
    //
    // fb.listen("/", (value) => {
    //   console.log(value);
    // });
    this.displayContactsList()

    // this.removeListener = fb.listen(
    //   `/users/${currentUserID}/conversations`,
    //   (conversationsList) => {
    //     this.conversationsList = conversationsList;
    //     console.log(value);
    //           // console.log(value["text"]);
    //   }
    // );

    // setValue("/ecal/test/fun", null);
    // fb.erase("/tests/");
    // setTimeout(() => {
      //     setValue("/ecal/test/fun", 'wtf');
    // }, 2000)

    // const id = fb.createEntry("/tests/", { name: "mélanieclones" });
    // console.log(id);

    // // const result = await fb.getEntryByValue("/tests/", "name", "mélanie")
    // fb.filterEntries("/tests/", "name", "mélanie").then((results) => {
      //   if (results === null) fb.createEntry("/tests/", { name: "mélanie" });
    // });
  },
  methods: {
    randomBoolean() {
      return Boolean(Math.round(Math.random()));
    },

    onClick() {
      this.people.push({
        name: "Mélanie",
        unread: this.randomBoolean(),
      });
    },

    refreshContacts(){

    },

    displayContactsList(){
      const currentUserID = this.$getters.currentUserID();
      console.log(currentUserID)
      fb.listen(`/users/${currentUserID}/conversations/`, (value) => {
          const keys = Object.keys(value);
          const update = value;
          console.log(update)
            // console.log(test)
          if(update){
            // this.refreshContacts(update)
            // console.log(contacts)
          }


            // const test = Object.assign(value)
          // const messageID = keys[keys.length-1];
          // const text = value[messageID]["text"];
          // console.log(keys.contactName)
          
          // const [firstResult] = Object.entries(value);

          // const [conversation, props] = firstResult;
          // console.log(conversation, props.contactName)

      });

    },

    displayContacts(){
      this.people.push({
        name:"define",
      })
    }
  },

};
</script>
<style lang="scss">
.contactPage {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
}
</style>
