// header Scroll
let nav=documenet.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
// nav hide
let navBar=document.querySelector(".nav-link");
let navCollapse=document.querySelector(".navbar-collaspe.collaspe");
navBar.forEach(function (e){
    e.addEventListener("click",function(){
        navCollapse.classList.remove("show");

    })
})