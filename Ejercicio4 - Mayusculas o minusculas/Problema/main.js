function texto(){
	var n1 = prompt("Ingrese un texto");
		while (!/^[a-zA-Z]*/.test(n1))
		{n1 = prompt("El texto ingresado debe contener sólo letras, ingrese nuevamente");}

	  if(n1 == n1.toUpperCase()) {
   		document.write(n1 + ": El texto está formado por mayúsculas");
	  }
	  else if(n1 == n1.toLowerCase()) {
	    document.write(n1 + ": El texto está formado sólo por minúsculas");
	  }
	  else {
	   document.write(n1 + ": El texto está formado por mayúsculas y minúsculas");
	  }
 
}


/*
Definir una función que muestre información sobre una cadena de texto que se le 
pasa como argumento. A partir de la cadena que se le pasa, la función determina 
si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una 
mezcla de ambas.
*/

