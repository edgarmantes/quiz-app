'use strict'



//render elements
function questionFactory(text, choices, answer){
	return {
		question: text,
		choose: choices,
		correct: answer
	}

}