import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "/src/app/firebase.js";

import '/src/app/signup_form.js';
import '/src/app/signin_form.js';
import '/src/app/logout.js';
import { loginCheck } from '/src/app/login_check.js';

onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginCheck(user);
    }
    else {
        loginCheck(user);
    }
});