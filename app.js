


//render elements
function Question(text, choices, answer){
	return {
		question: text,
		choose: choices,
		correct: answer
	}

}






//  Event Listeners
function handleClicks(){
	$('.container').on('click', '.start-button', function(event){
		$('.question, .options').removeClass('hidden');
		$('.greeting-header, .greeting-button').addClass('hidden');
		$('')
	})

}



$(document).ready(handleClicks)