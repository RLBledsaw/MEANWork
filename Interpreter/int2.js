var food;
function eat() {
	var food = 'gone';
	food = 'half-chicken';
	console.log(food); //half-chicken
	console.log(food); //half-chicken
}
food = "chicken";
eat();
console.log(food); //chicken (or returns undefined)