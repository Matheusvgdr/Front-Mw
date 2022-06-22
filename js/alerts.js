 document.getElementById("enter").onclick = function () {
     Swal.fire({
         icon: 'success',
         title: 'Login correct',
         showConfirmButton: false,
         timer: 2000
     })
 };

let circle = document.querySelector(".circle");
let a = document.querySelector(".wallet")
let signUp = document.getElementById('link_signUp');
let signIn = document.getElementById('link_signIn');

signUp.addEventListener('click', () => {
     circle.style.position = 'absolute';
     circle.style.left = "-27rem" ;
     circle.style.transition = "2s";

    a.style.position = 'absolute';
    a.style.left = "52.5%";
    a.style.transition = "2s";
});

signIn.addEventListener('click', () => {
    circle.style.position = 'absolute';
    circle.style.left = "40rem" ;
    circle.style.transition = "2s";

   a.style.position = 'absolute';
   a.style.left = "10rem";
   a.style.transition = "2s";
});


// setTimeout(document.getElementById("enter").onclick = function() {
//     window.location.href = "../pages/home.html";
// }, 2000);




