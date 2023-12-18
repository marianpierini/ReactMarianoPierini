import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtN3H6SiWfvso8xqpchwJvMITtEozoZ4g",
  authDomain: "tienda-deportiva-mdq.firebaseapp.com",
  projectId: "tienda-deportiva-mdq",
  storageBucket: "tienda-deportiva-mdq.appspot.com",
  messagingSenderId: "1078126679480",
  appId: "1:1078126679480:web:33e36d57054f813d172b4d"
}


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)