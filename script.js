const count = document.getElementById("counter");
const incBtn = document.getElementById("incrementBtn");

let counterValue = parseInt(count.innerText); // Initialize counter value

incBtn.addEventListener('click', () => {
    alert(counterValue); // Show the current value
    counterValue++; // Increment the counter
    count.innerText = counterValue; // Update displayed value
});