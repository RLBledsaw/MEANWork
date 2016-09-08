var first_variable;
function firstFunc(){
	first_variable = "Not anymore!!!";
	console.log(first_variable); // Not anymore!!! -- incorrect
}

first_variable = "Yippee I was first!";
console.log(first_variable); // Yippee I was first -- incorrect

firstFunc();
console.log(first_variable); //Not anymore!!!