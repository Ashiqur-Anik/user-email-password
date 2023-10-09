
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOZJLyae4OPvDflT34TOKYANUvFsrfl8Q",
  authDomain: "user-email-password-cd4b5.firebaseapp.com",
  projectId: "user-email-password-cd4b5",
  storageBucket: "user-email-password-cd4b5.appspot.com",
  messagingSenderId: "761610618204",
  appId: "1:761610618204:web:0ae09714d6d279aa442d99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;