function texto(){
	var cadena = prompt("Ingrese un texto");
		while (!/^[a-zA-Z]*/.test(cadena))
		{cadena = prompt("El texto ingresado debe contener sólo letras, ingrese nuevamente");}

var cadenaMIN = cadena.toLowerCase();
 
  // Separar las letras 
var letrasEspacios = cadenaMIN.split("");
 
  // Eliminar los espacios en blanco
var cadenaSinEspacios = "";
  for(i in letrasEspacios) {
    if(letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }
 
  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();
 

  var iguales = true;
  for(i in letras) {
    if(letras[i] == letrasReves[i]) {
    	//Debe ir en blanco para que texto no repita
    }
    else { iguales = false;}
  }
 
  if(iguales) {
    document.write("'" + cadena + "'" + ": Es un palíndromo");
  }
  else {
    document.write("'" + cadena + "'" + ": No es un palíndromo");
  }
 
}

/*
Ingresar texto:
Dejar letras independientes --> eliminar espacio (x)--> invertir texto (y)--> verificar si 'x' e 'y' son iguales
*/