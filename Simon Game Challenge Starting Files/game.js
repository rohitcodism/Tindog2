
function newFunction(){
  let userChosenColor
  gamePattern = [];
  userClickedPattern = [];
  buttonColors = ["red", "blue", "green", "yellow"];
  let randomNumber = Math.floor(Math.random()*4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(".btn").on("click", function(){
    userChosenColor = this.id;
  })
  userClickedPattern.push(userChosenColor);
  $("#" + randomChosenColor).on("click",function(){
    $("#" + randomChosenColor).fadeToggle(100).fadeToggle(100);
    let audio = new Audio("./sounds/" + randomChosenColor + ".mp3");
    audio.play();
  })
}
