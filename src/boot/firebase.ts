import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

// console.log(process.env.AUTH_DOMAIN);
// console.log(typeof process.env.AUTH_DOMAIN);

// const firebaseConfig = {
//   apiKey: process.env.API_KEY?.trim(),
//   authDomain: process.env.AUTH_DOMAIN?.trim(),
//   projectId: process.env.PROJECT_ID?.trim(),
//   storageBucket: process.env.STORAGE_BUCKECT?.trim(),
//   messagingSenderId: process.env.MESSAGING_SENDER_ID?.trim(),
//   appId: process.env.APP_ID?.trim(),
// };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const firebaseAuth = getAuth(firebaseApp);

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(firebaseApp);

// console.log({ auth, db });

export {
  firebaseAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  firestore,
};
