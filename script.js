function ChangeHeroText() {
    document.querySelector("#hero > h1").innerHTML = "Login Sucessful";
}
const ChangeButtonText = () => {
    document.querySelector("button").innerHTML = "Get Ready to Smile";
}

const ChangeButtonBack = () => {
    document.querySelector("button").innerHTML = "Click to Submit";
}

document.querySelector("button").addEventListener("click", ChangeHeroText);

document.querySelector("button").addEventListener("mouseenter", ChangeButtonText);

document.querySelector("button").addEventListener("mouseleave", ChangeButtonBack);

function addLoginSuccess(){
    var s = document.createElement("section");
    var t = document.createTextNode("Thank You!");

    s.appendChild(t);
    s.classList.add("success");
    document.querySelector("form").classList.add("hide");

    document.querySelector("#login").appendChild(s);
}

document.querySelector("button").addEventListener("click", addLoginSuccess);

let person = prompt("Please enter your name", " Ronald");
let text;
if (person == null || person == "") {
  text = "Please Come Back again.";
} else {
  text = "You got 15% off your ride.";
}