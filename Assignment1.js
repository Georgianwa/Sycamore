let nameInput = prompt("How old are you?");
if (Number(nameInput) >=18) {
	console.log("You are an adult");
}else {
	console.log("You are a minor");
}

for (let i = 1; i < 11; i++) {
	console.log("Countdown: " + i);
}

let firstNumber = prompt("choose your first number");
let secondNumber = prompt("choose your second number");
let a = Number(firstNumber);
let b = Number(secondNumber);
function add(a, b) {
	return a + b;
}
let sum = add(a, b);
console.log("Sum of the two numbers is: " + sum);
