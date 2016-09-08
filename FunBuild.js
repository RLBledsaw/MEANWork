function runningLogger(){
	console.log("I am running!");
}

function multiplyByTen(x){
	var result = x * 10;
	return result;
}

function stringReturnOne(){
	var stringOne = "I am string one. Fear me.";
	return stringOne
}

function stringReturnTwo(){
	var stringTwo = "I am string two. Fear me!";
	return stringTwo;
}

function caller(paramFunc){
	if (typeof paramFunc == "function") {
	paramFunc();
	} 
}

function myDoubleConsoleLog(param1, param2){
	if(typeof param1 && typeof param2 == "function") {
	//invoke the arguments here? 
	console.log(param1());
	console.log(param2());
	}		
}
//right now all that happens in the terminal is that the params are returned.
//nothing regarding their values.
function caller2(p){
	console.log("starting");
	if(typeof p == "function") {
		setTimeout(p, 2000);
	}
	console.log("ending?");
	return ("Interesting");
}	
multiplyByTen(5);

caller(runningLogger);

runningLogger();

myDoubleConsoleLog(stringReturnTwo, stringReturnOne);

caller2(myDoubleConsoleLog(stringReturnTwo, stringReturnOne));
