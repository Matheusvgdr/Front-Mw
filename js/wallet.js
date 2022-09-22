// HELP
function log(message){
    console.log('>' + message);

}

// App
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {

    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)

})

function dragstart(){
    // log('CARD: Start dragging')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
    this.classList.add('is-dragging');
}

function drag(){
    // log('CARD: Is dragging')
}

function dragend(){
    // log('CARD: Stop drag')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
    this.classList.remove('is-dragging');

}

//PLACE WHERE WE'LL DROP CARDS

dropzones.forEach(dropzone => {

    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)

})

function dragenter(){
    // log('DROPZONE: Enter in zone')
}

function dragover(){
    // log('DROPZONE: Over')   
    this.classList.add('over') 

    // get dragging card

    const cardBeingDragged = document.querySelector('.is-dragging');

    this.appendChild(cardBeingDragged);
}

function dragleave(){
    // log('DROPZONE: Leave the done')  
    this.classList.remove('over') 

}

function drop(){
    // log('DROPZONE: dropped')  
    this.classList.remove('over')   
}

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

if (localStorage.getItem("theme") === "dark") {
    body.classList.add('dark');
  }


let editUser = document.getElementById("edit");
let mod = document.querySelector(".modification");

editUser.addEventListener('click', () => {
     mod.style.visibility = 'visible';
});

