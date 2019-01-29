function bluetheme() {
    document.getElementById("ls").style.background = "#0087bd";
    document.getElementById("logo").style.color ="#0087bd";
    localStorage.setItem("color", "#0087bd");

}
function greentheme() {
    document.getElementById("ls").style.background = "#488615"
    document.getElementById("logo").style.color = "#488615";
    localStorage.setItem("color", "#488615")

}
function yellowtheme() {
    document.getElementById("ls").style.background = "#cd3700";
    document.getElementById("logo").style.color = "#cd3700";
    localStorage.setItem("color","#cd3700" )
}
function redtheme() {
    document.getElementById("ls").style.background = "#ec364f";
    document.getElementById("logo").style.color = "#ec364f";
    localStorage.setItem("color", "#ec364f")
}
function getColor(){
    var select = document.getElementById("ls")
    select.value = localStorage.getItem("color");
    select.style.backgroundColor = select.value;
    var select2 = document.getElementById("logo");
    select2.value = localStorage.getItem("color");
    select2.style.color = select2.value;
}

window.onload = getColor()