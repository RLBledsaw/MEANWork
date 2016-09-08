var x=[3,5,'Dojo', 'rocks', 'Michael', 'Sensai'];

for(var i=0; i<x.length; i++){
	console.log(x[i]);
	}

x.push(100);
console.log(x);
x.push(['hello', 'world', 'Javascript is Fun']);
console.log(x)

var sum=0;
for (i = 1; i < 500; i++) {
	sum+=i;
	}
console.log(sum);

var num = [1, 5, 90, 25,-3,0];
var min = 0;
var avg;
for (var i=0; i < num.length; i++) {		
	if (num[i]<min) {
			min = num[i];
		}
	}
console.log(min);

sum = 0;
	for(var i = 0; i < num.length; i++) {
		sum += num[i];
		avg = sum / num.length;
	}
	console.log(avg);

var best_pokemon = {
	name: 'Absol',
	type: 'Dark',
	mega: true,
	route: 8
}
for (var key in best_pokemon){
	if (best_pokemon.hasOwnProperty(key)) {
		console.log(best_pokemon[key]);
	}
}