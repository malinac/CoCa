function smallfntsize(){
    var elements = document.getElementsByClassName("current-day-events-list");
    var elements2 = document.getElementsByClassName("calendar-days li")
    for (var i = 0, length = elements2.lengthl; i<length; i++){
        elements2[i].style.fontSize="small"
    }
    for(var i = 0, length = elements.length; i < length; i++) {
            elements[i].style.fontSize = "small";
        }
        localStorage.setItem("font-size", "small");

}

function xlargefntsize(){
    var elements = document.getElementsByClassName("current-day-events-list ");
    for(var i = 0, length = elements.length; i < length; i++) {
            elements[i].style.fontSize = "xx-large";
        }
        localStorage.setItem("font-size", "xx-large");
}

function mediumfntsize() {
    var elements = document.getElementsByClassName("current-day-events-list");
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].style.fontSize = "medium";
    }
    localStorage.setItem("font-size", "medium");
}

function largefntsize() {
    var elements = document.getElementsByClassName("current-day-events-list");
    for(var i = 0, length = elements.length; i < length; i++) {
            elements[i].style.fontSize = "large";}
            localStorage.setItem("font-size", "large");
}

function getFontSize() {
    var elements = document.getElementsByClassName("current-day-events-list");
    for(var i = 0, length = elements.length; i < length; i++) {
        elements[i].value = localStorage.getItem("font-size")
        elements[i].style.fontSize = elements[i].value
    }
}
window.onload = getFontSize()