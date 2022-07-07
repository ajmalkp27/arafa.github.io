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

 function sendEmail(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "ajkp008@gmail.com",
            Password : "Ajmalkp@2432",
            To : 'ajkp008@gmail.com',
            From : document.getElementById("email").value,
            Subject : "New Contact customer",
            Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                +"<br> Subject: " + document.getElementById("subject").value
                + "<br> Message: " + document.getElementById("message").value
            
        }).then(
        message => alert("Message Send Successfully")
        );
 }