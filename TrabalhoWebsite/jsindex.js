function mostrarNav() {
    var x = document.getElementById("nav");
    if (x.style.display == "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
}

function abrirSubmenu() {
    var element5 = document.getElementsByClassName("submenu");
    if (element5[0].style.display == "") {

        var element2 = document.getElementsByClassName("l1");
        var element3 = document.getElementsByClassName("l2");
        var element4 = document.getElementsByClassName("l3");

        element5[0].style.display = "block";
        element2[0].classList.add("formatsub");
        element3[0].classList.add("formatsub");
        element4[0].classList.add("formatsub");
    } else {
        element5[0].style.display = "";
    }
}

function redimensionar() {
    if (window.matchMedia("(min-width:800px)").matches) {
        var x = document.getElementById("nav");
        var element5 = document.getElementsByClassName("submenu");
        if (x.style.display == "none") {
            x.style.display = "block";
            x.style.visibility = "visible";
        }
        if (x.style.display == "inline") {
            x.style.display = "block";
            x.style.visibility = "visible";
        }
        element5[0].style.display = "";

    }


}