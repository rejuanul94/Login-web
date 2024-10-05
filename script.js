// Login form handling
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const phoneEmail = document.getElementById('phoneEmail').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (phoneEmail && password.length >= 6) {
        // Redirect to the given URL after successful login
        window.location.href = "https://rxyzntech.netlify.app";
    } else {
        alert('Please enter valid credentials.');
    }
});

// Link to the registration page (you can set the registration page link here)
document.getElementById('registerLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "https://registerweb.netlify.app"; // Set the registration page link here
});
