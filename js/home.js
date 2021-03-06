const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),

    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});

document.getElementById("registerW").onclick = function (){
    Swal.fire({
        icon: 'success',
        title: 'Login correct',
        showConfirmButton: false,
        timer: 2000
    })
};

let editUser = document.getElementById("edit");
let mod = document.querySelector(".modification");

editUser.addEventListener('click', () => {
     mod.style.visibility = 'visible';
});

