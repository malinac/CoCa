function getColor(){
    var select = document.getElementById("logo")
    select.value = localStorage.getItem("color");
    select.style.backgroundColor = select.value;
}

window.onload = getColor()