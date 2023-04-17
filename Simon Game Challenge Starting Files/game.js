function nextsequence(){
var randomNumber = Math.floor(4*Math.random());
buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[randomNumber];
gamePattern = [];
var num = gamePattern.push(randomChosenColour)
$(".").fadeOut(100).fadin
function makesound(num){
    if(num == "blue"){
        var blue = new Audio("sounds/blue.mp3")
        blue.play()
        console.log(num)
    }else if(num == "red"){
        var red = new Audio("sounds/red.mp3")
        red.play()
        console.log(num)
    }else if(num == "green"){
        var green = new Audio("sounds/green.mp3")
        green.play()
        console.log(num)
    }else if(num == "yellow"){
        var yellow = new Audio("sounds/yellow.mp3")
        yellow.play()
        console.log(num)
    }
}
}