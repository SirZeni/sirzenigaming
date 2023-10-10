setInterval (myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("homeclock").innerHTML = d.toLocaleTimeString();
}

console.log(myTimer());