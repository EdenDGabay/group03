document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const users = [
            { email: "user@gmail.com", password: "123456" }
        ];

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userExists = users.some(user => user.email === email && user.password === password);

        if (!validateEmail(email) || !userExists) {
            setTimeout(() => {
                const errorMessage = document.createElement("p");
                errorMessage.textContent = "You have entered an invalid email or password, please try again";
                errorMessage.style.color = "red";
                loginForm.appendChild(errorMessage);

                setTimeout(() => {
                    loginForm.removeChild(errorMessage);
                }, 5000);
            }, 2000);
            return false;
        }

        loginForm.reset();

        sessionStorage.setItem('userEmail', email);
        window.location.href = "../Html/HomePage.html";
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
