var getRandomInt = function(min, max) {
    return Math.floor((Math.random() * max) + min);
};
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
    getStrictStatus: function() {
        return this.strict;
    },
    setStrictStatus: function(status) {
        this.strict = status;
    },
    getOn_OffStatus: function() {
        return this.on_off;
    },
    setOn_OffStatus: function(status) {
        this.on_off = status;
    },
    getStartStatus: function() {
        return this.start;
    },
    setStartStatus: function(status) {
        this.start = status;
    },
    getUserAnswerAtIndex: function(index) {
        return this.userAnswer[index];
    },
    getUserAnswerLength: function() {
        return this.userAnswer.length;
    },
    setUserAnswerToEmptyArray: function() {
        this.userAnswer = [];
    },
    addUserAnswer: function(element) {
        this.userAnswer.push(element);
    },
    getComputerQuestionAtIndex: function(index) {
        this.compQuestion[index];
    },
    getComputerQuestionLength: function() {
        return this.compQuestion.length;
    },
    addComputerQuestion: function() {
        this.compQuestion.push(this.btnIdArray[getRandomInt(0, 4)]);
        this.counter++;
    },
    getBtnIdArrayIndexValue: function(index) {
        return this.btnIdArray[index];
    },
    setUserCounter: function(value) {
        this.userCounter = value;
    },
    getUserCounter: function() {
        return this.userCounter;
    },
    setCounter: function(value) {
        this.counter = value;
    },
    getCounter: function() {
        return this.counter;
    },
    getRandomCorrectAnswerExpression: function() {
        return this.correctAnswerExpression[getRandomInt(0, 10)];
    },
    getRandomNextLevelExpression: function() {
        return this.nextLevelExpression[getRandomInt(0, 8)];
    },
    restart: function() {
        this.userAnswer = [];
        this.compQuestion = [];
        this.start = false;
        this.on_off = true;
        // this.counter = 0;
        // this.addComputerQuestion();
        this.counter = 1;
        this.userCounter = 0;
        console.log(this);
        var ref = this;
        this.compQuestion.push(ref.btnIdArray[getRandomInt(0, 4)]);
        console.log(this.compQuestion);
    }
};