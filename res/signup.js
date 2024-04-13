"use strict";

/**
 * Handle Sign Up Form
 * @author Yacine Allal <safarAllal2024@gmail.com>
 */
function handleSignUpForm() {
    const form = document.getElementsByTagName('form')[0];
    const button = form.querySelector('button');
    const emailInput = document.getElementById('email-address');
    const passwordInput = document.getElementById('password-one');
    const confirmPasswordInput = document.getElementById('password-two');

    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission

        form.classList.add('validate');

        if (!emailInput.validity.valid) {
            showError(emailInput, emailInput.title);
        }

        if (!passwordInput.validity.valid) {
            showError(passwordInput, passwordInput.title);
        }

        if (!confirmPasswordInput.validity.valid || confirmPasswordInput.value !== passwordInput.value) {
            showError(confirmPasswordInput, "Passwords must match");
        }

        if (emailInput.validity.valid && passwordInput.validity.valid && confirmPasswordInput.validity.valid && confirmPasswordInput.value === passwordInput.value) {
            window.location.href = "../game-lobby/index.html"; 
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        form.classList.add('validate');

        if (!emailInput.validity.valid) {
            showError(emailInput, emailInput.title);
        }

        if (!passwordInput.validity.valid) {
            showError(passwordInput, passwordInput.title);
        }

        if (!confirmPasswordInput.validity.valid || confirmPasswordInput.value !== passwordInput.value) {
            showError(confirmPasswordInput, "Passwords must match");
        }

        if (emailInput.validity.valid && passwordInput.validity.valid && confirmPasswordInput.validity.valid && confirmPasswordInput.value === passwordInput.value) {
            alert('Form Submitted');
            // Uncomment the next line to submit the form
            // form.submit();
        }
    });

    function showError(input, message) {
        const label = input.parentElement;
        const div = label.querySelector('div');
        if (!div) {
            const error = document.createElement('div');
            error.innerText = message;
            label.appendChild(error);
        }
    }

    function hideError(input) {
        const label = input.parentElement;
        const div = label.querySelector('div');
        if (div) {
            label.removeChild(div);
        }
    }
}

window.addEventListener('DOMContentLoaded', handleSignUpForm);
