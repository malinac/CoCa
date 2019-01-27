function smallfntsize(){
    var elements = document.getElementsByClassName("current-day-events-list");
    var elements2 = document.getElementsByClassName("calendar-days li")
    for (var i = 0, length = elements2.lengthl; i<length; i++){
        elements2[i].style.fontSize="small"
    }
    for(var i = 0, length = elements.length; i < length; i++) {
            elements[i].style.fontSize = "small";
        }

}

function xlargefntsize(){
    var elements = document.getElementsByClassName("current-day-events-list ");
    for(var i = 0, length = elements.length; i < length; i++) {
            elements[i].style.fontSize = "xx-large";
        }
}

function mediumfntsize() {
    var elements = document.getElementsByClassName("current-day-events-list");
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].style.fontSize = "medium";
    }
}

function largefntsize() {
    var elements = document.getElementsByClassName("current-day-events-list");
    for(var i = 0, length = elements.length; i < length; i++) {
            elements[i].style.fontSize = "large";
        }
}