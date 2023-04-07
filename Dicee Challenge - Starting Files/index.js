var randomnumber1 = Math.floor(Math.random()*6)+1 //1-6
var randomDiceImage = "dice" + randomnumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource1 = "images/" + randomDiceImage; // random dice iamge from images folder
var image1 = document.querySelectorAll("img")[0]; // selcting the img1
image1.setAttribute("src",randomImageSource1)
var randomNumber2 = Math.floor(Math.random()*6)+1 //1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // dice1.png to dice6.png
var image2 = document.querySelectorAll("img")[1]; // selecting the img2
image2.setAttribute("src",randomImageSource2)
if(randomnumber1<randomNumber2){
    var text = document.querySelector("h1")
    text.innerHTML = "Player 2 wins !!!";
}else if(randomnumber1>randomNumber2){
    var text = document.querySelector("h1")
    text.innerHTML = "Player 1 wins !!!"
}else{
    var text = document.querySelector("h1")
    text.innerHTML = "Its a tie !!!!"
}