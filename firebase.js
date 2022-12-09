// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-wr7pm3PCc-x5cjUXIHA1JaYpe26lqrc",
//   authDomain: "twitter-clone-6e5ac.firebaseapp.com",
//   projectId: "twitter-clone-6e5ac",
//   storageBucket: "twitter-clone-6e5ac.appspot.com",
//   messagingSenderId: "648866725892",
//   appId: "1:648866725892:web:1e3fed6b90ee9f494b7551",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCtCYkkxNSA_yYaVOucR6zQ_9ehQsI1P54",
  authDomain: "twitter-56fb1.firebaseapp.com",
  projectId: "twitter-56fb1",
  storageBucket: "twitter-56fb1.appspot.com",
  messagingSenderId: "890836829432",
  appId: "1:890836829432:web:08a1386fd51accb419670d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
