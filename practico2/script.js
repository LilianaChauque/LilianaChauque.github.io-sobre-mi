let $nombreInput = document.getElementById("nombre");

// Función que agrega el nombre del jugador.

function agregarNombre() {
    let nombre = $nombreInput.value;
    if (nombre === "") {  //Valida que el campo no este vacio.
       alert("Por favor, escriba su nombre, para empezar a jugar.");
    }
    else{  
       alert("Hola, " + nombre +"!!!");//Saludo personalizado para el jugador.
       return;
    }
    
}
// declaramos las variables
    let $piedraButton = document.getElementById("piedra");
    let $papelButton = document.getElementById("papel");
    let $tijeraButton = document.getElementById("tijera");
    let jugadaUsuario;
    let jugadaCompu;
    
/* obtenemos la jugada del usuario cuando hacemos click en la imagen, 
a su vez llamamos a la jugada de la PC, invocando la función  obtenerJugadaComputadora() */

$piedraButton.addEventListener("click", () =>{
    jugadaUsuario = "piedra";
    console.log(jugadaUsuario); // Utilizo console.log para ver si funciona.
    obtenerJugadaComputadora();
    console.log(obtenerJugadaComputadora());
});

$papelButton.addEventListener("click", () =>{
    jugadaUsuario = "papel";
    console.log(jugadaUsuario);
    obtenerJugadaComputadora();
    console.log(obtenerJugadaComputadora());
});

$tijeraButton.addEventListener("click", () =>{
    jugadaUsuario = "tijera";
    console.log(jugadaUsuario);
    obtenerJugadaComputadora();
    console.log(obtenerJugadaComputadora());
});

 // Obtenemos la jugada de la computadora de manera aleatoria
 function obtenerJugadaComputadora() {
     let jugada = ["piedra", "papel", "tijera"]
     let jugadaCompu = (jugada[Math.floor(Math.random()*3)]);  
 
     return jugadaCompu;  
    
 }
 
 
 
