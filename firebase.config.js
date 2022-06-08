const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_APIKEY,
  authDomain: env.VITE_AUTHDOMAIN,
  databaseURL: env.VITE_DATABASEURL,
  projectId: env.VITE_PROJECTID,
  storageBucket: env.VITE_STORAGEBUCKET,
  messagingSenderId: env.VITE_MESSAGINGSENDERID,
  appId: env.VITE_APPID,
};

export default firebaseConfig;
