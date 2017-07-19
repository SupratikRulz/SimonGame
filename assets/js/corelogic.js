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
        document.getElementById("result").innerHTML = "Welcome! Press on PLAY button to start!";
    } else {
        gamebox.style.display = 'block';
        on_off = true;
        document.getElementById("result").innerHTML = "Welcome! Press on PLAY button to start!";
        setTimeout(restart, 1000);
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
    }, 700);

    setTimeout(function() {
        document.getElementById("btn-red").style.background = "#F34236";
    }, 1400);
    setTimeout(function() {
        document.getElementById("btn-blue").style.background = "#3E50B4";
    }, 2100);
    setTimeout(function() {
        document.getElementById("btn-yellow").style.background = "#FEC007";
    }, 2800);
    setTimeout(function() {
        document.getElementById("btn-green").disabled = true;
        document.getElementById("btn-red").disabled = true;
        document.getElementById("btn-yellow").disabled = true;
        document.getElementById("btn-blue").disabled = true;
    }, 2900);

}

function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function restart() {
    document.getElementById("btn-green").disabled = true;
    document.getElementById("btn-red").disabled = true;
    document.getElementById("btn-yellow").disabled = true;
    document.getElementById("btn-blue").disabled = true;
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
    switch (btn) {
        case "btn-green":
            var x = document.getElementById("sGreen");
            x.play();
            break;
        case "btn-red":
            var x = document.getElementById("sRed");
            x.play();
        case "btn-yellow":
            var x = document.getElementById("sYellow");
            x.play();
        case "btn-blue":
            var x = document.getElementById("sRed");
            x.play();
    }
    setTimeout(function() {
        document.getElementById(btn).style.opacity = 1;
    }, 800);
}

function playSequence() {
    document.getElementById("result").innerHTML = "Watch Out!";
    console.log("playing sequnce");
    document.getElementById("btn-green").disabled = true;
    document.getElementById("btn-red").disabled = true;
    document.getElementById("btn-yellow").disabled = true;
    document.getElementById("btn-blue").disabled = true;
    setTimeout(function() {
        document.getElementById("btn-green").disabled = false;
        document.getElementById("btn-red").disabled = false;
        document.getElementById("btn-yellow").disabled = false;
        document.getElementById("btn-blue").disabled = false;
    }, compQuestion.length * 1000 + 1000);
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
    if (on_off) {
        document.getElementById("result").innerHTML = "Welcome! Press on PLAY button to start!";
        restart();
        counter = 1;
        document.getElementById("counter").innerHTML = "...";
        setTimeout(function() {
            document.getElementById("counter").innerHTML = counter;
            var integerRandom = getRandomInt(0, 4);
            compQuestion.push(btnIdArray[integerRandom]);
            setTimeout(playSequence, 3000);
            console.log("computer: " + compQuestion);
        }, 2900);
    }

});

function nextLevel() {
    if (counter === 20) {
        restart();
        counter = 1;
        document.getElementById("counter").innerHTML = "WON";
        document.getElementById("result").innerHTML = "Congrats! You Won!";
        setTimeout(function() {
            document.getElementById("counter").innerHTML = counter;
            var integerRandom = getRandomInt(0, 4);
            compQuestion.push(btnIdArray[integerRandom]);
            setTimeout(playSequence, 3000);
            console.log("computer: " + compQuestion);
        }, 2900);
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
    switch (btn) {
        case "btn-green":
            var x = document.getElementById("sGreen");
            x.play();
            break;
        case "btn-red":
            var x = document.getElementById("sRed");
            x.play();
        case "btn-yellow":
            var x = document.getElementById("sYellow");
            x.play();
        case "btn-blue":
            var x = document.getElementById("sRed");
            x.play();
    }
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
        setTimeout(function() {
            var x = document.getElementById("sWrong");
            x.play();
        }, 1000);
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
            }, 4001);
        } else {
            userAnswer = [];
            userCounter = 0;
            document.getElementById("result").innerHTML = "Wrong! Watch Closely";
            setTimeout(playSequence, 2000);
        }
    }
}