let $nombreInput = document.getElementById("nombre");

// Función que agrega el nombre del jugador.

function agregarNombre() {
    let nombre = $nombreInput.value;
    if (nombre === "") {  //Valida que el campo no este vacio.
       alert("Por favor, escriba su nombre, para empezar a jugar.");
    }
    else{  
      alert("Hola, " + nombre +"!!!");//Saludo personalizado para el jugador.
     
       
    }
       
}
// declaramos las variables
    let $piedraButton = document.getElementById("piedra");
    let $papelButton = document.getElementById("papel");    
    let $tijeraButton = document.getElementById("tijera");
    let msjganador = document.getElementById("rdoJugada");
    let marcadorPuntoUsuario = document.getElementById("puntoUsuario");
    let marcadorPuntoCompu = document.getElementById("puntoCompu");
    let msjWinJuego = document.getElementById("rdoJuego");
    let puntoUsuario = 0;
    let puntoCompu = 0;
    let puntosMaxJugador = 3;
    let jugadaUsuario;
    let jugadaCompu;
    let juegoTerminado = false; //variable para corroborar si el juego termino o no.
           

/* obtenemos la jugada del usuario cuando hacemos click en la imagen, 
a su vez llamamos a la jugada de la PC, invocando la función  obtenerJugadaComputadora()*/


$piedraButton.addEventListener("click",  () =>{   
    jugadaUsuario = "piedra";
    console.log(jugadaUsuario); // Utilizo console.log para ver si funciona.
    obtenerJugadaComputadora();
      
});

$papelButton.addEventListener("click", ()=>{    
    jugadaUsuario = "papel";
    console.log(jugadaUsuario);
    obtenerJugadaComputadora();  

});

$tijeraButton.addEventListener("click", ()=>{
    jugadaUsuario = "tijera";
    console.log(jugadaUsuario);
    obtenerJugadaComputadora();
   
});


 // Obtenemos la jugada de la computadora de manera aleatoria
 function obtenerJugadaComputadora() {
     let jugada = ["piedra", "papel", "tijera"]
     let nRandon = ([Math.floor(Math.random()*3)]); 
     jugadaCompu = jugada[nRandon];
     console.log ("jugada de la computadora " + jugadaCompu);
     determinarGanador();
    
 }
 
 function determinarGanador(){
//Esta parte de la función para saber quien gana la partida, mostrando el rdo con innerHTML.
    if (jugadaUsuario === jugadaCompu){
        msjganador.innerHTML= "Uh, empate! 😐  ambos eligieron " + jugadaUsuario;  
    }
     else if ((jugadaUsuario === "piedra" && jugadaCompu === "tijera") ||
        (jugadaUsuario === "papel" && jugadaCompu === "piedra") || 
        (jugadaUsuario === "tijera" && jugadaCompu === "papel") ){
         msjganador.innerHTML="Ganaste!!! 😆 la PC eligio " + jugadaCompu;
       ganaUsuario();   
    }
     else{
        msjganador.innerHTML="Gano la PC... 😠 eligio " + jugadaCompu;
        ganaCompu();
     }
     
     // para determinar el ganador del juego
     if ( puntoUsuario === puntosMaxJugador ){        
        msjganador.innerHTML= "GANASTE EL JUEGO!!! 😃 😆";
        juegoTerminado === true;
        msjWinJuego.innerHTML= "El juego ha terminado. Reinicie para jugar de nuevo.";
        
     }
     else if( puntoCompu === puntosMaxJugador) {        
        msjganador.innerHTML= "PERDISTE EL JUEGO... 😠 😠 😠 ";
        juegoTerminado === true;
        msjWinJuego.innerHTML= "El juego ha terminado. Reinicie para jugar de nuevo.";
       
     }

    }
 // defino función para el marcador, así se puede observar por monitor cuantos puntos tiene cada uno.
function ganaCompu(){       
    puntoCompu++;       
    marcadorPuntoCompu.innerHTML = puntoCompu;
 }

        
function ganaUsuario(){   
    puntoUsuario++; 
    marcadorPuntoUsuario.innerHTML = puntoUsuario;   
}

function reiniciarJuego(){ // Retablecemos las variables a su valor original
    nombre = ""; 
    $nombreInput.value = "";
    $nombreInput.focus();// restablesco el enfoque en el campo de entrada de nombre
    puntoCompu = 0;
    puntoUsuario = 0;
    juegoTerminado = false;
    msjganador.innerHTML = "";
    msjWinJuego.innerHTML = "";
    marcadorPuntoCompu.innerHTML = "0";
    marcadorPuntoUsuario.innerHTML = "0";
    
}   