//importar dependencia

const { response } = require("express");
const path =require("path")



//iniciando exprress
const express = require("express");


//iniciando express
const server = express()
//utilizando os arquivos estaticos
server.use(express.static('public'))
//criando uma rota
server.get('/', function(request,response){
         return response.sendFile(path.join(__dirname, "views","index.html"))
})

//ligar  o servidor

server.listen(5500)