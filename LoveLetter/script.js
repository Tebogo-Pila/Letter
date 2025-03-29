/* // Reveal hidden fragments
function revealFragment(id) {
    const fragment = document.getElementById(id);
    fragment.style.display = fragment.style.display === 'block' ? 'none' : 'block';

    // Play gentle sound effect
    const audio = new Audio('assets/sounds/page-turn.mp3');
    audio.volume = 0.2;
    audio.play();
}

// Check password and unlock the letter content
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const correctPassword = 'Tammy';  // The correct password

    if (passwordInput === correctPassword) {
        // Hide the password overlay
        document.getElementById('passwordOverlay').style.display = 'none';

        // Show the letter content
        document.getElementById('letterContent').classList.remove('hidden');

        // Play the heartbeat sound
        const heartbeat = new Audio('assets/sounds/heartbeat.mp3');
        heartbeat.volume = 0.3;
        heartbeat.play();
        
        // Display a confirmation message
        alert("Password Correct! Enjoy the letter.");
    } else {
        // Incorrect password message
        alert("Incorrect password. Please try again.");
    }
}
*/
var password;
var pass1 = "Tammy"; // Set the password here

// Prompt the user to enter the password
password = prompt('Enter Password to View - Your Nickname', '');

// Check if the entered password is correct
if (password == pass1) {
    alert('Correct password, click OK to Enter.');
} else {
    // If the password is incorrect, clear the page content
    document.body.innerHTML = ''; // This will make the page blank
}
