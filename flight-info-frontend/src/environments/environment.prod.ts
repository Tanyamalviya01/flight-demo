// import { Environment } from './environment';

// export const environment: Environment = {
//   production: true,
//   firebaseConfig: {
//     apiKey: "AIzaSyA0R7g8Dt7bE8ir0EmN4asyM1vIFDK6A18",
//     authDomain: "flight-info-app-15967.firebaseapp.com",
//     projectId: "flight-info-app-15967",
//     storageBucket: "flight-info-app-15967.appspot.com",
//     messagingSenderId: "1234567890",  // numeric sender ID
//     appId: "1:1234567890:web:abcdef123456"
//   }
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA0R7g8Dt7bE8ir0EmN4asyM1vIFDK6A18",
  authDomain: "flight-info-app-15967.firebaseapp.com",
  projectId: "flight-info-app-15967",
  storageBucket: "flight-info-app-15967.firebasestorage.app",
  messagingSenderId: "122795356296",
  appId: "1:122795356296:web:6a63828e4263b9949bef3d",
  measurementId: "G-SWWWQTK596"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);