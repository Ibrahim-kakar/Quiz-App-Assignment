function register() {
    const fullName = document.querySelector('#register-fullname').value;
    const userName = document.querySelector('#register-username').value;
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;

    if (fullName && userName && email && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.userName === userName || user.email === email)) {
            alert('Username or email already exists');
        } else {
            users.push({ fullName, userName, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful! Please login.');
            window.location.href = 'login.html';
        }
    } else {
        alert('Please complete your details');
    }
}

function login() {
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    if (email && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert('Login successful!');
        } else {
            alert('Invalid email or password');
        }
    } else {
        alert('Please fill in all fields');
    }
}
