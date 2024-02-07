import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js";

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['email-signup'].value;
    const password = signupForm['password-signup'].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);

        const signupModal = document.getElementById('signup-modal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();
    }
    catch (error) {
        if (error.code == 'auth/email-already-in-use') {
            alert('Email already in use')
        }
        else if (error.code == 'auth/invalid-email') {
            alert('Invalid email');
        }
        else if (error.code == 'auth/weak-password') {
            alert('Password is too weak');
        }
    }
});
