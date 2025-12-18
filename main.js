var typed = new Typed(".text", {
    strings:["Video editor", "Youtuber" , "Freelancer" ],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop:true
});
var typed = new Typed(".video", {
    strings:["Long form Videos", "Short-form-Videos" , "Graphic designing", "thumbnail designing" ],
    typeSpeed: 70,
    backSpeed: 100,
    backdelay: 1000,
    loop:true
});
const form = document.querySelector('form')

function sendEmail(){
   Email.Send({
    Host: "smtp.Hostemail.com",
    username:"beena4606@gmail.com",
    password:"213E3AE02CDDEC44D47A394B4A9697554942",
to:"",
from:"beena4606@gmail.com",
subject:"this is the subject",
body:"and this is the subject"
   }).then(
    message =>  alert(message)
   );
}
form.addEventListener("Submit" ,  (e) => {
    e.preventDefault();

    sendEmail();
});