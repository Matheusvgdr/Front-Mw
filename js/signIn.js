
var scale = document.querySelector(".btn3")
var scaleDown = document.querySelector(".btn4")
var all = document.querySelector(".all")

scale.addEventListener('click', () => {
    all.style.transform= "scale(0.9)"
    all.style.borderRadius= "25px"

});

scaleDown.addEventListener('click', () => {
    all.style.transform= "scale(1)"
    all.style.borderRadius= "0px"

});
