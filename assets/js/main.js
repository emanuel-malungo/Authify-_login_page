document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const emailField = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    emailError.textContent = '';
    passwordError.textContent = '';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = emailPattern.test(emailField.value);

    if (!emailIsValid) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
    }

    const password = passwordField.value;
    const minLength = 8;
    const maxLength = 20;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const noSpaces = !/\s/.test(password);


    if (password.length < minLength || password.length > maxLength) {
        passwordError.textContent = `Password must be between ${minLength} and ${maxLength} characters`;
        passwordError.style.display = 'block';
    } else if (!hasUpperCase) {
        passwordError.textContent = 'Password must contain at least one uppercase letter';
        passwordError.style.display = 'block';
    } else if (!hasLowerCase) {
        passwordError.textContent = 'Password must contain at least one lowercase letter';
        passwordError.style.display = 'block';
    } else if (!hasNumbers) {
        passwordError.textContent = 'Password must contain at least one number';
        passwordError.style.display = 'block';
    } else if (!hasSpecialChars) {
        passwordError.textContent = 'Password must contain at least one special character';
        passwordError.style.display = 'block';
    } else if (!noSpaces) {
        passwordError.textContent = 'Password must not contain spaces';
        passwordError.style.display = 'block';
    } else {
        alert('Login Successful');
    }
});

document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password-field');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    this.classList.toggle('ri-eye-off-line');
    this.classList.toggle('ri-eye-line');
});
