# Curso Vates

## JavaScript 

* push -> incrementar el valor del arreglo al final
* pop -> decrementar el valor del arreglo  al final
* shift -> elimina el primer valor del arreglo decrementando el indice 
* unshift -> agrega un primer elemento en el arreglo 

_Ejemplo_
	
 
	`
	var x = [];
	
	x = [1,2,3,4];
	
	x.push(5);
	x.pop();
	x.shift();
	x.unshift(-2);
	
	
	v = [1,2,3,4,5,6,7,8,9,10];
	var suma = 0;
	for(var i = 0; i < 10; i++) {
		var suma += v[i];
	}
	
	foreach 
	 * funcion de orden superior son potentes 
	 
	 * el metodo map, tambien es de orden superior le aplica a cada elemento la funcion y el resultado es otro vector
	 
	 mayor_100 = function(x) {
		if(x > 100) return true
	 }
	 
	 v.filter(mayor_100) //crea un vector vacio , recorre el vector original, la funcion q recibe como callback si devuelve false no hace nada 
	 
	 
	 cuadrado = function(x){
	 return x*x
	 }
	 
	 v.map(cuadrado).filter(mayor_100);
	 
	 
	 acumulacion en list, recibe una funcion que es la que indica como quiero acumular, 'REDUCE'
	 
	 Funciones lambda -- arrow functions, funciones de flecha
	 
	 (x) => { return x*2;} // ((x) => x*2)

		v.map(x => x*x) por cada x que tenga el parametro en el vector v multiplicame el parametro por dos
		
		v.map(x => x*x).filter(x => x > 100);		
	
	promesas; promise son objetos, se los crea con new, el constructor recibe una funcion callback, esta funcion a su vez que puede ser con un lambda, recibe dos parametros, (resolve, reject) que son dos funciones, 
	entonces promise ejecuta la tarea larga, si sale todo bien ejecutar resolve si algo sale mal ejecutar reject, tamto estos dos parametros reciben informacion 
	
	ejecuta resolve(1000)
	
	
	
	async funtion iniciar(){
		 resultado = await setTimeOut 
	}
	
	
	para hacer en js orientado a objetos creamos clases class
	
	
	json  : javaScript object notation
	`
	

* Resumen de clase
* cascadia code

	