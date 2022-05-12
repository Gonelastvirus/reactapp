// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAqxrTtpuAmvtjLCMvxkkSyJoeaFcZnRqI",

  authDomain: "carbon-gecko-293516.firebaseapp.com",

  databaseURL: "https://carbon-gecko-293516-default-rtdb.firebaseio.com",

  projectId: "carbon-gecko-293516",

  storageBucket: "carbon-gecko-293516.appspot.com",

  messagingSenderId: "442495314624",

  appId: "1:442495314624:web:1d93b8d429dc17047a9b25"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getDatabase()