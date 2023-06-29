// const endDate = "11 July 2023 10:00 PM"
const val = document.querySelectorAll(".inputTime input")
const endDate = val[0].textContent + " " + val[1].value + " " +  "2023 " + val[2].value + ":" + val[3].value  + " " + val[4].value
console.log(endDate)
document.getElementById("endDate").innerText = endDate;
const input = document.querySelectorAll("input")
function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now);

    // days conversion //
    input[0].value = Math.floor((((((diff)/1000)/60)/60)/24));
    input[1].value = Math.floor(((diff)/3600000)%24)
    input[2].value = Math.floor((((diff)/60000)%60))
    input[3].value = Math.floor(((diff/1000)%60))
}
// initial call
clock();

setInterval(
    ()=>{
        clock();
    },
    1000
)