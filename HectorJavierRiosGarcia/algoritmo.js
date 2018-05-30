var prompt= require("prompt");
prompt.start();

prompt.get(['parcial1','parcial2', 'parcial3' , 'examen', 'trabajof',], function (err, result) {
	console.log('Command-line input received:');
	console.log('parcial1 ' + result.parcial1);
	console.log('parcial2 ' + result.parcial2);
	console.log('parcial3 ' + result.parcial3);
	console.log('examen ' + result.examen);
	console.log('trabajof ' + result.trabajof);
});
var parcial1= 0;
var parcial2= 0;
var parcial3= 0;
var suma= 0;
sumar = (parcial1+parcial2+parcial3);
var promedio=0; 
promedio= suma*0.30
var examen=0; 
examen= examen*0.30
var trabajof=0; 
trabahof= trabajof*0.15;
var promediofinal=0; 
promediof=promedio+examen+trabajof;
	
	console.log('promediof');

