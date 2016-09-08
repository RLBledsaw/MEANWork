function personConstructor(name){
	var person = {
		name: name,
		distance_traveled: 0,
		say_name: function hello(){
			alert(person.name);
		},
		say_something: function speak(say){
			alert(person.name + " says " + say);
		},
		walk: function walk(){
			alert(person.name + "is walking");
			person.distance_traveled+=3;
		},
		run:function run(){
			alert(person.name + "is running");
			person.distance_traveled+=10;
		},
		crawl:function crawl(){
			alert(person.name + "is crawling");
			person.distance_traveled+=1;
		}
	};

	return person;

}
//these could probably all be anonymous functions, but I was taught to avoid those.
// Correct! These would work fine as anonymous functions, but it's fine practice to name all your fuctions

function ninjaConstructor(name, cohort){
	var ninja = {
		name: name,
		cohort: cohort,
		belt_level: "yellow belt",
		levelUp: function level(score) {
			if (score >= 9) {
				belt_level = "black belt";
			}
			if ((score >= 7) || (score <= 8.9)){
				belt_level = "red belt";
			}
			else {
				belt_level = "yellow belt";
			}
			}
		};

	return ninja;
	}

console.log(personConstructor("Babs"));
console.log(ninjaConstructor("Babs", "September 2016"));

/*
What happens when you run the following in node (rather than the browser)?

personConstructor("Babs").say_name();

I.e. what's the difference between alert and console.log?
*/
