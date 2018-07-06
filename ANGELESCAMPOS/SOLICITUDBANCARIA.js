//Inicializar variables
//EJERCICIO GRUPAL INTEGRANTES: HÉCTOR ROMERO LOPEZ (MENTOR), CAROLINA GONZÁLEZ ALCOCER, CARMEN CAMPOS ORTIZ (ANGELES)
var prompt = require("prompt");
prompt.start();
var nombreEmpresa= ""
var RFC=""
var salariomensual= 0
var fechaingreso=""
var prompt = require("prompt");
prompt.start();
//Pedir Valores por la terminal
prompt.get(['valornombreEmpresa','valorRFC','valorsalariomensual','valorfechaingreso'],function(err,result){
   salariomensual=Number(result.valorsalariomensual);
   RFC=result.valorRFC.toUpperCase();
//Mostrar mensaje en la terminal
console.log("tu información ha sido enviada al departamento de crédito");
//console.log(RFC);
	});
