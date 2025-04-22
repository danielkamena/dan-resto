const menu = document.getElementById("menu");
const btn2 = document.getElementById("btn2");



function interrupteur(){
    btn2.classList.toggle("disparution");
}

menu.addEventListener('click', interrupteur);