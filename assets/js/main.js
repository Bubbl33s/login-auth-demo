import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase/firebase.js";

import './firebase/signup_form.js';
import './firebase/signin_form.js';
import './firebase/google_login.js';
import './firebase/logout.js';
import { loginCheck } from './firebase/login_check.js';

onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginCheck(user);
    }
    else {
        loginCheck(user);
    }
});