document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (validatePhoneNumber(phone) && password.length >= 6) {
        window.location.href = "https://rejuantech.netlify.app"; // Redirect to the given URL
    } else {
        alert('Please enter a valid phone number and a password of at least 6 characters.');
    }
});

function validatePhoneNumber(phone) {
    const phoneRegex = /^[0-9]{10}$/; // Regex for a 10-digit phone number
    return phoneRegex.test(phone);
}
