console.log("Funcion Básica I");

var correctas=13;

console.log("Predicciones correctas:" +correctas)

console.log("------------------------------------------")
{
  console.log("Ejercicio 1: Mi prediccion:35 | Resultado:35")
    function a(){
        return 35;
}
    console.log(a())  
}
console.log("------------------------------------------")

console.log("------------------------------------------")
console.log("Ejercicio 2: Mi prediccion:8 | Resultado:8")
{
    function a(){
        return 4;
    }
    console.log(a()+a());
}
console.log("------------------------------------------")

console.log("----------------INICIO--------------------")
console.log("Ejercicio :3 Mi prediccion:6 | Resultado:6")
{
    function a(b){
        return b;
    }
    console.log(a(2)+a(4));
}
console.log("----------------FIN---------------------")

console.log("----------------INICIO--------------------")
console.log("Ejercicio :4 Mi prediccion:3->9 | Resultado:3->9")
{
    function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
}
console.log("----------------FIN---------------------")

console.log("----------------INICIO--------------------")
console.log("Ejercicio :5 Mi prediccion:40 | Resultado:40")
{
    function a(b){
        return b*4;
        console.log(b);
     }
     console.log(a(10));
}
console.log("----------------FIN---------------------")

console.log("----------------INICIO--------------------")
console.log("Ejercicio :6 Mi prediccion:4 | Resultado:4")
{
    function a(b){
        if(b<10) {
            return 2;
        }
        else     {
            return 4;
        }
        console.log(b);
    }
    console.log(a(15));
}
console.log("----------------FIN---------------------")


console.log("----------------INICIO--------------------")
console.log("Ejercicio :7 Mi prediccion:10,3 ->30 | Resultado:10,3 ->30")
{
    function a(b,c){
        return b*c;
    }
    console.log(10,3);
    console.log( a(3,10) );
}
console.log("----------------FIN---------------------")


console.log("----------------INICIO--------------------")
console.log("Ejercicio :8 Mi prediccion:3->4 | Resultado:3->4 ")
{
    function a(b){
        for(var i=0; i<10; i++){
            console.log(i);
        }
        return i;
    }
    console.log(3);
    console.log(4);
}
console.log("----------------FIN---------------------")

console.log("----------------INICIO--------------------")
console.log("Ejercicio :9 Mi prediccion:2,4,6,8,10,12,14,16,18,20,22 | Resultado:2,5,8,11")
{
    function a(){
        for(var i=0; i<10; i++){
            i = i +2;          
            console.log(i);
        }
    }
    a();
}
console.log("----------------FIN---------------------")
console.log("----------------INICIO--------------------")
console.log("Ejercicio :10 Mi prediccion:0,1,2,3,4,5,6,7,8,9 ->0 | Resultado:0,1,2,3,4,5,6,7,8,9 ->0")
{
    function a(b,c){
        for(var i=b; i<c; i++) {
            // i-b=0;c=10
            // 0,1,2,3,4,5,6,7,8,9
           console.log(i);
       }
       return b*c;
    }
    a(0,10);
    console.log(a(0,10));
}
console.log("----------------FIN---------------------")



console.log("----------------INICIO--------------------")
console.log("Ejercicio :11 Mi prediccion:void , no se llama a la funcion| Resultado:void")
{
    function a(){
        for(var i=0; i<10; i++){
           for(var j=0; j<10; j++){
               console.log(j);
           }
           console.log(i);
        }
    }
}
console.log("----------------FIN---------------------")


console.log("----------------INICIO--------------------")
console.log("Ejercicio :11 Mi prediccion:void , no se llama a la funcion| Resultado:void")
{
    function a(){
        for(var i=0; i<10; i++){
            for(var j=0; j<10; j++){
                console.log(i,j);
            }
            console.log(j,i);
        }
    }
}
console.log("----------------FIN---------------------")

console.log("----------------INICIO--------------------")
console.log("Ejercicio :12 Mi prediccion:10 | Resultado:10")
{
    var z = 10;
    function a(){
        var z = 15;
        console.log(z);
    }
    console.log(z);
}
console.log("----------------FIN---------------------")


console.log("----------------INICIO--------------------")
console.log("Ejercicio :13 Mi prediccion:15->10 | Resultado:15->10")
{
    var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
}
console.log("----------------FIN---------------------")


console.log("----------------INICIO--------------------")
console.log("Ejercicio :14 Mi prediccion:15->15 | Resultado:15->15")
{
    var z = 10;
    function a(){
        var z = 15;
        console.log(z);
        return z;
    }
    z = a();
    console.log(z);
}
console.log("----------------FIN---------------------")

// console.log("----------------INICIO--------------------")
// console.log("Ejercicio : Mi prediccion: | Resultado:")
// {

// }
// console.log("----------------FIN---------------------")

// console.log("----------------INICIO--------------------")
// console.log("Ejercicio : Mi prediccion: | Resultado:")
// {

// }
// console.log("----------------FIN---------------------")