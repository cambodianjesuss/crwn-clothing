import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBokppWYR2yU9PmAruJw-jWIp8QVDrCN9s", // Bad practice, but it's just for testing purposes
  authDomain: "crwn-db-4ef16.firebaseapp.com",
  projectId: "crwn-db-4ef16",
  storageBucket: "crwn-db-4ef16.appspot.com",
  messagingSenderId: "583128399576",
  appId: "1:583128399576:web:388744a5d7ed20b69be1ad",
  measurementId: "G-H3E5YNXQ7Q",
};

/**
 *
 * @param {*} userAuth
 * @param {*} additionalData
 * @returns userRef
 *
 * When componentDidMount(), we run the firebase auth listener (App.js)
 * auth.onAuthStateChange() we async wait authenticated user, which we need the uid (App.js)
 * Then in this file, we recieve the auth user uid, and search for doc ref, and check if
 * snapShot exist (access to actual document/for write).
 * If not snapshot, we create set the fields to parts of the auth object, aka userAuth
 */

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // Return out of block if not authenticated
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef; // Aka, snapshot
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
