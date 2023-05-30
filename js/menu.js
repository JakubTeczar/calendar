///menu hamburger
let menu = document.querySelector(".menu");
let hamburger = document.querySelector(".hamburger");
window.addEventListener('resize', function(){
    let WindowWidth = window.innerWidth;
    if(WindowWidth < 520 ){
        hamburger.style.display = "flex";
        menu.style.display = "none";
    }else{
        menu.classList.remove("active");
        menu.style.display = "flex";
        hamburger.style.display = "none";
        activeMenu =false;
    }

});
let activeMenu =false;
hamburger.addEventListener('click', function(){
    if(activeMenu == false){
        menu.style.display = "flex";
        activeMenu =true;
        hamburger.style = "transform: translateY(10px) translateX(50%) rotate(90deg) ";
        
    }else{
        menu.style.display = "none";
        activeMenu =false;
        hamburger.style = "transform: translateX(50%)";
    }
    
    menu.classList.toggle("active");
});



let WindowWidth = window.innerWidth;
if(WindowWidth < 520 ){
    hamburger.style.display = "flex";
    menu.style.display = "none";
}else{
    // menu.classList.remove("active");
    menu.style.display = "flex";
    hamburger.style.display = "none";
}