const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.nav__links')


menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('show')
})