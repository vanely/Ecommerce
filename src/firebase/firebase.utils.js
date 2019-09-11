import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7XYSrbRZbDXYBl7H6pspXtPP6yb5kkTo",
  authDomain: "ecom-d5edd.firebaseapp.com",
  databaseURL: "https://ecom-d5edd.firebaseio.com",
  projectId: "ecom-d5edd",
  storageBucket: "",
  messagingSenderId: "787755381193",
  appId: "1:787755381193:web:43cd4e194d323b2b99b818"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// allow access to the following
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// can use many types of auth e.x: twitter, facebook, but we're only using google auth here.
const provider = new firebase.auth.GoogleAuthProvider();

// triggers google pop-up when ever the auth is used
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 