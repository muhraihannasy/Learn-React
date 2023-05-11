// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_ChOtjOawtUJwVG_O2RGzrQi4ilxDo50",
  authDomain: "capstone-8501f.firebaseapp.com",
  projectId: "capstone-8501f",
  storageBucket: "capstone-8501f.appspot.com",
  messagingSenderId: "55576814733",
  appId: "1:55576814733:web:135a7584e59cc738156ec4",
  measurementId: "G-VV9Z7D6TEF",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, other) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  //   check if user not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...other,
      });
      console.log(userDocRef);
    } catch (err) {
      console.error("error while creating the user", err);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signAuthInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

export const onSignOut = () => {
  signOut(auth);
};

export const onAuthStateChangedFromAuth = (callback) => {
  return onAuthStateChanged(auth, callback);
};
