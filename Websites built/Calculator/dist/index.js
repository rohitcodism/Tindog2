let string = ""
$("button").on("click", function(e){
    string = string + e.target
    document.querySelector("input").value = string;
});