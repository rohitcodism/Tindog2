function newFunction(){
  gamePattern = []
  buttonColors = ["red", "blue", "green", "yellow"];
  let randomNumber = Math.floor(Math.random()*4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).addEventListener("click",function(){
    $("#" + randomChosenColor).fadeToggle(100).fadeToggle(100)
  })
}
