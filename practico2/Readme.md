# Piedra, Papel y Tijera

## PARTE 1: Estructura básica HTML y estilos CSS
 * `index.html` este es el archivo base para todo el proyecto.

 * `styles.css` archivo para dar estilos generales.
## PARTE 2: Obtención del nombre del jugador
 * `script.js` archivos para las acciones dinamicas de la app:

     * `agregarNombre()`: funcion para tomar el nombre del usuario. Esta vinculada a un evento de tipo _onclick_ en el input con _id="nombre"_. Se valida que el mismo no este vacio, también se realiza un saludo personalizado al jugador.

## PARTE 3: Selección de la opción del jugador y del oponente (PC) 
 * Cree una carpeta en  `index.html` llamada _imagenes_ donde se encuentran las imagenes utilizadas para identificar las opciones que tiene el jugador: _Piedra, Papel o Tijera_.
 * En `styles.css` le di estilo a esas imagenes.
 * Pude capturar la opción seleccionada por el jugador y también la opción aleatoria de la PC, todo esto en `script.js`.
 
## PARTE 4: Determinación del ganador y actualización del marcador
 *  En `index.html` Establecí las reglas del juego, con _p_ en un parrafo, tambien agregue un _div_ en el cual se encuentra el marcador del juego, donde se va sumando la cantidad de puntos que obtienen los jugadores (usuario y PC).
 * En `styles.css`le di estilo a lo que incorporamos en `index.html`.
 * En  `script.js` se determina el ganador de las partidas que se juegan y se muestra por pantalla quien la gano y que eligio la PC. Todo esto con las funciones que se añadieron y algunas modificaciones en otras.