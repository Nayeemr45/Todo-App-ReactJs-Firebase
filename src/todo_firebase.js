import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbmNMceZ-TD_cSVtz6CyWWpqjuQrxohr0",
    authDomain: "todo-app-45.firebaseapp.com",
    projectId: "todo-app-45",
    storageBucket: "todo-app-45.appspot.com",
    messagingSenderId: "34759675692",
    appId: "1:34759675692:web:577b4b55250c9184fa2689",
    measurementId: "G-ELNLGZEG6Q"
  };

  const todo_firebase = firebase.initializeApp(firebaseConfig);

  export default todo_firebase;
  