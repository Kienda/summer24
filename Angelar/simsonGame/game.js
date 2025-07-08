var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);

  return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);
console.log(randomChosenColour);
console.log(gamePattern);

$("#" + randomChosenColour).click(function () {
  $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(gamePattern);
  animatePress(gamePattern);
});

$(".btn").on("click", function (event) {
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
})

function playSound(name) {
  var audio1 = new Audio("sounds/" + name + ".mp3");
  audio1.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}










