import firebase from 'firebase';
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAuP1Fv3Hx0Qw1gT9wroxJmiPFke1ufF98",
    authDomain: "demoauth-48ba3.firebaseapp.com",
    databaseURL: "https://demoauth-48ba3.firebaseio.com",
    projectId: "demoauth-48ba3",
    storageBucket: "demoauth-48ba3.appspot.com",
    messagingSenderId: "176754222221",
    appId: "1:176754222221:web:797017e545d6794ff6eec4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;