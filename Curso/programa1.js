//function sumar (a,b) {return a+ b}
// sumar =(a,b) => a+b
// restar = (a,b) => a-b
// multiplicacion = (a , b) => a*b
// dividir = (a,b) => a/b

//es para importar la libreria y esto viene como objeto por eso se guarda como variable
var calc = require("./calculos.js")

console.log("La suma es = " + calc.sumar(2,7));
console.log("La resta es = "+ calc.restar(10,2));
console.log("El resultado de la multiplicacion es = " + calc.multiplicacion(5,5));
console.log("El resultado de la division es = "+ calc.dividir(15,3));


