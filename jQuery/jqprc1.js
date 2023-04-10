$("h1").css("font-family", "cursive");
$("h1").css("color", "purple");
$(document).keypress(function(event) {
        $("h1").html(event.key);
        $("h1").css("font-size", "10rem");

    });
$