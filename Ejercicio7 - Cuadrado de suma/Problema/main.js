function numero(){
	var n1 = prompt("Ingrese un número");
		while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n1))
		{n1 = prompt("Sólo número porfavor, ingrese nuevamente");}
	var n2 = prompt("Ingrese otro número");
		while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n2))
		{n2 = prompt("Sólo número porfavor, ingrese nuevamente");}

	var resultado = (parseInt(n1) + parseInt(n2))*(parseInt(n1) + parseInt(n2));

	document.write("El producto al cuadrado de " + n1 + " y " + n2 + " es: " + resultado);
}

/* Realizar un programa que calcule el cuadrado de la suma de 
dos números (a + b)^2 */


