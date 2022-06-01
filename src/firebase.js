
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4Euw6VVbCwFnS2TA_Noe98qIa6xK_Zco",
  authDomain: "seguros-atina.firebaseapp.com",
  projectId: "seguros-atina",
  storageBucket: "seguros-atina.appspot.com",
  messagingSenderId: "966612641940",
  appId: "1:966612641940:web:89a7ede3129bb09bd4ec81"
};
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp

