// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChkbBYRPjPipVAVqTWTe75FDQX_0pQNWY",
  authDomain: "crown-clothing-e3dae.firebaseapp.com",
  projectId: "crown-clothing-e3dae",
  storageBucket: "crown-clothing-e3dae.firebasestorage.app",
  messagingSenderId: "669126993680",
  appId: "1:669126993680:web:2965e929c98b4493716795",
  measurementId: "G-C9S1FNPFNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();
    
    
    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt
      })

    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;

}
