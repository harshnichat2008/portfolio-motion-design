let color = "#181818";
let color2 = "#d3d3d3";

startPort = document.querySelector("#start");
one = document.querySelector(".one");
two = document.querySelector(".two");
three = document.querySelector(".three");
four = document.querySelector(".four");
text = document.querySelector(".text");
body = document.querySelector("body");
obj = document.querySelector(".obj");
dot = document.querySelector(".dot");
section = document.querySelector(".section");
own = document.querySelector(".own");
myName = document.querySelector(".name");
dob = document.querySelector(".dob");
date = document.querySelector(".date");
day = document.querySelector(".day");
box = document.querySelector(".box");
from = document.querySelector(".from");
country = document.querySelector(".country");
video = document.querySelector(".video");
photo = document.querySelector(".img");
credit = document.querySelector(".credit");

function initialize(){
    setTimeout(startPortfl, 0);
    setTimeout(showSection, 0);
    setTimeout(distant, 2000);
    setTimeout(showText, 2400);
    setTimeout(dotDistant, 2500);
    setTimeout(changeBg, 2800);
    setTimeout(changeTextColor, 2800);
    setTimeout(changeDotColor, 2800);
    setTimeout(changeTextSpace, 3000);
    setTimeout(hideText, 3200);
    setTimeout(dotHide, 3300);
    setTimeout(showOwn, 3400);
    setTimeout(showName, 3500);
    setTimeout(cstmText, 3800);
    setTimeout(hideOwn, 4000);
    setTimeout(showDot, 4500);
    setTimeout(minDot, 5000);
    setTimeout(hideName, 5000);
    setTimeout(moveDot, 5200);
    setTimeout(borderDot, 5500);
    setTimeout(showDob, 5500);
    setTimeout(showDate, 5800);
    setTimeout(showDay, 5800);
    setTimeout(moveDate, 6000);
    setTimeout(moveDay, 6000);
    setTimeout(boxHeight, 6500);
    setTimeout(overlap, 7000);
    setTimeout(showVideo, 7500);
    setTimeout(hideDot, 7500);
    setTimeout(hideDob, 7500);
    setTimeout(hideDay, 7500);
    setTimeout(showFrom, 7600);
    setTimeout(showCountry, 7700);
    setTimeout(hideFrom, 9500);
    setTimeout(hideCountry, 9600);
    setTimeout(hideVideo, 10000);
    setTimeout(overlapNone, 10200);
    setTimeout(showPhoto, 10500);
    setTimeout(showCredit, 11000);
}

function showCredit(){
    credit.style.opacity = "100%";
    credit.style.marginLeft = "280px";
    photo.style.marginLeft = "-100px";
}

function showPhoto(){
    photo.style.opacity  = "100%";
}

function hidePhoto(){
    photo.style.opacity  = "0%";
}

function startPortfl(){
    startPort.style.display = "none";
}

function showSection(){
    section.style.opacity = "100%";
}

function showVideo(){
    video.style.opacity = "100%";
}

function hideVideo(){
    video.style.opacity = "0%";
}

function showFrom(){
    from.style.marginLeft = "0px";
}

function hideFrom(){
    from.style.marginLeft = "-100px";
}

function showCountry(){
    country.style.marginLeft = "0px";
}

function hideCountry(){
    country.style.marginLeft = "-100px";
}

function boxHeight(){
    box.style.height = "281px";
}

function overlapNone(){
    box.style.width = "0%";
}

function overlap(){
    box.style.width = "100%";
}

function distant() {
    one.style.animation = "none";
    two.style.animation = "none";
    three.style.animation = "none";
    four.style.animation = "none";
    one.style.marginRight = "-30px";
    two.style.marginRight = "200px";
    three.style.marginLeft = "200px";
    four.style.marginLeft = "-30px";
}

function showText() {
    text.style.marginTop = "0px";
}

function changeTextColor() {
    text.style.color = color2;
}

function changeTextSpace() {
    text.style.letterSpacing = "5px";
}

function hideText() {
    text.style.opacity = "0%";
}

function dotDistant() {
    one.style.marginBottom = "100px";
    two.style.marginTop = "100px";
    three.style.marginBottom = "100px";
    four.style.marginTop = "100px";
}

function changeDotColor() {
    one.style.backgroundColor = color2;
    two.style.backgroundColor = color2;
    three.style.backgroundColor = color2;
    four.style.backgroundColor = color2;
}

function dotHide() {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
}

function changeBg() {
    body.style.backgroundColor = color;
    obj.style.backgroundColor = color;
}

function showOwn() {
    own.style.opacity = "100%";
}

function hideOwn() {
    own.style.opacity = "0%";
}

function showName() {
    myName.style.marginTop = "0px";
}

function hideName() {
    myName.style.marginTop = "150px";
}

function cstmText() {
    own.style.fontSize = "80px";
}

function showDot() {
    dot.style.height = "200px";
    dot.style.width = "200px";
}

function minDot() {
    dot.style.height = "160px";
    dot.style.width = "160px";
}

function moveDot() {
    dot.style.marginBottom = "-120px";
}

function borderDot() {
    dot.style.backgroundColor = color;
    dot.style.border = "2px solid #d3d3d3";
}

function hideDot() {
    dot.style.display = "none";
}

function showDob() {
    dob.style.marginBottom = "150px";
}

function hideDob() {
    dob.style.display = "none";
}

function showDate(){
    date.style.opacity = "100%";
}

function moveDate(){
    dot.style.marginLeft = "-100px";
}

function showDay(){
    day.style.display = "block";
}

function hideDay(){
    day.style.display = "none";
}

function moveDay(){
    day.style.marginLeft = "300px";
}