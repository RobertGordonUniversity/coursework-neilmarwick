//this file is for password validation on the createAccountLogin.html page. 
//it's to make sure that the password the user tries to use to use for their new account is secure. 
//it makes sure the password must contain at least 8 characters, one number, and one uppercase and lowercase letter
//this is another security feature of my website!
const passwordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');
const matchError = document.getElementById('match-error');

passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePassword);

function validatePassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // Password format validation
    if (!passwordRegex.test(password)) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }

    
    // Password matching validation. makes sure the password you enter first is same as password you enter in confirm passsword box.
    if (password !== confirmPassword) {
        matchError.style.display = 'block';
    } else {
        matchError.style.display = 'none';
    }
}


