var controller = {
    elements: {
        btnIdArray: ["btn-green", "btn-red", "btn-yellow", "btn-blue"],
        compQuestion: [],
        userAnswer: [],
        start: false,
        on_off: false,
        strict: false,
        counter: 0,
        userCounter: 0,
        correctAnswerExpression: ["Wow Correct!", "Doing well!", "Awesome!", "Got it correct", "Well Played!", "You have great memory!", "I am impressed", "Brilliant!", "Sure you not cheating?", "A Class!"],
        nextLevelExpression: ["You are awesome!Next level.", "This level will be tough!", "Level Up!", "More confusions ahead", "You wont give up!Level Up!", "Try this level", "Difficulty increased!", "Now SIMON is gonna play hard with you!"]
    },
    setStateOfPowerButton: function(state) {
        view.getDOMElement("power-btn").style.pointerEvents = state;
    },
    setPlayButtonState: function(state) {
        view.getDOMElement("start").style.pointerEvents = state;
    },
    setStateOfColourButtons: function(state) {
        view.getDOMElement("btn-green").disabled = state;
        view.getDOMElement("btn-red").disabled = state;
        view.getDOMElement("btn-yellow").disabled = state;
        view.getDOMElement("btn-blue").disabled = state;
    },
    getRandomInt: function(min, max) {
        return Math.floor((Math.random() * max) + min);
    },
    getCorrectAnswerExpression: function() {
        return controller.elements.correctAnswerExpression[controller.getRandomInt(0, 10)];
    },
    getNextLevelExpression: function() {
        return controller.elements.nextLevelExpression[controller.getRandomInt(0, 8)];
    },
    restart: function() {
        controller.elements.userAnswer = [];
        controller.elements.compQuestion = [];
        controller.elements.start = false;
        controller.elements.on_off = true;
        controller.elements.counter = 1;
        controller.elements.userCounter = 0;
        controller.elements.compQuestion.push(controller.elements.btnIdArray[controller.getRandomInt(0, 4)]);
    },
    flashParticularButton: function(btn) {
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
    },
    playSequence: function() {
        controller.setStateOfPowerButton("none");
        controller.setPlayButtonState("none");
        controller.setStateOfColourButtons(true);
        view.getDOMElement("result").innerHTML = "Watch out the sequence!";
        setTimeout(function() {
            controller.setStateOfPowerButton("auto");
            controller.setPlayButtonState("auto");
            controller.setStateOfColourButtons(false);
        }, controller.elements.compQuestion.length * 1000 + 1000);
        var i = 0;
        var sequence = setInterval(function() {
            controller.flashParticularButton(controller.elements.compQuestion[i]);
            i++;
            if (i >= controller.elements.compQuestion.length) {
                clearInterval(sequence);
                setTimeout(function() {
                    view.getDOMElement("result").innerHTML = "Here you go!";
                }, 1000);
            }
        }, 1000);
    },
    nextLevel: function() {
        if (controller.elements.counter === 20) {
            view.getDOMElement("counter").innerHTML = "WON";
            view.getDOMElement("result").innerHTML = "Congrats! You Won! Starting from the beginning!";
            setTimeout(function() {
                controller.restart();
                view.getDOMElement("counter").innerHTML = "1";
                controller.playSequence();
            }, 2900);
        } else {
            controller.elements.counter++;
            controller.elements.userCounter = 0;
            controller.elements.userAnswer = [];
            view.getDOMElement("counter").innerHTML = controller.elements.counter;
            controller.elements.compQuestion.push(controller.elements.btnIdArray[controller.getRandomInt(0, 4)]);
            controller.playSequence();
        }
    }
};