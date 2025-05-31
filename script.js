//your JS code here. If required.
let counterValue = 0;

// Function to handle button click
function incrementCounter() {
    alert(counterValue); // Show the current value
    counterValue++; // Increment the counter
    document.getElementById('counter').innerText = counterValue; // Update displayed value
}

// Add event listener to the button
document.getElementById('incrementBtn').addEventListener('click', incrementCounter);