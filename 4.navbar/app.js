// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click',addClass)

function addClass(){
    // si tiene la clase la quita, y si no la tiene la pone
    links.classList.toggle('show-links')
}