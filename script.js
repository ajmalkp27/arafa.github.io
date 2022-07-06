const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

document.onclick = function(e){
    if (e.target.id !== 'hamburger' && e.target.id !== 'nav-menu'){
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}







hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

