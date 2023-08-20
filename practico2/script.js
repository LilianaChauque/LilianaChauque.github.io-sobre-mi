let $nombreInput = document.getElementById("nombre");

// Función que agrega el nombre del jugador.

function agregarNombre() {
    let nombre = $nombreInput.value;
    if (nombre === "") { //Valida que el campo no este vacio.
        alert("Por favor, escriba su nombre.");
    }
    else{  
    alert("Hola, " + nombre +"!!!");//Saludo personalizado para el jugador.
   
    }
}
