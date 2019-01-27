function smalldimension() {
    document.getElementById("calendar").style.transform = "scale(0.6)"
    localStorage.setItem("dimension","scale(0.6)" )
    
}

function mediumdimension() {
    document.getElementById("calendar").style.transform = "scale(0.75)"
    localStorage.setItem("dimension","scale(0.75)" )
}

function largedimension() {
    document.getElementById("calendar").style.transform = "scale(1.1)"
    localStorage.setItem("dimension","scale(1.1)" )
}
function xlargedimension() {
    document.getElementById("calendar").style.transform = "scale(1.2)"
    localStorage.setItem("dimension","scale(1.2)" )
}

function getDimension(){
    var select = document.getElementById("calendar")
    select.value = localStorage.getItem("dimension");
    select.style.transform = select.value;
}

window.onload = getDimension()