function xportJSON(){
    document.getElementById("json").innerHTML = localStorage.getItem("calendar-events")
}
window.onload = xportJSON()
