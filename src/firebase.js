import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC6azLYLmjYexkFnlhD-7y96zlNkJ2JrFE",
    authDomain: "workboard-5a91f.firebaseapp.com",
    databaseURL: "https://workboard-5a91f.firebaseio.com",
    projectId: "workboard-5a91f",
    storageBucket: "workboard-5a91f.appspot.com",
    messagingSenderId: "670206704451"
  };

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;