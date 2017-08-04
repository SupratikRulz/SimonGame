/**
 * Author  : Supratik Basu
 * Game    : SIMON GAME SIMULATION    
 */

/**
 * returns the reference to DOM element
 */
var view = {
    getDOMElement: function(id) {
        return document.getElementById(id);
    }
};

var flashParticularButton = function(btn) {
    view.getDOMElement(btn).style.opacity = 0.2;
    switch (btn) {
    case "btn-green":
        view.getDOMElement("sGreen").play();
        break;
    case "btn-red":
        view.getDOMElement("sRed").play();
        break;
    case "btn-yellow":
        view.getDOMElement("sYellow").play();
        break;
    case "btn-blue":
        view.getDOMElement("sRed").play();
        break;
    }
    setTimeout(function() {
        view.getDOMElement(btn).style.opacity = 1;
    }, 800);
};

var setStateOfPowerButton = function(state) {
    view.getDOMElement("power-btn").style.pointerEvents = state;
};

var setPlayButtonState = function(state) {
    view.getDOMElement("start").style.pointerEvents = state;
};

var setStateOfColourButtons = function(state) {
    view.getDOMElement("btn-green").disabled = state;
    view.getDOMElement("btn-red").disabled = state;
    view.getDOMElement("btn-yellow").disabled = state;
    view.getDOMElement("btn-blue").disabled = state;
};

var playSequence = function() {
    setStateOfPowerButton("none");
    setPlayButtonState("none");
    setStateOfColourButtons(true);
    view.getDOMElement("result").innerHTML = "Watch out the sequence!";
    setTimeout(function() {
        setStateOfPowerButton("auto");
        setPlayButtonState("auto");
        setStateOfColourButtons(false);
    }, model.getComputerQuestionLength() * 1000 + 1000);
    var i = 0;
    var sequence = setInterval(function() {
        flashParticularButton(model.getComputerQuestionAtIndex(i));
        i++;
        if (i >= model.getComputerQuestionLength()) {
            clearInterval(sequence);
            setTimeout(function() {
                view.getDOMElement("result").innerHTML = "Here you go!";
            }, 1000);
        }
    }, 1000);
};

var nextLevel = function() {// eslint-disable-line no-unused-vars 
    if (model.getCounter() === 20) {
        view.getDOMElement("counter").innerHTML = "WON";
        view.getDOMElement("result").innerHTML = "Congrats! You Won! Starting from the beginning!";
        setTimeout(function() {
            model.restart();
            view.getDOMElement("counter").innerHTML = "1";
            playSequence();
        }, 2900);
    } else {
        model.setUserCounter(0);
        model.setUserAnswerToEmptyArray();
        model.addComputerQuestion();
        view.getDOMElement("counter").innerHTML = model.getCounter();
        playSequence();
    }
};
