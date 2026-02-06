import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "schoolportalapp.firebaseapp.com",
  projectId: "schoolportalapp",
  storageBucket: "schoolportalapp.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);