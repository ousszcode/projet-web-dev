"use strict";

/**
 * Handle Login Form
 * @author Yacine Allal <safarAllal2024@gmail.com>
 */
function handleLoginForm() {
    const form = document.getElementsByTagName('form')[0];
    const button = form.getElementsByTagName('button')[0];
    const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');
    const emailInput = document.getElementById('email-address');
    const passwordInput = document.getElementById('password');

    button.addEventListener('click', (e) => {
    e.preventDefault(); 

    form.classList.add('validate');

    if (!emailInput.validity.valid) {
        showError(emailInput, emailInput.title);
    }

    if (!passwordInput.validity.valid) {
        showError(passwordInput, passwordInput.title);
    }

    if (emailInput.validity.valid && passwordInput.validity.valid) {
        window.location.href = "../../game-lobby/index.html"; 
    }
});


    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            
            input.classList.add('validate');
            if (!input.validity.valid) {
                showError(input, input.title);
            } else {
                hideError(input);
            }
        });
    });

    form.addEventListener('submit', () => {
        form.classList.add('validate');

        if (!emailInput.validity.valid) {
            showError(emailInput, emailInput.title);
        }

        if (!passwordInput.validity.valid) {
            showError(passwordInput, passwordInput.title);
        }

        if (emailInput.validity.valid && passwordInput.validity.valid) {
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

window.addEventListener('DOMContentLoaded', handleLoginForm);
