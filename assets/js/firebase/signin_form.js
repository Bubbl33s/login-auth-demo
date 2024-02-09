import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from './firebase.js';

const signinForm = document.getElementById('signin-form');

signinForm.addEventListener('submit', async e => {
    e.preventDefault();

    const email = signinForm['email-signin'].value;
    const password = signinForm['password-signin'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials);

        const modal = bootstrap.Modal.getInstance(document.getElementById('signin-modal'));
        modal.hide();
        alert('Welcome ' + credentials.user.email);
    }
    catch (error) {
        if (error.code === 'auth/wrong-password') {
            alert('Wrong password');
        }
        else if (error.code === 'auth/user-not-found') {
            alert('User not found');
        }
        else {
            alert(error.message);
        }
    }
});