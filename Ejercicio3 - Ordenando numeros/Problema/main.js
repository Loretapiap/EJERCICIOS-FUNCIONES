function orden(){
	var n1 = prompt("Ingresa el primer número");
		while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n1)){
		n1 = prompt("el valor ingresado no es un numero, ingrese nuevamente");}
	var n2 = prompt("Ingresa el segundo número");
		while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n2)){
		n2 = prompt("el valor ingresado no es un numero, ingrese nuevamente");}
	var n3 = prompt("Ingresa el tercer número");
		while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n3)){
		n3 = prompt("el valor ingresado no es un numero, ingrese nuevamente");}

	if(parseInt(n1)>parseInt(n2)){
		if(parseInt(n2)>parseInt(n3))
		{
		document.write(n1 + " > " + n2 + " > " + n3);
		}
		else{
			document.write(n1 + " > " + n3 + " > " + n2);
		}
	}

	if(parseInt(n2)>parseInt(n1)){
		if(parseInt(n1)>parseInt(n3))
		{
		document.write(n2 + " > "+ n1 + " > " + n3);
		}
		else{
			document.write(n2 + " > " + n3 + " > " + n1);
		}
	}

	if(parseInt(n3)>parseInt(n1)){
		if(parseInt(n1)>parseInt(n2))
		{
		document.write(n3 + " > "+ n1 + " > " + n2);
		}
		else{
			document.write(n3 + " > " + n2 + " > " + n1);
		}
	}

}



/*
Realizar una función a la cual le envíe tres enteros y los muestre ordenados 
de menor a mayor.
*/