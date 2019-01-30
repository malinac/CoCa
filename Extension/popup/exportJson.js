
function exportJSON(){


var doc = document.implementation.createDocument("", "", null);
eventList = JSON.parse(localStorage.getItem("calendar-events"))
for (var key in eventList) {
   
 if (eventList.hasOwnProperty(key)) {

	var ev = doc.createElement("event")
	ev.setAttribute("date", key)        
	for(i=0; i<=eventList[key].length-1;i++) 
		ev.setAttribute("description", eventList[key][i]);
    }
}


}
