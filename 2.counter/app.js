// cuenta inicial
let count = 0;

// variables
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
	btn.addEventListener("click", btnClick);
});

function btnClick(e) {
	// con esto vamos a poder saber que cual es la subclase del boton que se hizo click

	const styles = e.currentTarget.classList;
	if (styles.contains("decrease")) {
		count--;
	} else if (styles.contains("increase")) {
		count++;
	}else{
        count = 0
    }

    if(count > 0){
        value.style.color = 'green'
    }

    if(count < 0){
        value.style.color = 'red'
    }

    if(count == 0){
        value.style.color = 'black'
    }
	value.textContent = count;
}
