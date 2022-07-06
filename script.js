const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');

document.onclick = function(e){
    if (e.target.id !== 'hamburger' && e.target.id !== 'nav-menu' ){
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
    }
}


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    

})


let text=document.getElementById('text');
window.addEventListener('scroll',function(){
    let value=window.scrollY;
   
    text.style.right = value * 4 + 'px';
    
})


function slides() { 
    var myIndex = 0;
    carousel();
    function carousel(){
        var i;
        var x= document.getElementsByClassName("myslides");
        for(i=0;i<x.length;i++) {
            x[i].style.display= "none";
        }
        myIndex++;
        if (myIndex > x.length){ myIndex=1}
        x[myIndex-1].style.display="block";
        setTimeout(carousel,2000);


    }

 }
 slides()