// scripts.js

var startTime = new Date().getTime();

document.addEventListener("DOMContentLoaded", function() {
    // Display welcome message initially
    document.getElementById('mainContent').style.display = 'block';

    // Set a flag to track whether the login form should be shown
    var showLoginForm = false;

    // Check elapsed time every second
    var intervalId = setInterval(function() {
        // Display the login form after 5 seconds
        if (!showLoginForm) {
            var elapsedTime = new Date().getTime() - startTime;
            if (elapsedTime >= 5000) {
                showLoginForm = true;
                document.getElementById('mainContent').style.display = 'none';
                document.getElementById('loginPopup').style.display = 'flex';
                clearInterval(intervalId);
            }
        }
    }, 1000);

    // Event listeners for login form
    document.getElementById("loginBtn").addEventListener("click", function() {
        var username = document.getElementById('username').value;
        document.getElementById('popupUsername').innerText = username;
        document.getElementById('loginPopup').style.display = 'none';
        document.getElementById('successPopup').style.display = 'flex';
    });

    document.getElementById("closeSuccessPopup").addEventListener("click", function() {
        document.getElementById('successPopup').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    });
});

// Function to show/hide popups
function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
    document.getElementById('mainContent').style.display = 'none';
}

function hidePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
}

