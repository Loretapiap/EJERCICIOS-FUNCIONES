function numero(){
	var n1 = prompt("Ingrese un numero");
		while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n1)){
		n1 = prompt("Sólo ingrese números por favor.");
		}

    var contador;
    for (contador = 1; contador <= parseInt(n1)*10; contador++)
    {
        if (contador % parseInt(n1) == 0)
            document.write(contador + " ");
    }
}

