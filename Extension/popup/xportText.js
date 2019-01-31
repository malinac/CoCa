function exportText() {
    eventList = JSON.parse(localStorage.getItem("calendar-events"));
    for (var key in eventList) {
        var t = "";
        if (eventList.hasOwnProperty(key)) {
            t = t + key + ": ";
            var ev = document.createElement("P");
            for (i = 0; i <= eventList[key].length - 1; i++)
                t = t + eventList[key][i] +", ";
            }
            var text = document.createTextNode(t);
            ev.appendChild(text);
            document.body.appendChild(ev);
            t = ""
        }
}


window.onload=exportText()