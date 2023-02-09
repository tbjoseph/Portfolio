function toggleCSS() {
    var styleLink = document.getElementById("mainStyleSheet");
    if (styleLink.href.match("index.css")) {
       styleLink.href = "style.css";
       localStorage.setItem("cssFile", "style.css");
    } else {
       styleLink.href = "index.css";
       localStorage.setItem("cssFile", "index.css");
    }
 }
 
 window.onload = function() {
    var storedCSS = localStorage.getItem("cssFile");
    if (storedCSS) {
       var styleLink = document.getElementById("mainStyleSheet");
       styleLink.href = storedCSS;
    }
 };
 