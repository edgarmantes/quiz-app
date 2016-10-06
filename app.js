

function Question(text, choices, answer){
	return {
		question: text,
		choose: choices,
		correct: answer
	}

}

//remove-text function

//render-elements function

function renderHtml(object, element1, element2){
	var questionItem = object.question;
    $('ul').html('');
	var itemsHTML = object.choose.map(function(item, index){
		return '<li><button class="' + index + '">' + item + '</button></li>'
	});
	element1.append(itemsHTML);
	element2.append(questionItem);

}






//  Event Listeners
function handleClicks(){
	$('.container').on('click', '.start-button', function(event){
		renderHtml(questions[0], $('.options'), $('.js-question-entry'));
		$('.question, .options').removeClass('hidden');
		$('.greeting-header, .greeting-button').addClass('hidden');
	});

	$('.option').on('click')

}



$(document).ready(handleClicks)