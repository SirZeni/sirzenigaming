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
