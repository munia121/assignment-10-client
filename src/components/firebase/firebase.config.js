// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcvDdM8i_Fe9b8upOgfwwESe_P_T0Cy7M",
  authDomain: "assignment-10-project-632bb.firebaseapp.com",
  projectId: "assignment-10-project-632bb",
  storageBucket: "assignment-10-project-632bb.appspot.com",
  messagingSenderId: "761814436503",
  appId: "1:761814436503:web:02844a7ddbd67d1ae437d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;