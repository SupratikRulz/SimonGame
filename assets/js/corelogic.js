var btnIdArray = ["btn-green", "btn-red", "btn-yellow", "btn-blue"];
var compQuestion = new Array();
var userAnswer = new Array();
var start = false;
var on_off = false;
var strict = false;
var counter = 0;

document.getElementById("on-off").addEventListener("click", function() {
    var gamebox = document.getElementById('gamebox');
    if (gamebox.style.display === 'block') {
        gamebox.style.display = 'none';
        on_off = false;
    } else {
        gamebox.style.display = 'block';
        on_off = true;
        restart();
    }
    console.log("On Off status: " + on_off);

});

function flashAllButton() {
    document.getElementById("btn-green").style.background = "#FEFCD7";
    document.getElementById("btn-red").style.background = "#FEFCD7";
    document.getElementById("btn-yellow").style.background = "#FEFCD7";
    document.getElementById("btn-blue").style.background = "#FEFCD7";

    setTimeout(function() {
        document.getElementById("btn-green").style.background = "#4BAE4F";
        document.getElementById("btn-red").style.background = "#F34236";
        document.getElementById("btn-yellow").style.background = "#FEC007";
        document.getElementById("btn-blue").style.background = "#3E50B4";
    }, 100);
}

function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}


function restart() {
    start = false;
    on_off = true;
    strict = false;
    document.getElementById("strict").checked = false;
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
    compQuestion = new Array();
    userAnswer = new Array();
    flashAllButton();
}

function flashParticularButton(btn) {
    document.getElementById(btn).style.opacity = 0.6;
    setTimeout(function() {
        document.getElementById(btn).style.opacity = 1;
    }, 600);
}

function playSequence() {
    console.log("playing sequnce");
    var i = 0;
    var sequence = setInterval(function() {
        flashParticularButton(compQuestion[i]);
        i++;
        if (i >= compQuestion.length) {
            clearInterval(sequence);
        }
    }, 800);
}

document.getElementById("start").addEventListener("click", function() {
    restart();
    counter = 1;
    document.getElementById("counter").innerHTML = counter;
    var integerRandom = getRandomInt(0, 4);
    compQuestion.push(btnIdArray[integerRandom]);
    playSequence();
    console.log("computer: " + compQuestion);

});