let squer12 = document.getElementById ("squer");
let squer1 = document.getElementById ("squer1");
squer.addEventListener("click", hide);
let randomNum = Math.random() * 10;
let randomNumFloored = Math.floor(randomNum)
function hide (){
    squer1.style.color = randomNumFloored
}