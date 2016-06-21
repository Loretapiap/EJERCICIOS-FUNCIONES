function numero(){

var num = parseInt(prompt("Introduzca un numero"));

if (num == 1 || num == 2) {
	document.write("El numero " + num + " es primo."); 
}
	else{
		for (var i=2;i<num;i++) 
		{
			if(num % i == 0) {
			document.write("El numero " + num + " no es primo"); 
			break;
			}
			else{
				document.write("El numero " + num + " es primo"); 
				break;
				}
		}
	 }
}
