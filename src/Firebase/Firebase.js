import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHMIGFDAOvVjCxUKJ7RsYQ0IqrRzx5lgk",
    authDomain: "linkedin-clone-96f32.firebaseapp.com",
    projectId: "linkedin-clone-96f32",
    storageBucket: "linkedin-clone-96f32.appspot.com",
    messagingSenderId: "785361562705",
    appId: "1:785361562705:web:1da1c1778040ba0eb99c70",
    measurementId: "G-4SF6P955JR"
  };

//   initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
export default firebase;