let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}


function myfunction(){
  var x=document.getElementById("pas");
  if(x.type ==="password"){
    x.type="text";
  }
  else{
    x.type="password";
  }
}

function validate() {  
  var y = document.getElementById("pas").value; 
  
  //check empty password field  
  if(y == "") {  
     document.getElementById("message1").innerHTML = "**Fill the password please!";  
     return;  
  }  
   sp=0;
  for(i=0;i<y.length;i++){
     ch = y.charAt(i);
    if(ch ==' '){
    sp=1;
    }
  }
    if(sp==1){
      document.getElementById("message1").innerHTML = "**please enter you password without spaces";  
     return false;  

    }
  
   
   
  if(y.length = 8 && y.match(/[a-z]/g) && y.match(/^[A-Z]/g) && y.match(/[0-9]/g) && 
  y.match(/[^a-zA-Z\d]/g))
  { 
   

    alert("you have successfully signed up!!"); 
      exit;
  } 
  else{document.getElementById("message1").innerHTML = "**Password length must be only 8 characters,contain at least one digit, special character,start with capital letter ";}  
return false; 
} 


 function validnum(){
   var c= document.getElementById("number").value;
   if(c.length != 11){
    alert( "**please enter an valid phone number");  
     return false;
   }
  }




  
  

window.onload = fadeOut;