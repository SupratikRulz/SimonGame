beforeAll(function() {
    var temp = '<body onload="initEventListeners()"> <audio id="sGreen" src="sGreen.mp3"></audio> <audio id="sRed" src="sRed.mp3"></audio> <audio id="sYellow" src="sYellow.mp3"></audio> <audio id="sBlue" src="sBlue.mp3"></audio> <audio id="sWrong" src="sWrong.mp3"></audio> <audio id="sIntro" src="intro.mp3"></audio> <audio id="sStart" src="start.mp3"></audio> <div id="main-container"> <div id="result"> Turn game On to Start </div><div id="container"> <div id="gamebox"> <div id="upper-half"> <button id="btn-green" class="btn"></button> <button id="btn-red" class="btn"></button> </div><div id="lower-half"> <button id="btn-yellow" class="btn"></button> <button id="btn-blue" class="btn"></button> </div><div id="center-box"> <div id="counter"> <font id="counter-dis" class="noselect">20</font> </div></div></div><div id="settings"> <div id="start-div"> <div id="start-icon"> <img id="start" src="assets/images/play.png" height="30px" width="30px"/> </div><p>Play from the Beginning</p></div><div id="power-btn"> <label class="switch"> <input id="on-off"type="checkbox"> <span class="slider round"></span> </label> <p>Turn Game On/Off</p></div><div id="strict-mode" class="stict-mode-off strict-mode-on"> <label class="switch"> <input id="strict"type="checkbox"> <span class="slider round"></span> </label> <p>STRICT mode On/Off</p></div></div></div></div><script type="text/javascript" src="src/Controller.js"></script> <script type="text/javascript" src="src/Model.js"></script> <script type="text/javascript" src="src/View.js"></script> <script type="text/javascript" src="src/Start.js"></script></body>';
    document.body.insertAdjacentHTML('afterbegin', temp);
});


describe("This is flashParticularButton() test:", function() {
    it("should play sound and set opacity of the button to 1 after 800ms", function() {
        /**For Green Input */
        jasmine.clock().install();
        flashParticularButton("btn-green");
        expect(view.getDOMElement("btn-green").style.opacity).toBe("0.2");
        jasmine.clock().tick(801);
        expect(view.getDOMElement("btn-green").style.opacity).toBe("1");
        jasmine.clock().uninstall();

        /**For Red Input */
        jasmine.clock().install();
        flashParticularButton("btn-red");
        expect(view.getDOMElement("btn-red").style.opacity).toBe("0.2");
        jasmine.clock().tick(801);
        expect(view.getDOMElement("btn-red").style.opacity).toBe("1");
        jasmine.clock().uninstall();

        /**For Yellow Input */
        jasmine.clock().install();
        flashParticularButton("btn-yellow");
        expect(view.getDOMElement("btn-yellow").style.opacity).toBe("0.2");
        jasmine.clock().tick(801);
        expect(view.getDOMElement("btn-yellow").style.opacity).toBe("1");
        jasmine.clock().uninstall();

        /**For Blue Input */
        jasmine.clock().install();
        flashParticularButton("btn-blue");
        expect(view.getDOMElement("btn-blue").style.opacity).toBe("0.2");
        jasmine.clock().tick(801);
        expect(view.getDOMElement("btn-blue").style.opacity).toBe("1");
        jasmine.clock().uninstall();
    });
});


describe("This is setStateOfPowerButton() test", function() {
    it("should change the state of power button", function() {
        setStateOfPowerButton("none");
        expect(view.getDOMElement("power-btn").style.pointerEvents).toBe("none");
        setStateOfPowerButton("auto");
        expect(view.getDOMElement("power-btn").style.pointerEvents).toBe("auto");
    });
});

describe("This is setPlayButtonState() test", function() {
    it("should change the state of play button", function() {
        setPlayButtonState("none");
        expect(view.getDOMElement("start").style.pointerEvents).toBe("none");
        setPlayButtonState("auto");
        expect(view.getDOMElement("start").style.pointerEvents).toBe("auto");
    });
});

describe("This is setStateOfColourButtons() test", function() {
    it("should change the state of color buttons to clickable or non-clickable", function() {
        /**Disable Buttons */
        setStateOfColourButtons(true);
        expect(view.getDOMElement("btn-green").disabled).toBe(true);
        expect(view.getDOMElement("btn-red").disabled).toBe(true);
        expect(view.getDOMElement("btn-yellow").disabled).toBe(true);
        expect(view.getDOMElement("btn-blue").disabled).toBe(true);
        /**Enable Buttons */
        setStateOfColourButtons(false);
        expect(view.getDOMElement("btn-green").disabled).toBe(false);
        expect(view.getDOMElement("btn-red").disabled).toBe(false);
        expect(view.getDOMElement("btn-yellow").disabled).toBe(false);
        expect(view.getDOMElement("btn-blue").disabled).toBe(false);
    });
});

