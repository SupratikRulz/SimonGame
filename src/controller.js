function buttonClick(btn) {
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
            break;;
    }
    controller.flashParticularButton(btn);
    controller.elements.userAnswer.push(btn);
    if (controller.elements.compQuestion[controller.elements.userCounter] === controller.elements.userAnswer[controller.elements.userCounter]) {
        controller.elements.userCounter++;
        view.getDOMElement("result").innerHTML = controller.getCorrectAnswerExpression();
        if (controller.elements.userAnswer.length === controller.elements.compQuestion.length) {
            view.getDOMElement("result").innerHTML = controller.getNextLevelExpression();
            controller.setStateOfColourButtons(true);
            setTimeout(function() {
                controller.nextLevel();
            }, 1000);
        }
    } else {
        controller.setStateOfColourButtons(true);
        view.getDOMElement("sWrong").play();
        if (controller.elements.strict) {
            view.getDOMElement("result").innerHTML = "Opps! Start from the beginning!";
            setTimeout(controller.restart, 500);
            setTimeout(function() {
                view.getDOMElement("counter").innerHTML = controller.elements.counter;
                view.getDOMElement("strict").checked = true;
                controller.elements.strict = true;
                controller.playSequence();
            }, 501);
        } else {
            controller.elements.userAnswer = [];
            controller.elements.userCounter = 0;
            view.getDOMElement("result").innerHTML = "Wrong! Watch Closely";
            controller.setStateOfPowerButton("none");
            setTimeout(controller.playSequence, 500);
        }
    }
}