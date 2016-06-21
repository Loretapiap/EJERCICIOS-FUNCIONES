function numero(){
	var n1 = prompt("Ingrese un numero");
		while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n1)){
		n1 = prompt("Sólo ingrese números por favor.");
		}
	var resultado = n1.length;

	alert(resultado);
}



