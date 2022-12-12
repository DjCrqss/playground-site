function draggable(letter){
    console.log(letter);
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    letter.onmousedown = mouseDown;

    function mouseDown(e){
        console.log("mousedown");
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        letter.style.transform = "scale(0.9)";
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        letter.style.top = (letter.offsetTop - pos2) + "px";
        letter.style.left = (letter.offsetLeft - pos1) + "px";
        letter.style.transform = "scale(1.25)";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        letter.style.transform = "scale(1)";
    }

}