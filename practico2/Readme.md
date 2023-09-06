# Piedra, Papel y Tijera
En realidad es un juego simple y por todos conocido. Tenemos tres opciones para elegir: PIEDRA, PAPEL y TIJERA, piedra le gana a tijera, tijera le gana a papel y papel le gana a piedra.
El usuario debe poner su nombre para empezar a jugar. Gana el mejor de 5 jugadas, los empates no se cuentan por tanto, el que gana tres jugadas es el que gana el juego. al ganar aparece un mensaje que le da la opción de seguir jugando si lo desea, presionando el botón Reiniciar Juego.

## Estructura básica HTML y estilos CSS
 * `index.html` este es el archivo base para todo el proyecto.

 * `styles.css` archivo para dar estilos generales.
## Obtención del nombre del jugador
 * `script.js` archivos para las acciones dinamicas de la app:

     * `agregarNombre()`: funcion para tomar el nombre del usuario. Esta vinculada a un evento de tipo _onclick_ en el input con _id="nombre"_. Se valida que el mismo no este vacio, también se realiza un saludo personalizado al jugador.

## Selección de la opción del jugador y del oponente (PC) 
 * Cree una carpeta en  `index.html` llamada _imagenes_ donde se encuentran las imagenes utilizadas para identificar las opciones que tiene el jugador: _Piedra, Papel o Tijera_.
 * En `styles.css` le di estilo a esas imagenes.
 * Pude capturar la opción seleccionada por el jugador y también la opción aleatoria de la PC, todo esto en `script.js`.
 
## Determinación del ganador y actualización del marcador
 *  En `index.html` Establecí las reglas del juego, con _p_ en un parrafo, tambien agregue un _div_ en el cual se encuentra el marcador del juego, donde se va sumando la cantidad de puntos que obtienen los jugadores (usuario y PC).
 * En `styles.css`le di estilo a lo que incorporamos en `index.html`.
 * En  `script.js` se determina el ganador de las partidas que se juegan y se muestra por pantalla quien la gano y que eligio la PC. Todo esto con las funciones que se añadieron y algunas modificaciones en otras.

## Control del juego y anunciar al ganador y reiniciar el juego.
  * En`index.html` agregue al _p id = " a jugar"_ agregamos que el ganador del juego sera el que obtenga tres victorias de cinco intentos. En _p id=rdoJugada_ se anuncia al ganador de la partida; como así también al ganador del juego, una vez obtenido los tres puntos necesarios. Se agrego una _class_ que contiene un _p id="rdoJuego_ que dice _"El juego ha terminado. Reinicie para jugar de nuevo."_ .
   * En `script.js` el la _funtion determinarGanador()_ agrego las condiciones para que el ganador del juego y el pedido de reinicio del juego, para continuar jugando. Que se puede hacer con _onclick_ que llama a la _función reinicioJuego()_ que restablece los marcadores.
   * En `styles.css` le dí estilo a _id=rdoJuego y a id=reinicioJuego_.

## Mejoras, personalización y demás.
  En `styles.css` incorpore: 
   * animación para que el fondo de pantalla cambie de color de manera infinita  con _ @keyframes cambio-color_
   * animación de desplazamiento con _@keyframes slidein_
   *  _hover_ para aplicar estilos cuando el jugador pasa el mouse sobre "Enviar" y el _active_ para cuando haga clic en el.                    - 
