// https://simplygoodwork.com/blog/creating-a-global-store-in-vue

import Vue from "vue";
import persist from "vue-observable-persist";

import * as fb from "./firebase.js";

export const state = persist(
  Vue.observable({
    messages: {},
    conversations: {},
    didascalies: {},
    users: {},
    otherUser: {},
    fbListeners: {},
    isLoggedIn: false,
    currentUserID: null, // user id of the person who is connected
    currentContactID: null,
    currentChatID: null,
    currentUserName: null,
    lastLocation: {},
  }),
  {
    fields: [
      'users',
      "isLoggedIn",
      "currentUserID",
      "currentContactID",
      "currentChatID",
      "currentUserName",
    ],
  }
);
// this.$state.newVariable = 'yejbhskj'

export const getters = {
  user(userID) {
    return state.users[userID];
  },
  otherUser() {
    return state.otherUser;
  },
  currentUserID() {
    return state.currentUserID;
  },
  currentChatID() {
    return state.currentChatID;
  },
  currentUserName() {
    return state.currentUserName;
  },
  currentContactId() {
    return state.currentContactID;
  },
  listenConversation(id) {
    const conversation = state.conversations[id];
    if (!conversation) {
      const conversation = {};
      actions.setConversation(id, conversation);
      const fbListener = fb.listen(`/conversations/${id}/`, (value) => {
        if (!value) return;
        // store.messages[id].text = value.text;
        Object.entries(value).forEach(([key, value]) => {
          Vue.set(state.conversations[id], key, value);
        });
      });

      Vue.set(state.fbListeners, id, fbListener);
    }

    return state.conversations[id];
  },
  listenUser(id) {
    const user = state.users[id];
    if (!user) {
      const user = {};
      actions.setUser(id, user);
      const fbListener = fb.listen(`/users/${id}/`, (value) => {
        if (!value) return;
        // store.messages[id].text = value.text;
        Object.entries(value).forEach(([key, value]) => {
          Vue.set(state.users[id], key, value);
        });
      });

      Vue.set(state.fbListeners, id, fbListener);
    }

    return state.users[id];
  },
  listenMessage(id) {
    const message = state.messages[id];
    if (!message) {
      const message = {};
      actions.setMessage(id, message);
      const fbListener = fb.listen(`/messages/${id}/`, (value) => {
        if (!value) return;
        // store.messages[id].text = value.text;
        Object.entries(value).forEach(([key, value]) => {
          Vue.set(state.messages[id], key, value);
        });
      });

      Vue.set(state.fbListeners, id, fbListener);
    }

    return state.messages[id];
  },
  listenDidascalie(id) {
    const didascalie = state.didascalies[id];
    if (!didascalie) {
      const didascalie = {};
      actions.setDidascalie(id, didascalie);
      const fbListener = fb.listen(`/didascalies/${id}/`, (value) => {
        if (!value) return;
        // store.messages[id].text = value.text;
        Object.entries(value).forEach(([key, value]) => {
          Vue.set(state.didascalies[id], key, value);
        });
      });

      Vue.set(state.fbListeners, id, fbListener);
    }

    return state.didascalies[id];
  },
};

export const actions = {
  setLogin(isLoggedIn) {
    state.isLoggedIn = isLoggedIn;
  },
  setCurrentUserID(id) {
    state.currentUserID = id;
  },
  setUserLocation(id, value) {
    Vue.set(state.lastLocation, id, value);
  },
  setUser(userId, userInfo) {
    Vue.set(state.users, userId, userInfo);
  },
  setOtherUserName(name) {
    state.otherUser = name;
  },
  setCurrentUserName(name) {
    state.currentUserName = name;
  },
  setContactId(id) {
    state.currentContactID = id;
  },
  setCurrentChatId(id) {
    state.currentChatID = id;
  },
  setMessage(id, value) {
    Vue.set(state.messages, id, value);
  },
  setDidascalie(id, value) {
    Vue.set(state.didascalies, id, value);
  },
  setConversation(id, value) {
    Vue.set(state.conversations, id, value);
  },
  unloadMessage(id) {
    const listener = state.fbListeners[id];
    if (listener) {
      listener();
      Vue.delete(state.messages, id);
      Vue.delete(state.fbListeners, id);
    } // removes the listener
  },
  unloadDidascalie(id) {
    const listener = state.fbListeners[id];
    if (listener) {
      listener();
      Vue.delete(state.didascalies, id);
      Vue.delete(state.fbListeners, id);
    } // removes the listener
  },
};
