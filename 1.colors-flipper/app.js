const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// variables
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


// event listeners
btn.addEventListener('click',changeBody)

// functions
function changeBody(){
    // nuemro aleatorio para elegir de los colores
    const randomNumber = getRandomNumber()
    console.log(randomNumber )
    //para obtener el body del dom y cambiar el color
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent  = colors[randomNumber]
}

function getRandomNumber(){
    return Math.floor(Math.random()*3)
}
