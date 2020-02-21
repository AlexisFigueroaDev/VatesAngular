//este arranca el servidor web 
let http = require("http")


let visitas = 0




//crea el servidor 
http.createServer((request,response) => {
    
    if(request.url === "/contar"){
        visitas++
        response.end()
    }     
    else if (request.url === "/consultar"){
        response.end("<h1>Hola, sos el visitante " + visitas+ " Pediste "+ request.url +"</h1>")
    }
    else {
        response.end("<h1>Direccion In3correcta</h1>");

        response.statusCode()
    }
        

    
    console.log("recibi un pedido a " + request.url)
}).listen(4242)