describe("This is model constructor test", function() {
    var mmodel = new SimonModel();
    it("should be defined", function() {
        expect(mmodel).toBeDefined();
    });

    it("should have default values", function() {
        expect(mmodel.btnIdArray.toString()).toBe(["btn-green", "btn-red", "btn-yellow", "btn-blue"].toString());
        expect(mmodel.compQuestion.toString()).toBe([].toString());
        expect(mmodel.userAnswer.toString()).toBe([].toString());
        expect(mmodel.start).toBe(false);
        expect(mmodel.on_off).toBe(false);
        expect(mmodel.strict).toBe(false);
        expect(mmodel.counter).toBe(0);
        expect(mmodel.userCounter).toBe(0);
        expect(mmodel.correctAnswerExpression.toString()).toBe(["Wow Correct!", "Doing well!", "Awesome!", "Got it correct", "Well Played!", "You have great memory!", "I am impressed", "Brilliant!", "Sure you not cheating?", "A Class!"].toString());
        expect(mmodel.nextLevelExpression.toString()).toBe(["You are awesome!Next level.", "This level will be tough!", "Level Up!", "More confusions ahead", "You wont give up!Level Up!", "Try this level", "Difficulty increased!", "Now SIMON is gonna play hard with you!"].toString());
    });

    it("should have all functions defined", function() {
        expect(mmodel.getRandomInt).toBeDefined();
        expect(mmodel.getStrictStatus).toBeDefined();
        expect(mmodel.setStrictStatus).toBeDefined();
        expect(mmodel.getOn_OffStatus).toBeDefined();
        expect(mmodel.setOn_OffStatus).toBeDefined();
        expect(mmodel.getStartStatus).toBeDefined();
        expect(mmodel.setStartStatus).toBeDefined();
        expect(mmodel.getUserAnswerAtIndex).toBeDefined();
        expect(mmodel.getUserAnswerLength).toBeDefined();
        expect(mmodel.setUserAnswerToEmptyArray).toBeDefined();
        expect(mmodel.addUserAnswer).toBeDefined();
        expect(mmodel.getComputerQuestionAtIndex).toBeDefined();
        expect(mmodel.getComputerQuestionLength).toBeDefined();
        expect(mmodel.addComputerQuestion).toBeDefined();
        expect(mmodel.getBtnIdArrayIndexValue).toBeDefined();
        expect(mmodel.setUserCounter).toBeDefined();
        expect(mmodel.getUserCounter).toBeDefined();
        expect(mmodel.setCounter).toBeDefined();
        expect(mmodel.getCounter).toBeDefined();
        expect(mmodel.getRandomCorrectAnswerExpression).toBeDefined();
        expect(mmodel.getRandomNextLevelExpression).toBeDefined();
        expect(mmodel.restart).toBeDefined();
    });

    it("should have methods working properly", function() {
        expect(mmodel.getRandomInt(0, 4) > -1 && mmodel.getRandomInt(0, 4) < 4).toBeTruthy();

        expect(mmodel.getStrictStatus()).toBe(false);
        mmodel.setStrictStatus(true);
        expect(mmodel.getStrictStatus()).toBe(true);
        mmodel.setStrictStatus(false);
        expect(mmodel.getStrictStatus()).toBe(false);

        mmodel.setOn_OffStatus(true);
        expect(mmodel.getOn_OffStatus()).toBe(true);
        mmodel.setOn_OffStatus(false);
        expect(mmodel.getOn_OffStatus()).toBe(false);

        mmodel.setStartStatus(true);
        expect(mmodel.getStartStatus()).toBe(true);
        mmodel.setStartStatus(false);
        expect(mmodel.getStartStatus()).toBe(false);

        mmodel.userAnswer = ["btn-green"];
        expect(mmodel.getUserAnswerAtIndex(0)).toBe("btn-green");

        expect(mmodel.getUserAnswerLength()).toBe(1);

        mmodel.setUserAnswerToEmptyArray();
        expect(mmodel.userAnswer.toString()).toBe([].toString());

        mmodel.addUserAnswer("btn-green");
        expect(mmodel.getUserAnswerAtIndex(0)).toBe("btn-green");

        mmodel.addComputerQuestion();

        expect(mmodel.getComputerQuestionLength()).toBe(1);

        expect(mmodel.getComputerQuestionAtIndex(1)).toBe(undefined);

        expect(mmodel.getBtnIdArrayIndexValue(0)).toBe("btn-green");
        expect(mmodel.getBtnIdArrayIndexValue(1)).toBe("btn-red");
        expect(mmodel.getBtnIdArrayIndexValue(2)).toBe("btn-yellow");
        expect(mmodel.getBtnIdArrayIndexValue(3)).toBe("btn-blue");
        expect(mmodel.getBtnIdArrayIndexValue(4)).toBe(undefined);

        mmodel.setUserCounter(2);

        expect(mmodel.getUserCounter()).toBe(2);

        mmodel.setCounter(2);

        expect(mmodel.getCounter()).toBe(2);

        mmodel.restart();
        expect(mmodel.userAnswer.toString()).toBe([].toString());
        expect(mmodel.getComputerQuestionLength()).toBe(1);
        expect(mmodel.start).toBe(false);
        expect(mmodel.on_off).toBe(true);
        expect(mmodel.counter).toBe(1);
        expect(mmodel.userCounter).toBe(0);

    });
});