describe("This is playSequence() test", function() {
    it("should disable power,start,color buttons and change result DOM", function() {
        playSequence();
        expect(view.getDOMElement("btn-green").disabled).toBe(true);
        expect(view.getDOMElement("btn-red").disabled).toBe(true);
        expect(view.getDOMElement("btn-yellow").disabled).toBe(true);
        expect(view.getDOMElement("btn-blue").disabled).toBe(true);
        expect(view.getDOMElement("start").style.pointerEvents).toBe("none");
        expect(view.getDOMElement("power-btn").style.pointerEvents).toBe("none");
        expect(view.getDOMElement("result").innerHTML).toBe("Watch out the sequence!");
    });

    it("should enable power,start,color buttons after all questions are displayed", function() {
        jasmine.clock().install();
        playSequence();
        expect(view.getDOMElement("btn-green").disabled).toBe(true);
        expect(view.getDOMElement("btn-red").disabled).toBe(true);
        expect(view.getDOMElement("btn-yellow").disabled).toBe(true);
        expect(view.getDOMElement("btn-blue").disabled).toBe(true);
        expect(view.getDOMElement("start").style.pointerEvents).toBe("none");
        expect(view.getDOMElement("power-btn").style.pointerEvents).toBe("none");
        expect(view.getDOMElement("result").innerHTML).toBe("Watch out the sequence!");

        jasmine.clock().tick(model.getComputerQuestionLength() * 1000 + 1000);
        /**After All Questions are displayed */
        expect(view.getDOMElement("btn-green").disabled).toBe(false);
        expect(view.getDOMElement("btn-red").disabled).toBe(false);
        expect(view.getDOMElement("btn-yellow").disabled).toBe(false);
        expect(view.getDOMElement("btn-blue").disabled).toBe(false);
        expect(view.getDOMElement("start").style.pointerEvents).toBe("auto");
        expect(view.getDOMElement("power-btn").style.pointerEvents).toBe("auto");
        jasmine.clock().uninstall();
    });

    it("should change the result DOM 1000ms after all sequence is displayed", function() {
        jasmine.clock().install();
        playSequence();
        expect(view.getDOMElement("result").innerHTML).toBe("Watch out the sequence!");
        jasmine.clock().tick(model.getComputerQuestionLength() * 1000 + 1000 + 1001);
        expect(view.getDOMElement("result").innerHTML).toBe("Here you go!");
        jasmine.clock().uninstall();
    });
});

describe("This is nextLevel() test!", function() {

    describe("This is sub-test when level is below 20", function() {
        it("should change userCounter=0, userAnswerArray=[], DOM counter=model.getCOunter()", function() {
            nextLevel();
            expect(model.getUserCounter()).toBe(0);
            expect(model.userAnswer.toString()).toBe("");
            expect(view.getDOMElement("counter").innerHTML).toBe(model.getCounter().toString());
        });

        it("should call addComputerQuestion() method", function() {
            spyOn(model, "addComputerQuestion");
            nextLevel();
            expect(model.addComputerQuestion).toHaveBeenCalled();
        });

        it("should call playSequnce() method", function() {
            spyOn(window, "playSequence");
            nextLevel();
            expect(window.playSequence).toHaveBeenCalled();
        });
    });

    describe("This is sub-test when level is 20", function() {
        beforeEach(function() {
            model.setCounter(20);
        });

        it("should change the DOM to congratulation message", function() {
            nextLevel();
            expect(view.getDOMElement("counter").innerHTML).toBe("WON");
            expect(view.getDOMElement("result").innerHTML).toBe("Congrats! You Won! Starting from the beginning!");
        });

        it("should call restart() on 2900ms", function() {
            jasmine.clock().install();
            nextLevel();
            spyOn(model, "restart");
            expect(model.restart).not.toHaveBeenCalled();
            jasmine.clock().tick(2901);
            expect(model.restart).toHaveBeenCalled();
            jasmine.clock().uninstall();
        });

        it("should call playSequence() on 2900ms", function() {
            jasmine.clock().install();
            nextLevel();
            spyOn(window, "playSequence");
            expect(window.playSequence).not.toHaveBeenCalled();
            jasmine.clock().tick(2901);
            expect(window.playSequence).toHaveBeenCalled();
            jasmine.clock().uninstall();
        });

        it("should change the counter DOM element to 1", function() {
            jasmine.clock().install();
            nextLevel();
            expect(view.getDOMElement("counter").innerHTML).toBe("WON");
            jasmine.clock().tick(2901);
            expect(view.getDOMElement("counter").innerHTML).toBe("1");
            jasmine.clock().uninstall();
        });

    });
});