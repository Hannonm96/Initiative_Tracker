// D&D Initiative Program
// Marshall Hannon
// v1.6 6/24/19
// This program allows user to keep track of characters and their
// Initiative in a D&D game.
// Define global variables and get elements from HTML
let characters = {}
const addButton = document.getElementById("add");
const rollButton = document.getElementById("roll");
const clearButton = document.getElementById("clear")
let displayMessage = document.getElementById("character-list");
let characterName = "";
function addCharacter() {
// find out if user wants to add a character
	let userSelect = prompt("Would you like to add a new character? y/n")
	if (userSelect == "y" || userSelect == "Y") {
// Prompt user for input and store it in object
		//while (characterName != "*") {
			let characterName = prompt("Please enter their Name: please enter '*' to stop");
			let characterNumber = prompt("please enter their initiative: ");
			let characterInit = Number(characterNumber);
			characters[characterName] = characterInit;
			displayMessage.innerHTML = `Character List: ${JSON.stringify(characters)} `;
			console.log(characters);
			console.log(characterName);
		//}
	} else if (userSelect == "n" || userSelect == "N") {
// Get an array of objects values
		let values = Object.values(characters);
		console.log(values);
// reassign object values

	} else {
		alert("Sorry, you have entered incorrectly, please try again...")
	}
}
function sortCharacter() {
	// Get an array of the keys:
	let keys = Object.keys(characters);

	// Then sort by using the keys to lookup the values in the original object:
	keys.sort(function(a, b) { return characters[b] - characters[a] });
	displayMessage.innerHTML = `Character List: ${keys} `;
	console.log(keys);
}

function characterAdd() {
	addButton.addEventListener("click", addCharacter());
}

function characterSort() {
	rollButton.addEventListener("click", sortCharacter());
}

function characterClear(){
	clearButton.addEventListener("click", () => {
		for (var member in characters) delete characters[member];
			displayMessage.innerHTML = `Character List: `;
			console.log(characters);
	});

}

