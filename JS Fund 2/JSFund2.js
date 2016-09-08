function sums(x, y) {
	var sum = 0;
	for (i = x; i < y; i++) {
	sum+=i;
	}
console.log(sum);
}
var sums= function(x,y) {
	var sum = 0;
	for (i = x; i < y; i++) {
	sum+=i;
	}
console.log(sum);
}
sums(1,500);
var total = sums(1,500);

function minimum(num) {
	var min = Infinity;
	for (var i=0; i < num.length; i++) {		
	if (num[i]<min) {
			min = num[i];
		}
	}
console.log(min);
}
var minimum = function(num){
	var min = Infinity;
	for (var i=0; i < num.length; i++) {		
	if (num[i]<min) {
			min = num[i];
		}
	}
console.log(min);
}
var average = function(num){
	var avg;
	var sum = 0;
	for(var i = 0; i < num.length; i++) {
		sum += num[i];
		avg = sum / num.length;
	}
	console.log(avg);
}
function average(num) {
	var avg;
	var sum = 0;
	for(var i = 0; i < num.length; i++) {
		sum += num[i];
		avg = sum / num.length;
	}
	console.log(avg);
}
var arr=[36, 42, 150, -28, 0, 6]
minimum(arr);
average(arr);
var soSmall = minimum(arr);
var inTheMiddle = average(arr);

var Math = {
	total: function sums(x, y) {
			var sum = 0;
			for (i = x; i < y; i++) {
				sum+=i;
			}
			console.log(sum);
			},
	smallest: function minimum(num) {
			var min = Infinity;
			for (var i=0; i < num.length; i++) {		
			if (num[i]<min) {
				min = num[i];
				}
			}
			console.log(min);
			},
	middling: function average(num) {
			var avg;
			var sum = 0;
			for(var i = 0; i < num.length; i++) {
				sum += num[i];
				avg = sum / num.length;
				}
			console.log(avg);
			}
};

var check = Math.total(1,500);
var tiny = Math.smallest(arr);
var hohum = Math.middling(arr);

var Person = {
	name: "Rachael",
	distance_traveled: 0,
	say_name: function hello() {
			alert(name);
		},
	say_something: function speak(p) {
					console_log(name + "says "+p);
				},
	walk: function walk(){
		alert(name+"is walking.");
		distance_traveled += 3;
	},
	run: function run(){
		alert(name + "is running.");
		distance_traveled += 10;
	},
	crawl: function crawl(){
		alert(name + "is crawling");
		distance_traveled += 1;
	}
};
console.log(Person);