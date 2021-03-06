
function getToday() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if(mm<10){
        mm = '0' + mm;
    }
    if (dd < 10) {
        dd = '0' + dd;
    }

    var today = yyyy + '-' + mm + '-' + dd;
    document.getElementById('today').innerHTML = today;
    t = today.toString();
    eventList = JSON.parse(localStorage.getItem("calendar-events"));
    if(eventList.hasOwnProperty(t)){
        for(i=0; i<=eventList[t].length-1; i++){ 
            var node = document.createElement("LI");
            var textnode = document.createTextNode(eventList[t][i]);
            node.appendChild(textnode);
            document.getElementById("curr-ev").appendChild(node);
        }
    }
    else {
        var node1 = document.createElement("LI");
        var textnode2 = document.createTextNode("Nothing today");
        node1.appendChild(textnode2);
        document.getElementById("curr-ev").appendChild(node1);
    }
}




window.onload = getToday()


