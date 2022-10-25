const walpaper = document.querySelector(".wallpaper");
const homeScreen = document.querySelector("#homescreen");
const home1 =document.querySelector('.screen');
const work1 = document.querySelector('.work');
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
home1.style.display = "none";
work1.style.display = "none";

btn1.addEventListener('click',home);
function home(){
    work1.style.display = "none";
    if(home1.style.display !== "none"){
        homeScreen.style.display = "block";
        home1.style.display = "none";
    }
    else {
        homeScreen.style.display = "none";
        home1.style.display = "block";
    }
}

btn2.addEventListener('click',work);
function work() {
    home1.style.display = "none";
    if(work1.style.display === "none"){
        work1.style.display = "block";
        homeScreen.style.display = "none";
    }
    else {
        work1.style.display = "none";
        homeScreen.style.display = "block";
    }
}

