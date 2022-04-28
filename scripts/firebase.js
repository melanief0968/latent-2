import firebaseConfig from "@/firebase.config.js";
import { getAuth, signInAnonymously } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  set,
  ref,
  onValue,
  push,
  query,
  orderByChild,
  get,
  equalTo,
} from "firebase/database";

//? https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c

export const app = initializeApp(firebaseConfig);

const auth = getAuth();

export function login(callback) {
  console.log("trying to sign in...");

  signInAnonymously(auth)
    .then(() => {
      // Signed in..
      console.log("signed in");
      callback();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
}

export function getDB() {
  return getDatabase(app);
}

const database = getDatabase();

export function listen(path, callback) {
  const dbRef = ref(database, path);
  const unsubscribe = onValue(dbRef, (snapshot) => {
    callback(snapshot.val());
  });
  return unsubscribe
}

export function erase(path) {
  setValue(path, null);
}

export function createEntry(path, props) {
  const dbRef = ref(database, path);
  const id = push(dbRef).key;

  setValue(sanitize(path, id), props);
  //   setValue(ref(database, sanitize(path, id)), props);

  return id;
}

export function setValue(path, data) {
  // _data = {'data': _data, 't_created': Date.now()};
  set(ref(database, path), data);
}

// https://stackoverflow.com/questions/34968413/error-index-not-defined-add-indexon

//! https://console.firebase.google.com/project/latent-2022/database/latent-2022-default-rtdb/rules
export async function filterEntries(path, key, value) {
  const dbRef = ref(database, path);

  const search = query(dbRef, orderByChild(key), equalTo(value));

  return (await get(search)).val();
}

export function sanitize(...paths) {
  return paths.map((path) => path.replace(/^\/|\/$/g, "")).join("/");
}
