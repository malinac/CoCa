
function getToday() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    var today = dd + '/' + mm + '/' + yyyy;
    document.getElementById('today').innerHTML = today;
    t = today.toString();
    eventList = JSON.parse(localStorage.getItem("calendar-events"))
    if(eventList[t].length>0){
        for(i=0; i<=eventList[t].length-1; i++){
            var node = document.createElement("LI");
            var textnode = document.createTextNode(eventList[t][i]);
            node.appendChild(textnode);
            document.getElementById("curr-ev").appendChild(node);
        }
    }
    else {
        var node = document.createElement("LI");                 
        var textnode = document.createTextNode("Nothing today");
        node.appendChild(textnode);
        document.getElementById("curr-ev").appendChild(node);
    }
}




window.onload =getToday()


