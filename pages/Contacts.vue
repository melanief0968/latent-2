<template>
  <div class="contactPage">
    <ListItem
      v-for="(person, index) in people"
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
  },

  data() {
    return {
      people: [],
    };
  },
  mounted() {
    //
    fb.listen("/", (value) => {
      console.log(value);
    });
    this.getContacts()
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

    getContacts(){
      const contacts = [];
      fb.listen("/conversation/", (value) => {
          console.log(value);
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
