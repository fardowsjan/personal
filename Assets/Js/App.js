const menu=document.getElementById('menu')
const close_btn=document.getElementById('close-btn').addEventListener('click' , ()=>{
    menu.classList.remove('active')
})
const toggle=document.getElementById('toggles')
toggle.addEventListener('click' , ()=>{
    menu.classList.add('active')
})
