
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
    return today
    console.log(typeof(today))
}

function getFormattedDate(date) {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

function getTodaysEvents(){
    today = getToday()
    todayFormatted = getFormattedDate(today);
    eventList = JSON.parse(localStorage.getItem("calendar-events"), (key, value)=>{
        var node = document.createElement("LI");                 // Create a <li> node
    
window.onload =getToday()
window.onload=getTodaysEvents()

