// Fundamentos Básicos II
// 1.- Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
console.log("Ejercicio 1:")
console.log("-----------Inicio----------")
{
var arr = [-1,3,5,-5];
var big = "big"
function ejercicio1(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>=0){
            arr[i]=big;
        }
    }
    return arr;
}
console.log(ejercicio1(arr));
}
console.log("-----------Fin----------")


// 2.- Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
console.log("Ejercicio 2:")
console.log("-----------Inicio----------");
{
    var arr = [-1,11,5,-10];
    mayor = arr[0];
    menor = arr[0];
    function ejercicio2(){
            for(var i = 1; i<arr.length; i++){
                if(mayor<arr[i]){
                    mayor = arr[i];
                }
                else{
                    menor = arr[i]
                }                
            }
            console.log("Menor del arreglo en función es:" +menor);
            return mayor;
    }
    mayor = ejercicio2(arr);
    console.log("El Mayor de arreglo retornado es: "+mayor)
}
console.log("-----------Fin----------");

// 3.- Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
console.log("Ejercicio 3:")
console.log("-----------Inicio----------");
{
var arr = [3,6,7,99];   
var pen = arr[arr.length-1];
    console.log("Penultimo valor del arreglo es: "+pen);
    function ejercicio3(){
        for(var i=0; i<arr.length;i++){
            if(arr[i]%2!=0){
            return arr[i];
            }
        }
    }
var z =ejercicio3(arr);
    console.log(z);
}
console.log("-----------Fin----------");

console.log("Ejercicio 4:")
console.log("-----------Inicio----------");
{

}
console.log("-----------Fin----------");