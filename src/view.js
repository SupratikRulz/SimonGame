var view = {
    getDOMElement: function(id) {
        return document.getElementById(id);
    }
};
view.getDOMElement("strict").addEventListener("click", function() {
    controller.elements.strict = view.getDOMElement("strict").checked;
});
view.getDOMElement("on-off").addEventListener("click", function() {
    var gamebox = view.getDOMElement('gamebox');
    if (gamebox.style.display === 'block') {
        gamebox.style.display = 'none';
        controller.elements.on_off = false;
        controller.setPlayButtonState("none");
        view.getDOMElement("result").innerHTML = "Turn game On to Start";
    } else {
        view.getDOMElement("sStart").play();
        gamebox.style.display = 'block';
        controller.elements.on_off = true;
        view.getDOMElement("counter").innerHTML = "20";
        view.getDOMElement("result").innerHTML = "Welcome! Press on PLAY button to start!";
        controller.setStateOfColourButtons(true);
        controller.setPlayButtonState("auto");
        setTimeout(controller.restart, 1000);
    }
});
view.getDOMElement("start").addEventListener("click", function() {
    controller.setPlayButtonState("none");
    if (controller.elements.on_off) {
        view.getDOMElement("result").innerHTML = "Booting Wait...";
        controller.restart();
        view.getDOMElement("counter").innerHTML = "...";
        controller.setStateOfColourButtons(true);
        setTimeout(function() {
            view.getDOMElement("counter").innerHTML = controller.elements.counter;
            controller.playSequence();
        }, 1000);
    }
});