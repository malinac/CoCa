function exportxCal() {
    var p1 = document.createElement("P");
    t = "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
    var node1 = document.createTextNode(t);
    p1.appendChild(node1)
    document.body.appendChild(p1);
    var p2 = document.createElement("P");
    t2 = "<icalendar xmlns=\"urn:ietf:params:xml:ns:icalendar-2.0\">";
    var node2 = document.createTextNode(t2);
    p2.appendChild(node2)
    document.body.appendChild(p2);

    eventList = JSON.parse(localStorage.getItem("calendar-events"))
    var pcal = document.createElement("P")
    var cal = document.createTextNode("<" + "Calendar" + ">");
    pcal.appendChild(cal);
    document.body.appendChild(pcal);
    for (var key in eventList) {
        var event = document.createTextNode("<" + "Event" + ">")
        var pevent = document.createElement("P");
        pevent.appendChild(event);
        document.body.appendChild(pevent);
        if (eventList.hasOwnProperty(key)) {
            var div = document.createElement("DIV");
            div.setAttribute("class", "div1");
            var date = document.createTextNode("<" + "Date" + ">" + key + "</Date>");
            var pdate = document.createElement("P");
            pdate.appendChild(date);
            div.appendChild(pdate);
            for (var i = 0; i <= eventList[key].length - 1; i++) {
                var d1 = document.createTextNode("<" + "Description" + "> " + eventList[key][i] + "</Description>");
                var pd1 = document.createElement("P");
                pd1.appendChild(d1);
                div.appendChild(pd1);

            }
            document.body.appendChild(div);
            var x = document.getElementsByClassName("div1");
            for ( var j = 0; j < x.length; j++) {
                x[j].style.textIndent = "50px";
            }

        }
        var event2 = document.createTextNode("</Event>");
        var pevent2 = document.createElement("P");
        pevent2.appendChild(event2);
        document.body.appendChild(pevent2);
    }
    var cal2 = document.createTextNode("</Calendar>");
    var pcal2 = document.createElement("P");
    pcal2.appendChild(cal2);
    document.body.appendChild(pcal2);
}

window.onload=exportxCal();
