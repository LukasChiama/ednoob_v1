
function checkAnswer() {
  const correctAnswer = 'Hypertext Markup Language'
  const htmlAnswer = document.querySelector('input[name=html]:checked').value;
  if (correctAnswer == htmlAnswer) {
    alert('Good job. You deserve chewing gum')
  } else {
    alert('Who taught you HTML sef?')
  }
}
