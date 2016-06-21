var i = prompt("Ingrese el primer número entero");
	while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(i)){
	i = prompt("el valor ingresado no es un numero, ingrese nuevamente");
	}


if(parseInt(i) & 1)
{
    document.write(i + " Es número impar");
}
else
{
   document.write(i + " Es número par");
}


