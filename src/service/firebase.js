// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6mNxcOw-rHOMWEdyVf8EF7juwU6AK7FA",
    authDomain: "reactgb-c8667.firebaseapp.com",
    databaseURL: "https://reactgb-c8667-default-rtdb.firebaseio.com",
    projectId: "reactgb-c8667",
    storageBucket: "reactgb-c8667.appspot.com",
    messagingSenderId: "20535881563",
    appId: "1:20535881563:web:62dd2fd90ee3f4e2a6347e",
    measurementId: "G-SHKE8ZFZDG"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase;