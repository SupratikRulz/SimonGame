var btnIdArray = ["btn-green", "btn-red", "btn-yellow", "btn-blue"];
var compQuestion = new Array();
var userAnswer = new Array();
var start = false;
var on_off = false;
var strict = false;
var counter = 0;
var userCounter = 0;

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

document.getElementById("strict").addEventListener("click", function() {
    strict = document.getElementById("strict").checked;
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
    userCounter = 0;
    document.getElementById("counter").innerHTML = counter;
    compQuestion = new Array();
    userAnswer = new Array();
    flashAllButton();
}

function flashParticularButton(btn) {
    document.getElementById(btn).style.opacity = 0.2;
    setTimeout(function() {
        document.getElementById(btn).style.opacity = 1;
    }, 800);
}

function playSequence() {
    document.getElementById("result").innerHTML = "Watch Out!";
    console.log("playing sequnce");
    var i = 0;
    var sequence = setInterval(function() {
        flashParticularButton(compQuestion[i]);
        i++;
        if (i >= compQuestion.length) {
            clearInterval(sequence);
            setTimeout(function() {
                document.getElementById("result").innerHTML = "Here you go!";
            }, 1000);
        }
    }, 1000);
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

function nextLevel() {
    if (counter === 20) {
        alert("You WON!");
        restart();
    } else {
        counter++;
        userCounter = 0;
        userAnswer = [];
        document.getElementById("counter").innerHTML = counter;
        var integerRandom = getRandomInt(0, 4);
        compQuestion.push(btnIdArray[integerRandom]);
        playSequence();
        console.log("computer: " + compQuestion);
    }
}

function buttonClick(btn) {
    flashParticularButton(btn);
    userAnswer.push(btn);
    if (compQuestion[userCounter] === userAnswer[userCounter]) {
        console.log(compQuestion[userCounter] === userAnswer[userCounter]);
        userCounter++;
        document.getElementById("result").innerHTML = "Wow Correct!";
        if (userAnswer.length === compQuestion.length) {
            document.getElementById("result").innerHTML = "You are awesome! Next Level!";
            setTimeout(function() {
                nextLevel();
            }, 1000);
        }
    } else {
        if (strict) {
            document.getElementById("result").innerHTML = "Opps! Start from the beginning!";
            setTimeout(restart, 2000);
            setTimeout(function() {
                counter = 1;
                document.getElementById("counter").innerHTML = counter;
                var integerRandom = getRandomInt(0, 4);
                compQuestion.push(btnIdArray[integerRandom]);
                document.getElementById("strict").checked = true;
                strict = true;
                playSequence();
                console.log("computer: " + compQuestion);
            }, 2001);
        } else {
            userAnswer = [];
            userCounter = 0;
            document.getElementById("result").innerHTML = "Wrong! Watch Closely";
            setTimeout(playSequence, 2000);
        }
    }
}