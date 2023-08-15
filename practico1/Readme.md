# PRÁCTICO Nº1: CALCULADORA SIMPLE
El objetivo del proyecto es crear una calculadora que realice operaciones básicas (suma, resta, multiplicación y división) utilizando los conocimientos adquiridos en el curso (HTML, CSS y JavaScript) y sea util para el usuario.

## Funcionamiento
Es una calculadora bastante simple que cumple su cometido: realiza sumas(+), restas(-), multiplicación(*) y división(/). Es de facíl uso, ya que se la puede usar, tan solo ingresando a la dirección de la página web. Al ingresar podemos ver que el cursor se encuentra posisionado en el primer campo donde se puede observar: "Escribe un número", el segundo campo también dice lo mismo. Solo se pueden ingresar números ya que, es el tipo de valor seleccionado para el mismo.
Las operaciones se pueden seleccionar en el botón desplegable, cuando el cursor se posisiona sobre el mismo se convierte en una manito ya que use, un cursor pointer (este cursor también lo tienen los botones de igual y limpiar o AC).
Una vez ingresados los números y haber seleccionado la operación elegida obtenemos el resultado de la operación matemática presionando el botón "=". Los campos se pueden limpiar con el botón "AC".

### Manejo de errores
* El tipo de valores que se pueden ingresar solo son números, por ende no tuve que preocuparme por si ententaban ingresar letras. 
* En la división si intentan dividir por cero se muestra en el campo de resultado la leyenda "No se puede dividir por cero".
* Cuando el resultado sea demasiado grande o demasiado pequeño salta un alerta señalándolo, ya que existe un límite máximo y uno mínimo para el resultado que se muestre.

#### Casos de prueba
 * Suma 
 2.65 + 4 = 6.65 ✔  Coincide con el resultado esperado.

 * Resta 
 45 - 12.51 = 32.49 ✔ Coincide con el resultado esperado.
  
 * Multiplicación
 12 * 9 = 108 ✔ Coincide con el resultado esperado.
  
 * División
 125 / 5 =  25 ✔ Coincide con el esperado.
 77 / 0 = "No se puede dividir por cero" ✔ Coincide con lo esperado.

 * Operaciones con números demasiados grandes o pequeños
 9999999999999999 * 12 = "Error: el resultado es demasiado grande." ✔ Coincide con el resultado esperado.
 
 9 / 999999999999999 = "Error el resultado es demasiado pequeño." ✔ Coincide con el resultado esperado.


😊




