function subscribe() {
    var email = document.getElementById("email").value;
    if(email) {
        alert("Subscribed with " + email);
    } else {
        alert("Please enter a valid email address.");
    }
}