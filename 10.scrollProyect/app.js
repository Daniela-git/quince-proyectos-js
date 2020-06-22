// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", showLinks);

function showLinks() {
	// esta es recomendada para contenido estatico
	// linksContainer.classList.toggle('show-links')

	const containerHeight = linksContainer.getBoundingClientRect().height; // sale height en 0 se necesita es el hijo para el height de los links
	const linksHeight = links.getBoundingClientRect().height;

	// con esto la altura del contenedor padre será dinamica y en caso de que agreguen más links el tamaño cambiará
	//esto es inline por tanto hay que tener cuidado con el resto del css
	if (containerHeight === 0) {
		linksContainer.style.height = `${linksHeight}px`;
	} else {
		linksContainer.style.height = 0;
	}
}

// ********** fixed navbar ************
const navbar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", fixNavbar);

function fixNavbar() {
	const scrollHeight = window.pageYOffset;
	const navHeight = navbar.getBoundingClientRect().height;
	if (scrollHeight > navHeight) {
		navbar.classList.add("fixed-nav");
	} else {
		navbar.classList.remove("fixed-nav");
	}

	//mostrar el boton para volver al home

	if (scrollHeight > 500) {
		topLink.classList.add("show-link");
	} else {
		topLink.classList.remove("show-link");
	}
}

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		// navigate to specific spot
		const id = e.currentTarget.getAttribute("href").slice(1);
		const element = document.getElementById(id);
		// calcular el alto
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav')

        let position = element.offsetTop - navHeight;
        
        if (!fixedNav) {
            position = position - navHeight
        }
        if (navHeight > 82) {
            position = position + containerHeight
        }
		window.scrollTo({
			left: 0,
			top: position,
		});
		// para cerrar el navbar en las pantallas pequeñas
		linksContainer.style.height = 0;
	});
});
