document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent the form from submitting

        const email = document.getElementById("email").value;

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        alert("Message was sent successfully. Thank you for reaching out, we will get back to you as soon as possible.");

        contactForm.reset();
        window.location.href = "../Html/HomePage.html";
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
