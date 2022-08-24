const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');

const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
document.onclick = function(e){
    if (e.target.id !== 'toggle' && e.target.id !== 'toggle'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}


toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

function slidesi() { 
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
 slidesi()


 function slidesp() { 
    var myIndex = 0;
    carousel();
    function carousel(){
        var i;
        var x= document.getElementsByClassName("pr-slides");
        for(i=0;i<x.length;i++) {
            x[i].style.display= "none";
        }
        myIndex++;
        if (myIndex > x.length){ myIndex=1}
        x[myIndex-1].style.display="block";

        setTimeout(carousel,2000);


    }

 }
 slidesp()

 document.getElementById("myForm").reset();