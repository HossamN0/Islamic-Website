let xnav = document.getElementById("xnav")
xnav.addEventListener("click",checkx)

function checkx(){
  if (xnav.classList.contains("fa-x")){
    xnav.classList.remove("fa-x")
    xnav.classList.add("fa-bars-staggered")
  }else{
    xnav.classList.add("fa-bars-staggered")
    xnav.classList.add("fa-x")
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let nav = document.getElementById("bg-nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 1000) {
      nav.style.opacity = "0";
      nav.style.pointerEvents = "none";
    } else {
      nav.style.opacity = "1";
      nav.style.pointerEvents = "auto";
    }
  });
});

// صلي علي النبي
let inputnumbered = document.getElementById("inputnumbered");
let btnnumbered = document.getElementById("btnnumbered");
let numbered = 0;

btnnumbered.addEventListener("click", function () {
  numbered += 1;
  inputnumbered.value = numbered;
});


let wherego = document.getElementById("wherego")
let selectgo = document.getElementById("selectgo")


function go(){
  if (selectgo.value == "الشيخ مشاري العفاسي"){
    window.location.assign("./pages/meshary.html")
  }else if (selectgo.value == "الشيخ ياسر الدوسري"){
    window.location.assign("./pages/yasser.html")
  }else if (selectgo.value == "الشيخ فارس عباد"){
    window.location.assign("./pages/fares.html")
  }
}
wherego.addEventListener("click", go);

