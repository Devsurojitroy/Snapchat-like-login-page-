document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Clear previous error message
    errorMessage.style.display = "none";

    // Simple Validation
    if(username === "" || password === "") {
        errorMessage.textContent = "Username and password cannot be empty!";
        errorMessage.style.display = "block";
        return;
    }

    // Mock Login Process
    if(username === "demo" && password === "demo123") {
        alert("Login successful!");
        // Redirect to another page or dashboard
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
        errorMessage.style.display = "block";
    }
});