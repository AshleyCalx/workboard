import firebase from 'firebase';

class AuthReference {
    constructor() {
        // Configure Firebase.
        const config = {
            apiKey: "AIzaSyC6azLYLmjYexkFnlhD-7y96zlNkJ2JrFE",
            authDomain: "workboard-5a91f.firebaseapp.com",
            databaseURL: "https://workboard-5a91f.firebaseio.com",
            projectId: "workboard-5a91f",
            storageBucket: "workboard-5a91f.appspot.com",
            messagingSenderId: "670206704451"
        };
        
        firebase.initializeApp(config);
    }

    getFirebase() {
        return firebase
    }
}

export default new AuthReference()