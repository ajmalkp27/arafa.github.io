const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');

document.onclick = function(e){
    if (e.target.id !== 'hamburger' ){
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
    }
}







hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    

})

