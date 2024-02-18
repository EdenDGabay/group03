document.addEventListener("DOMContentLoaded", function() {
    const users = []; // Array to hold user objects

    const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Extracting form values
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const birthdate = document.getElementById("birthdate").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Validate form input
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Construct user object with extended attributes
        const newUser = {
            firstName,
            lastName,
            email,
            birthdate,
            password,
            // Additional attributes for profile details
            profilePicture: '', // Placeholder for profile picture URL
            location: '', // Placeholder for user location (e.g., "City, Country")
            about: '' // Placeholder for a short bio or description about the user
        };

        users.push(newUser);

        alert("Sign up successful!");

        // Reset the form after successful sign up
        signupForm.reset();

        // Redirect to the homepage or profile page
        window.location.href = "../Html/HomePage.html";
    });

    // Function to validate email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
