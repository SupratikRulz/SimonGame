describe("This is view test", function() {
    it("should be defined", function() {
        expect(view.getDOMElement("btn-green")).toBeDefined();
    });

    it("should return the DOM element if valid DOM id is passed", function() {
        expect(view.getDOMElement("btn-green").toString()).toBe("[object HTMLButtonElement]");
    });

    it("should return undefined if invalid DOM id is passed", function() {
        expect(view.getDOMElement("invalid")).toBe(null);
    });

});

describe("This is buttonClick() test", function() {
    it("should play sound the particular button", function() {
        expect(buttonClick("btn-green")).toBe(true);
        expect(buttonClick("btn-red")).toBe(true);
        expect(buttonClick("btn-yellow")).toBe(true);
        expect(buttonClick("btn-blue")).toBe(true);
    });

    it("should execute flashParticularButton() method", function() {
        spyOn(window, "flashParticularButton");
        buttonClick("btn-green");
        expect(window.flashParticularButton).toHaveBeenCalled();
    });

    it("should have called model.addUserAnswer() method", function() {
        spyOn(model, "addUserAnswer");
        buttonClick("btn-green");
        expect(model.addUserAnswer).toHaveBeenCalled();
    });

    it("should goto next level if model.getUserAnswerLength() === model.getComputerQuestionLength()", function() {
        model.userAnswer = [];
        model.compQuestion = ["btn-green"];
        jasmine.clock().install();
        spyOn(window, "nextLevel");
        buttonClick("btn-green");
        expect(window.nextLevel).not.toHaveBeenCalled();
        jasmine.clock().tick(1001);
        expect(window.nextLevel).toHaveBeenCalled();
        jasmine.clock().uninstall();
    });

    it("should call setTimeout()'s when it's in strict mode and wrong button is pressed", function() {
        model.userAnswer = [];
        model.compQuestion = ["btn-green", "btn-green"];
        model.counter = 2;
        model.userCounter = 0;
        model.strict = true;
        jasmine.clock().install();
        spyOn(model, "restart");
        buttonClick("btn-blue");
        expect(model.restart).not.toHaveBeenCalled();
        jasmine.clock().tick(502);
        expect(model.restart).toHaveBeenCalled();
        jasmine.clock().uninstall();
    });
});

describe("This is toggleStrict() test", function() {
    it("should have same strict staus as in DOM", function() {
        toggleStrict();
        expect(view.getDOMElement("strict").checked).toBe(model.getStrictStatus());
    });
});

describe("This is power/game on-off button test!", function() {
    it("should change the value of on-off", function() {
        var on_offStatus = model.getOn_OffStatus();
        toggleOnOff();
        expect(model.getOn_OffStatus()).toBe(!on_offStatus);
        toggleOnOff();
        expect(model.getOn_OffStatus()).toBe(on_offStatus);
        //expect(toggleOnOff()).toBe(undefined);
    });
});


describe("This is gameStart() test", function() {
    it("should start the game from beginning", function() {
        model.setOn_OffStatus(true);
        jasmine.clock().install();
        gameStart();
        jasmine.clock().tick(1001);
        expect(gameStart()).toBe("executed");
        jasmine.clock().uninstall();
    });
    it("should not start the game", function() {
        model.setOn_OffStatus(false);
        jasmine.clock().install();
        gameStart();
        jasmine.clock().tick(1001);
        expect(gameStart()).toBe("not executed!");
        jasmine.clock().uninstall();
    });
});


describe("This is greenClick() test", function() {
    it("should click the green button", function() {
        expect(greenClick()).toBe(true);
    });
});
describe("This is redClick() test", function() {
    it("should click the red button", function() {
        expect(redClick()).toBe(true);
    });
});
describe("This is yellowClick() test", function() {
    it("should click the yellow button", function() {
        expect(yellowClick()).toBe(true);
    });
});
describe("This is blueClick() test", function() {
    it("should click the blue button", function() {
        expect(blueClick()).toBe(true);
    });
});
describe("This is initEventListeners() test!", function() {
    it("should return undefined", function() {
        expect(initEventListeners()).toBe(undefined);
    });
});