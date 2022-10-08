var xr = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

xr.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
    
})



