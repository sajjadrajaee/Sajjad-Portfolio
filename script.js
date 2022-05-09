function ChangeMenu(){ 
    if (document.getElementById("menu-icon").src != "images/close.webp"){
        document.getElementById("menu-icon").src = "images/close.webp";
    } else {
        document.getElementById("menu-icon").src = "images/menu-icon.png";
    }
}