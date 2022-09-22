//MODAL EFFECT
const openModalButton = document.querySelector('.open-modal');
const closeModalButton = document.querySelector('.close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle('hide'));
}

[openModalButton, closeModalButton, fade].forEach((e)=>(
    e.addEventListener("click", () => toggleModal())
))

//DARK MODE
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),

    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

modeSwitch.addEventListener("click", () => {

    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        localStorage.setItem("theme", "light");
       
      } else {
        body.classList.add('dark');
        localStorage.setItem("theme", "dark");
       
      }

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});

//LOCAL STORAGE
if (localStorage.getItem("theme") === "dark") {
    body.classList.add('dark');
  }


let editUser = document.getElementById("edit");
let mod = document.querySelector(".modification");

editUser.addEventListener('click', () => {
     mod.style.visibility = 'visible';
});






