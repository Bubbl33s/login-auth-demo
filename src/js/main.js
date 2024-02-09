import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "../app/firebase.js";

import '../app/signup_form.js';
import '../app/signin_form.js';
import '../app/logout.js';
import { loginCheck } from '../app/app/login_check.js';

onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginCheck(user);
    }
    else {
        loginCheck(user);
    }
});