// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBoaImKjDqfmFff2y6CvQX2C6wa94uj51o",
authDomain: "fir-auth-demo-b3dcc.firebaseapp.com",
projectId: "fir-auth-demo-b3dcc",
storageBucket: "fir-auth-demo-b3dcc.appspot.com",
messagingSenderId: "314773106857",
appId: "1:314773106857:web:e4a0f290b6de2d0ab979b8",
measurementId: "G-BDEGQY6RRV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
