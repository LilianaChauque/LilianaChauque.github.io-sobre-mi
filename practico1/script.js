let $optiones=document.getElementById("operacion");
let $resultado = document.getElementById("resultado");
let $valor1 = document.getElementById("valor1");
let $valor2 = document.getElementById("valor2");


function calcular(){
    let num1 = Number($valor1.value);
    let num2 = Number($valor2.value);
    let op = $optiones.value;
    let res;
   
// coloco las operaciones matemáticas.
    if(op === "+"){
        res = num1 + num2;
    }
    else if(op === "-"){
        res = num1 - num2;
    }
    else if(op === "*"){
        res = num1 * num2;
    }
    else{
        if(op === "/" && num2 !== 0){
        res = num1 / num2;
        }  
        else{
            res = ("No se puede dividir por cero");
        } 
    } 
    const resultadoMaximo = 999999999999999 // Límite máximo para el resultado.
    const resultadoMinimo = 0.00000000001// Límite mínimo para el resultado.
    
    if (Math.abs(res) > resultadoMaximo) {            
        alert('Error: El resultado es demasiado grande.');
        res= " "
    } 
      
    else if (Math.abs(res) < resultadoMinimo & res !==0){
        alert("Error: El resultado es demasiado pequeño.");
        res = " "; 
        
    }
           
    $resultado.value = res;
}

// Función para borrar los números ingresados y poder realizar otra operación.
function limpiarAC(){
    document.getElementById("resultado").value = "";
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = ""; 
}