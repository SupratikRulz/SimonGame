/**
 * Author  : Supratik Basu
 * Game    : SIMON GAME SIMULATION    
 */

/**
 * performs action according to the button pressed
 * @param {*} btn 
 */
function buttonClick(btn) {
    var played = false;
    switch (btn) {
    case "btn-green":
        view.getDOMElement("sGreen").play();
        played = true;
        break;
    case "btn-red":
        view.getDOMElement("sRed").play();
        played = true;
        break;
    case "btn-yellow":
        view.getDOMElement("sYellow").play();
        played = true;
        break;
    case "btn-blue":
        view.getDOMElement("sRed").play();
        played = true;
        break;
    }
    flashParticularButton(btn);
    model.addUserAnswer(btn);
    if (model.getComputerQuestionAtIndex(model.getUserCounter()) === model.getUserAnswerAtIndex(model.getUserCounter())) {
        var count = model.getUserCounter();
        count = count + 1;
        model.setUserCounter(count);
        view.getDOMElement("result").innerHTML = model.getRandomCorrectAnswerExpression();
        if (model.getUserAnswerLength() === model.getComputerQuestionLength()) {
            view.getDOMElement("result").innerHTML = model.getRandomNextLevelExpression();
            setStateOfColourButtons(true);
            setTimeout(function() {
                nextLevel();
            }, 1000);
        }
    } else {
        setStateOfColourButtons(true);
        view.getDOMElement("sWrong").play();
        if (model.getStrictStatus()) {
            view.getDOMElement("result").innerHTML = "Opps! Start from the beginning!";
            setTimeout(function() {
                model.restart();
            }, 500);
            setTimeout(function() {
                view.getDOMElement("counter").innerHTML = model.getCounter();
                view.getDOMElement("strict").checked = true;
                model.setStrictStatus(true);
                playSequence();
            }, 501);
        } else {
            model.setUserAnswerToEmptyArray();
            model.setUserCounter(0);
            view.getDOMElement("result").innerHTML = "Wrong! Watch Closely";
            setStateOfPowerButton("none");
            setTimeout(playSequence, 500);
        }
    }
    return played;
}

function toggleStrict() {
    model.setStrictStatus(view.getDOMElement("strict").checked);
}

function toggleOnOff() {
    var gamebox = view.getDOMElement("gamebox");
    if (gamebox.style.display === "block") {
        gamebox.style.display = "none";
        model.setOn_OffStatus(false);
        setPlayButtonState("none");
        view.getDOMElement("result").innerHTML = "Turn game On to Start";
    } else {
        view.getDOMElement("sStart").play();
        gamebox.style.display = "block";
        model.setOn_OffStatus(true);
        view.getDOMElement("counter").innerHTML = "20";
        view.getDOMElement("result").innerHTML = "Welcome! Press on PLAY button to start!";
        setStateOfColourButtons(true);
        setPlayButtonState("auto");
        setTimeout(model.restart.call(model), 1000);
    }
}

function gameStart() {
    setPlayButtonState("none");
    if (model.getOn_OffStatus()) {
        view.getDOMElement("result").innerHTML = "Booting Wait...";
        model.restart();
        view.getDOMElement("counter").innerHTML = "...";
        setStateOfColourButtons(true);
        setTimeout(function() {
            view.getDOMElement("counter").innerHTML = model.getCounter();
            playSequence();
        }, 1000);
        return "executed";
    }
    return "not executed!";
}

function greenClick() {
    buttonClick("btn-green");
    return true;
}

function redClick() {
    buttonClick("btn-red");
    return true;
}

function yellowClick() {
    buttonClick("btn-yellow");
    return true;
}

function blueClick() {
    buttonClick("btn-blue");
    return true;
}
/**
 * initialize the event listeners on strict button, on-off button, play button
 */
var initEventListeners = function() {// eslint-disable-line no-unused-vars 

    document.getElementById("btn-green").addEventListener("click", greenClick);

    document.getElementById("btn-red").addEventListener("click", redClick);

    document.getElementById("btn-yellow").addEventListener("click", yellowClick);

    document.getElementById("btn-blue").addEventListener("click", blueClick);

    view.getDOMElement("strict").addEventListener("click", toggleStrict);

    view.getDOMElement("on-off").addEventListener("click", toggleOnOff);

    view.getDOMElement("start").addEventListener("click", gameStart);
};
