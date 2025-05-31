//your JS code here. If required.
const count = document.getElementById("counter");
const incBtn = document.getElementById("increment");

incBtn.addEventListener('click', ()=>{
	const currVal = parseInt(count.innerText);
	alert(currVal);
	count.innerText = currVal + 1;
})