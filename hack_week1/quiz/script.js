
function checkScore() {
  let userScore = 0;
  const correctHTMLAnswer = 'Hypertext Markup Language';
  const correctCSSAnswer = 'Cascading Style Sheets';
  const htmlAnswer = document.querySelector('input[name=html]:checked').value;
  const cssAnswer = document.querySelector('input[name=css]:checked').value;
  if (correctHTMLAnswer == htmlAnswer) {
    userScore += 1;
  } else {
    document.querySelector("#question-one").style.color = 'red';
  }
  if (correctCSSAnswer == cssAnswer) {
   userScore += 1;  
  } else {
    const questionTwo = document.getElementById("question-two");
    questionTwo.style.color = 'red';
  }
  alert('Your final score is ' + userScore + '/5');
}
