//Script for time clock
setInterval (myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("homeclock").innerHTML = d.toLocaleTimeString();

  var date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    document.getElementById("homedaydate").innerHTML = current_date;

//Script for date + time greeting
  const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good morning! &#9925;";
} else if (time < 18) {
  greeting = "Good afternoon! &#127773;";
} else {
  greeting = "Good evening! &#127769;";
}
document.getElementById("hometimegreeting").innerHTML = greeting;

//Script for Back to Top Button (Home page)
let mybutton = document.getElementById("bttbutton");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
}

function showQR(){
var x = document.getElementById("QRcodeimg1");
var y = document.getElementById("QRcodeimg1download");
 if (x.style.display === "none"){
  x.style.display = "block";
 } else {
  x.style.display = "none";
 }

 if (y.style.display === "none"){
  y.style.display = "block";
 } else {
  y.style.display = "none";
 }

}

function proceedtopatchnotes(){
window.alert("Proceed to Patch Notes?");
document.location = "sirzenigamingpnotes.html";
}

function toggleshowcinemamenu(){
var a = document.getElementById("cinemadropdownmenu");

if(a.style.display === "none"){
  a.style.display = "block";
} else{
  a.style.display = "none";
}
}

function gotovideo1(){
  let mybutton = document.getElementById("cinemabutton1");
  var a = document.getElementById("cinemayoutubevideo1");
  var b = document.getElementById("cinemayoutubevideo2");
  var c = document.getElementById("cinemayoutubevideo3");
  var d = document.getElementById("cinemayoutubevideo4");
  if(a.style.display = "none"){
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
}
}

function gotovideo2(){
  var a = document.getElementById("cinemayoutubevideo1");
  var b = document.getElementById("cinemayoutubevideo2");
  var c = document.getElementById("cinemayoutubevideo3");
  var d = document.getElementById("cinemayoutubevideo4");
  if(b.style.display = "none"){
    b.style.display = "block";
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
}
}

function gotovideo3(){
  var a = document.getElementById("cinemayoutubevideo1");
  var b = document.getElementById("cinemayoutubevideo2");
  var c = document.getElementById("cinemayoutubevideo3");
  var d = document.getElementById("cinemayoutubevideo4");
  if(c.style.display = "none"){
    c.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    d.style.display = "none";
}
}

function gotovideo4(){
  var a = document.getElementById("cinemayoutubevideo1");
  var b = document.getElementById("cinemayoutubevideo2");
  var c = document.getElementById("cinemayoutubevideo3");
  var d = document.getElementById("cinemayoutubevideo4");
  if(d.style.display = "none"){
    d.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
}
}
