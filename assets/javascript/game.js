// Create array of movie stars

var movieStars = [
"Humphrey Bogart", "James Stewart", "Fred Astaire", "Clark Gable", "Charlie Chaplin", "Gregory Peck", "John Wayne", "Gene Kelly", "Orson Welles", "James Dean", "Buster Keaton", "Sidney Poitier", "Katharine Hepburn", "Bette Davis", "Audrey Hepburn", "Greta Garbo", "Marilyn Monroe", "Elizabeth Taylor", "Judy Garland", "Marlene Dietrich", "Joan Crawford", "Grace Kelly", "Rita Hayworth", "Lauren Bacall", "Jean Harlow"
]

// Randomly choose one movie star

var randStar = movieStars[Math.floor(Math.random() * movieStars.length)];

// Display the empty characters for the user  

function emptyHangman(str) {

	var underscoreStar = "";

	for (var i = 0; i < str.length; i++) {
		if (str[i].match(/[a-z]/i)) {
			underscoreStar += "_"
		} else {
			underscoreStar += "\u00A0"
		}
	} 
	return underscoreStar
}

var underscoreStar = emptyHangman(randStar);

window.onload = function() {

	var guessboxDiv = document.getElementById("guess-box");
	guessboxDiv.innerHTML = emptyHangman(randStar);

};

// Recognize that the user is hitting a key, ignore F5

document.onkeyup = function(event) {

	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	if (event.keyCode === 116 && event.key != "t") {

		return;
	}

// Recognize whether this is a winning or losing guess

var guessedStar = "";


for (var i = 0; i < randStar.length; i++) {
	
	if (letter === randStar[i].toLowerCase()) {

		guessedStar += randStar[i];


	} else {

		guessedStar += underscoreStar[i];


	}

}

// Add winning and losing guesses to list of already guessed letters


	var alreadyGuessedDiv = document.getElementById("multi-use-box");
	alreadyGuessedDiv.innerHTML = "ALREADY GUESSED: " + letter;


// Add winning guess to name

	underscoreStar = guessedStar;

	var guessboxDiv = document.getElementById("guess-box");
	guessboxDiv.innerHTML = guessedStar;


};

// Add losing guess to bad guess list



// Allow three bad guesses before a loss

// If they win or lose, add one to appropriate score

// Display either "You win!" or "You lose"

// Display photo of the movie star at the end of the game

// Reset the game by pressing any key

