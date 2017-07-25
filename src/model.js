/**
 * Author  : Supratik Basu
 * Game    : SIMON GAME SIMULATION    
 */

/**
 * SimonModel               : Constructor
 * @btnIdArray              : array, contains button id 
 * @compQuestion            : array, contains button id that are randomly generated by computer
 * @userAnswer              : array, contains the user answers that are recorded  
 * @start                   : keeps the status of PLAY button
 * @on_off                  : keeps the status of GAME ON or GAME OFF
 * @strict                  : keeps the status of STRICT MODE
 * @counter                 : keeps the count of the level in which user is currently present
 * @userCounter             : keeps the count of the current sequence user is in
 * @correctAnswerExpression : array, contains predefined strings that are triggered when user gives correct answer
 * @nextLevelExpression     : array, contains predefined strings that are triggered when user goes to next level  
 */
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
    getRandomInt: function(min, max) {
        return Math.floor((Math.random() * max) + min);
    },
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
        return this.compQuestion[index];
    },
    getComputerQuestionLength: function() {
        return this.compQuestion.length;
    },
    addComputerQuestion: function() {
        var that = this;
        this.compQuestion.push(this.btnIdArray[that.getRandomInt(0, 4)]);
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
        return this.correctAnswerExpression[this.getRandomInt(0, 10)];
    },
    getRandomNextLevelExpression: function() {
        return this.nextLevelExpression[this.getRandomInt(0, 8)];
    },
    restart: function() {
        this.userAnswer = [];
        this.compQuestion = [];
        this.start = false;
        this.on_off = true;
        this.counter = 1;
        this.userCounter = 0;
        var that = this;
        this.compQuestion.push(this.btnIdArray[that.getRandomInt(0, 4)]);
    }
};