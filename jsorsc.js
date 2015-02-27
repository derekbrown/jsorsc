function pickTerm(terms){
   return terms[Math.floor(Math.random() * terms.length)];
}

function newGame(){
  termPicked = pickTerm(TERMS);
  $('.term-name').text(termPicked.term);
}

$(document).ready(function () {
  newGame()
});

$('button').click(function (e) {
  var categoryPicked = $(e.target)[0].className,
      result;
  if(termPicked.category.toLowerCase() === categoryPicked) {
    result = "You got it! " + termPicked.term + " is a " + termPicked.category + " term.";
    resultClass = "yay";
  } else {
    result = "Oooh, sorry! " + termPicked.term + " is a " + termPicked.category + " term.";
    resultClass = "boo";
  }
  $('.result').addClass(resultClass).text(result).fadeIn(1200).show();
  setTimeout(function (){$('.result').removeClass(resultClass).text("JavaScript or Scientology?");newGame();}, 2500);
});