alert("game.js is connected");
// var buttonColours = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern = [];
// $(".btn").click(function(){
//     var userchosencolour = $(this).attr("id");
// });
// userClickedPattern.push(userchosencolour);
// console.log(userClickedPattern);
// function nextsequence(){
// var randomNumber = Math.floor(4*Math.random());
// var randomChosenColour = buttonColours[randomNumber];
// gamePattern.push(randomChosenColour);
// $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
// var audio = new Audio("sounds/"+ randomChosenColour + ".mp3");
// audio.play();
// }

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");

  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);

  //console.log(userClickedPattern);

});

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}