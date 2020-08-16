const brg = document.querySelector('.burger');
const menu = document.querySelector('nav ul')
brg.addEventListener('click', function () {
    brg.classList.toggle('active')
    menu.classList.toggle('active')
});

const menuSections = [...document.querySelectorAll('li')]
const sections = [...document.querySelectorAll('section')]
const cover = document.getElementById('cover')


menuSections.forEach((menuSection, index) => {
    menuSection.addEventListener('click', function () {
        brg.classList.toggle('active')
        menu.classList.toggle('active')
        window.scrollTo({
            top: sections[index].offsetTop - cover.offsetHeight,
            behavior: 'smooth'
        })
    })
});

const uslugi = [...document.querySelectorAll('.usluga h1')]
const triangles = [...document.querySelectorAll('.usluga h1 i')]
const uslugiDescription = [...document.querySelectorAll('.usluga p')]

uslugi.forEach((usluga, index) => {
    usluga.addEventListener('click', function () {
        triangles[index].classList.toggle('active')
        uslugiDescription[index].classList.toggle('active')
    })
});





