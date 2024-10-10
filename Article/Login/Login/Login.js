function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please fill in both email and password fields.");
        return;
    }

    if (!email.includes('@')) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Login successful!");
    window.location.href = "../../aticle.html";
}
