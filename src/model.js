var SimonModel = function() {
    this.btnIdArray = ["btn-green", "btn-red", "btn-yellow", "btn-blue"];
    this.compQuestion = [];
    this.userAnswer = [];
    this.start = false;
    this.on_off = false;
    this.strict = false;
    this.counter = 0;
    this.userCounter = 0;
    this.correctAnswerExpression = ["Wow Correct!", "Doing well!", "Awesome!", "Got it correct", "Well Played!", "You have great memory!", "I am impressed", "Brilliant!", "Sure you not cheating?", "A Class!"];
    this.nextLevelExpression = ["You are awesome!Next level.", "This level will be tough!", "Level Up!", "More confusions ahead", "You wont give up!Level Up!", "Try this level", "Difficulty increased!", "Now SIMON is gonna play hard with you!"];
};

SimonModel.prototype = {
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
        return this.correctAnswerExpression[getRandomInt(0, 10)];
    },
    getNextLevelExpression: function() {
        return this.nextLevelExpression[getRandomInt(0, 8)];
    },
    restart: function() {
        this.userAnswer = [];
        this.compQuestion = [];
        this.start = false;
        this.on_off = true;
        this.counter = 1;
        this.userCounter = 0;
        this.compQuestion.push(this.btnIdArray[getRandomInt(0, 4)]);
    },
    playSequence: function() {
        setStateOfPowerButton("none");
        setPlayButtonState("none");
        setStateOfColourButtons(true);
        view.getDOMElement("result").innerHTML = "Watch out the sequence!";
        setTimeout(function() {
            setStateOfPowerButton("auto");
            setPlayButtonState("auto");
            setStateOfColourButtons(false);
        }, this.compQuestion.length * 1000 + 1000);
        var i = 0;
        var sequence = setInterval(function() {
            flashParticularButton(this.compQuestion[i]);
            i++;
            if (i >= this.compQuestion.length) {
                clearInterval(sequence);
                setTimeout(function() {
                    view.getDOMElement("result").innerHTML = "Here you go!";
                }, 1000);
            }
        }, 1000);
    },
    nextLevel: function() {
        if (this.counter === 20) {
            view.getDOMElement("counter").innerHTML = "WON";
            view.getDOMElement("result").innerHTML = "Congrats! You Won! Starting from the beginning!";
            setTimeout(function() {
                restart();
                view.getDOMElement("counter").innerHTML = "1";
                playSequence();
            }, 2900);
        } else {
            this.counter++;
            this.userCounter = 0;
            this.userAnswer = [];
            view.getDOMElement("counter").innerHTML = this.counter;
            this.compQuestion.push(this.btnIdArray[getRandomInt(0, 4)]);
            playSequence();
        }
    }
};