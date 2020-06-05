var a=getElementsByClassName("left");
var b=a.childNodes[0].childNodes[0].childNodes


// window.onload=function aaactive() {
//     document.getElementById("defaultOpen").onmouseover();
// }

// function openCity(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }
b[0].className = b[0].className.replace(" active", "");
// document.getElementById(cityName).style.display = "block";
b.currentTarget.className += " active";
document.getElementById("defaultOpen").onclick();
