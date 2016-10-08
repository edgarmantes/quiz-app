

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
	$('.js-question-entry').html('');
    $('ul').html('');
	var itemsHTML = object.choose.map(function(item, index){
		return '<li><button class="button ' + index + '">' + item + '</button></li>'
	});
	element1.append(itemsHTML);
	element2.append(questionItem);

}


function rightAnswer(input){
	alert("Good Job! " + input + " is correct!");
	return;
}

function wrongAnswer(input, answer){
	alert("Sorry, but " + input + " is incorrect. The correct answer is " + answer + ". Nice try though...");
	return;
}


function renderScore (score, q_length){
	$('.score').html('');
	$('.score').html(score + ' points out of ' + q_length + ' possible');

}


function renderQuestNum (current, length){
	$('.foot').html('');
	$('.foot').html('Question  ' + (current + 1) + '  out of  ' + length);
}

//  Event Listeners
function handleClicks(){
	$('.container').on('click', '.start-button', function(event){
		renderHtml(questions[0], $('.options'), $('.js-question-entry'));
		renderQuestNum(questionIndex, questions.length);
		$('.question, .options, .foot, .score').removeClass('hidden');
		$('.greeting-header, .greeting-button').addClass('hidden');	

	});

	var score = 0;
	var questionIndex = 0;
	$('ul.options').on('click', '.button', function (event){

		var input = $(this).text();
		var answer = questions[questionIndex].correct;
		questionIndex++;
		if ( input === answer && questions.length > questionIndex) {
			rightAnswer(input);
			renderHtml(questions[questionIndex], $('.options'), $('.js-question-entry'));
			score++;
			renderScore(score, questions.length);
			renderQuestNum(questionIndex, questions.length);

		} else if ( input !== answer && questions.length > questionIndex){
			wrongAnswer(input, answer);
			renderHtml(questions[questionIndex], $('.options'), $('.js-question-entry'));
			renderScore(score, questions.length);
			renderQuestNum(questionIndex, questions.length);
		} else {
			alert("DONE!!!! How did you think you did? ");
			$('.question, .options, .foot, .score').addClass('hidden');
			$('.greeting-button, .js-restart, .ender').removeClass('hidden');
			$('.js-ender').html("You're Done!... Finally!")
			$('.final_score').html('You had a totoal of ' + score + ' out of ' + questions.length + ' correct. Are you satisfied with that?');
		}
		
	})

}



$(document).ready(handleClicks)