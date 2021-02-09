const btnHamburger = document.getElementById('btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const elmsHasFade = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function(){

    if (header.classList.contains('open')) { // close hamburger menu 
        body.classList.remove('noscroll')
        header.classList.remove('open')
        elmsHasFade.forEach(function(e){
            e.classList.remove('fade-in')
            e.classList.add('fade-out')
        })
    } else { // open hamburger menu
        body.classList.add('noscroll')
        header.classList.add('open')
        elmsHasFade.forEach(function(e) {
            e.classList.remove('fade-out')
            e.classList.add('fade-in')
        })
    }
})
