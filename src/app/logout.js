import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from '/src/app/firebase.js';

const logout = document.querySelector('#logout');

logout.addEventListener('click', async () => {
    await signOut(auth);
    console.log('user logged out');
});