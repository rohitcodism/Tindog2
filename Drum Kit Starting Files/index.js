// detecting button press //

var numberOfDrumButtons = document.querySelectorAll(".drum").length
for(var i  = 0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick)
}
// document.querySelector(".set").addEventListener("click", handleclick)   /* alternativee way to add event listener to this set of buttons but it is specific for this webiste only*/
function handleclick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

// detecting keyboeard press //

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})
function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play()
            break;
        default:
            console.log(buttonInnerHTML)
            break;
    }
}
function buttonAnimation(currentKey){
    var activeBUtton = document.querySelector("." + currentKey)
    activeBUtton.classList.add("pressed")
    setTimeout(function(){
        activeBUtton.classList.remove("pressed")
    }, 100)
}