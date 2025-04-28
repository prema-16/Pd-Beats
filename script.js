document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Logging in...');
    } else {
        alert('Please fill in both fields.');
    }
});
