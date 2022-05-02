// https://simplygoodwork.com/blog/creating-a-global-store-in-vue

import Vue from "vue";
import * as fb from "./firebase.js";

export const store = Vue.observable({
  messages: {},
  fbListeners: {},
  currentUserID: null, // user id of the person who is connected
  currentContactID: null,
  currentChatID: null,
  currentUserName: null,
});

// this.$store.newVariable = 'yejbhskj'

export const getters = {
  currentUserID() {
    return store.currentUserID;
  },
  currentUserName() {
    return store.currentUserName;
  },
  currentContactId() {
    return store.currentContactID;
  },
  getMessage(id) {
    const message = store.messages[id];
    if (!message) {
      const message = {};
      actions.setMessage(id, message);
      const fbListener = fb.listen(`/messages/${id}/`, (value) => {
        // store.messages[id].text = value.text;
        Object.entries(value).forEach(([key, value]) => {
          Vue.set(store.messages[id], key, value);
        });
      });

      Vue.set(store.fbListeners, id, fbListener);
    }

    return store.messages[id];
  },
};

export const actions = {
  setCurrentUserID(id) {
    store.currentUserID = id;
  },
  setCurrentUserName(name) {
    store.currentUserName = name;
  },
  setContactId(id){
    store.currentContactID = id;
  },
  setMessage(id, value) {
    Vue.set(store.messages, id, value);
  },
  unloadMessage(id) {
    const listener = store.fbListeners[id];
    if (listener) {
      listener();
      Vue.delete(store.messages, id);
      Vue.delete(store.fbListeners, id);
    } // removes the listener
  },
};
