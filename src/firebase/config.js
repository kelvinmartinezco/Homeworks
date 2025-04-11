// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1oSv5r_XScsl14TxSHCHHekcfh1RPe3s",
  authDomain: "challenge-firebase-70f75.firebaseapp.com",
  projectId: "challenge-firebase-70f75",
  storageBucket: "challenge-firebase-70f75.appspot.com",
  messagingSenderId: "927095928058",
  appId: "1:927095928058:web:7e850a90ff830c96130543"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage(); // Añade esta línea
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };