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

// Create profile from google sign in or search for a doument/collection
export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return;

  // Seach is user exists -- inside body of response, exist property will be true
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // If user doesn't exist, we will create a user in the firestore db based form userAuth
  if(!snapShot.exists){
    const { displayName, email } = userAuth; // This is from the first authentication object
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}

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