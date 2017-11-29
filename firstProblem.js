"use strict";

function reversedWords(){
	let string = "Hello";
	let str = string.split("");
	str.reverse("");
	str = str.join("")
	return str;
}
let trial = reversedWords()
console.log(trial)

