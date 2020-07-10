/* 
  This is the Firebase SDK 
  configuration.

  Note: Firebase SDK was used instead
  of AXIOS, VUE-RESOURCE AND NATIVE FETCH
  due to the Google Cloud CORS Policy (ACCESS BLOCK)
   */

  import firebase from "firebase";
  import store from "./store";

  const firebaseConfig = {
    apiKey: "AIzaSyCY91F4lITWC3tE36sG1Odpz__oU483DeM",
    authDomain: "huntr-b94fd.firebaseapp.com",
    databaseURL: "https://huntr-b94fd.firebaseio.com",
    projectId: "huntr-b94fd",
    storageBucket: "huntr-b94fd.appspot.com",
    messagingSenderId: "951353703123",
    appId: "1:951353703123:web:0353265c5efd44c446f226",
    measurementId: "G-WQP00R2MLX"
  };
  
  let fb = firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });

  
  export default fb;