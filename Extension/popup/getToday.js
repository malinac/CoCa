
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


window.onload =getToday()


