const btnHam = document.querySelector('#btnHamburger');
const bodt = document.querySelector('body');

const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


btnHam.addEventListener('click', ()=>{
    if(header.classList.contains('open')){
        bodt.classList.add('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(ele =>{
            ele.classList.add('fade-out');
            ele.classList.remove('fade-in');
        })
        
    }else{ // Open menu hamburguesa 
        bodt.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach((element)=>{
        element.classList.add('fade-in');
        element.classList.remove('fade-out');
        })
    }
})