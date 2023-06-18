$("h1").css("font-family", "cursive");
$("h1").css("color", "purple");
$(document).keypress(function(event) {
        $("h1").html(event.key);
        $("h1").css("font-size", "10rem");

    });
$("h1").on("mouseover", function() {
    setTimeout(function(){
        $("h1").css("color", "skyblue");
    }, 1);
});
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:.5});
});