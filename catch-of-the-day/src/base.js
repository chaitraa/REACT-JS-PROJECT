import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_Mv4xqkikJ0kNNOl8mGtCuyqrKYbWQlY",
    authDomain: "catch-of-the-day-33d1f.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-33d1f.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
