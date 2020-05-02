function menu() {
    document.getElementById("menu-popup").style.transform="translate(0%)";
    document.getElementById("screen-hider").style.display="block";
    document.getElementById("menu-btn2").style.display="block";
    document.getElementById("stick2").style.display="none";
    document.getElementById("stick1").style.top="50%";
    document.getElementById("stick1").style.transform="translate(-50%,-50%) rotate(45deg)";
    document.getElementById("stick3").style.top="50%";
    document.getElementById("stick3").style.transform="translate(-50%,-50%) rotate(-45deg)";
}

function menuClose() {
      document.getElementById("menu-popup").style.transform="translate(-100%)";
      document.getElementById("screen-hider").style.display="none";
      document.getElementById("menu-btn2").style.display="none";
      document.getElementById("stick1").style.top="2px";
      document.getElementById("stick1").style.transform="translate(-50%,-50%) rotate(0deg)";
      document.getElementById("stick3").style.top="23px";
      document.getElementById("stick3").style.transform="translate(-50%,-50%) rotate(0deg)";
      document.getElementById("stick2").style.display="block";
}
