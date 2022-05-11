// https://simplygoodwork.com/blog/creating-a-global-store-in-vue

import Vue from "vue";
import * as fb from "./firebase.js";

export const store = Vue.observable({
  messages: {},
  conversations: {},
  didascalies: {},
  users: {},
  otherUser: {},
  fbListeners: {},
  currentUserID: null, // user id of the person who is connected
  currentContactID: null,
  currentChatID: null,
  currentUserName: null,
});

// this.$store.newVariable = 'yejbhskj'

export const getters = {
  user(userID) {
    return store.users[userID];
  },
  otherUser() {
    return store.otherUser;
  },
  currentUserID() {
    return store.currentUserID;
  },
  currentChatID() {
    return store.currentChatID;
  },
  currentUserName() {
    return store.currentUserName;
  },
  currentContactId() {
    return store.currentContactID;
  },
  listenConversation(id) {
    const conversation = store.conversations[id];
    if (!conversation) {
      const conversation = {};
      actions.setConversation(id, conversation);
      const fbListener = fb.listen(`/conversations/${id}/`, (value) => {
        if (!value) return;
        // store.messages[id].text = value.text;
        Object.entries(value).forEach(([key, value]) => {
          Vue.set(store.conversations[id], key, value);
        });
      });

      Vue.set(store.fbListeners, id, fbListener);
    }

    return store.conversations[id];
  },
  listenUser(id) {
    const user = store.users[id];
    if (!user) {
      const user = {};
      actions.setUser(id, user);
      const fbListener = fb.listen(`/users/${id}/`, (value) => {
        if (!value) return;
        // store.messages[id].text = value.text;
        Object.entries(value).forEach(([key, value]) => {
          Vue.set(store.users[id], key, value);
        });
      });

      Vue.set(store.fbListeners, id, fbListener);
    }

    return store.users[id];
  },
  listenMessage(id) {
    const message = store.messages[id];
    if (!message) {
      const message = {};
      actions.setMessage(id, message);
      const fbListener = fb.listen(`/messages/${id}/`, (value) => {
        if (!value) return;
        // store.messages[id].text = value.text;
        Object.entries(value).forEach(([key, value]) => {
          Vue.set(store.messages[id], key, value);
        });
      });

      Vue.set(store.fbListeners, id, fbListener);
    }

    return store.messages[id];
  },
  listenDidascalie(id) {
    const didascalie = store.didascalies[id];
    if (!didascalie) {
      const didascalie = {};
      actions.setDidascalie(id, didascalie);
      const fbListener = fb.listen(`/didascalies/${id}/`, (value) => {
        if (!value) return;
        // store.messages[id].text = value.text;
        Object.entries(value).forEach(([key, value]) => {
          Vue.set(store.didascalies[id], key, value);
        });
      });

      Vue.set(store.fbListeners, id, fbListener);
    }

    return store.didascalies[id];
  },
};

export const actions = {
  setCurrentUserID(id) {
    store.currentUserID = id;
  },
  setUser(userId, userInfo) {
    Vue.set(store.users, userId, userInfo);
  },
  setOtherUserName(name) {
    store.otherUser = name;
  },
  setCurrentUserName(name) {
    store.currentUserName = name;
  },
  setContactId(id) {
    store.currentContactID = id;
  },
  setCurrentChatId(id) {
    store.currentChatID = id;
  },
  setMessage(id, value) {
    Vue.set(store.messages, id, value);
  },
  setDidascalie(id, value) {
    Vue.set(store.didascalies, id, value);
  },
  setConversation(id, value) {
    Vue.set(store.conversations, id, value);
  },
  unloadMessage(id) {
    const listener = store.fbListeners[id];
    if (listener) {
      listener();
      Vue.delete(store.messages, id);
      Vue.delete(store.fbListeners, id);
    } // removes the listener
  },
  unloadDidascalie(id) {
    const listener = store.fbListeners[id];
    if (listener) {
      listener();
      Vue.delete(store.didascalies, id);
      Vue.delete(store.fbListeners, id);
    } // removes the listener
  },
};
