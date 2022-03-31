import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6F0TCCK58O0qu4rB57EPi-9BG9nmu7hQ",
  authDomain: "miscelanea-dany.firebaseapp.com",
  projectId: "miscelanea-dany",
  storageBucket: "miscelanea-dany.appspot.com",
  messagingSenderId: "1080176988918",
  appId: "1:1080176988918:web:186df7197eb8aa5a7012d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)