import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBokppWYR2yU9PmAruJw-jWIp8QVDrCN9s", // Bad practice, but it's just for testing purposes
  authDomain: "crwn-db-4ef16.firebaseapp.com",
  projectId: "crwn-db-4ef16",
  storageBucket: "crwn-db-4ef16.appspot.com",
  messagingSenderId: "583128399576",
  appId: "1:583128399576:web:388744a5d7ed20b69be1ad",
  measurementId: "G-H3E5YNXQ7Q"
};

firebase.initializeApp(config);

// Export imports for use in our app

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Authentication

const provider = new firebase.auth.GoogleAuthProvider();
// Trigger the google pop-up parementers
provider.setCustomParameters({propt: 'select_acccount'})
// Call the auth.signIn with my provier set object
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;