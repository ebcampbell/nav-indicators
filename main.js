// when you click on a button the black bar should move to that clicked button
// put eventlistener on links section
// make function that targets those buttons in that section so when they are clicked the bar will move to that button

var allButtons = document.querySelector('.links');

allButtons.addEventListener('click', changeButton);

function changeButton() {

  var buttons = document.querySelectorAll('button')
  for (var i = 0; i < buttons.length; i++)
  if (buttons[i] === event.target) {
    buttons[i].classList.add('nav-bar');
  }
}
