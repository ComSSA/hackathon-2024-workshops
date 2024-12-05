// script.js

// Toggle content visibility
document.getElementById("toggleButton").addEventListener("click", function() {
    var content = document.getElementById("dynamicContent");
    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
    } else {
        content.classList.add("hidden");
    }
});

// Form validation
document.getElementById("sampleForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById("email").value;
    var message = document.getElementById("formMessage");
    if (!email || !validateEmail(email)) {
        message.classList.remove("hidden");
    } else {
        message.classList.add("hidden");
        alert("Form submitted successfully!");
    }
});

function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Click counter functionality
var counter = 0;
document.getElementById("incrementButton").addEventListener("click", function() {
    counter++;
    document.getElementById("counter").textContent = "Counter: " + counter;
});
