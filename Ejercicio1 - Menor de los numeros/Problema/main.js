
function mayor() {
	var n1 = prompt("Ingrese el primer número entero");
	while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n1)){
	n1 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
	}
	var n2 = prompt("Ingrese el segundo número entero");
	while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n2)){
	n2 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
	}
	var n3 = prompt("Ingrese el tercer número entero");
	while (!/^(\+|-)?[0-9]\d*(\.\d*)?$/.test(n3)){
	n3 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
	}

	if(parseInt(n1)>=parseInt(n2))
{
	if(parseInt(n1)>=parseInt(n3))
		{
		document.write(n1 + " Es el numero mayor");
		}
}

if(parseInt(n2)>=parseInt(n1))
{
	if(parseInt(n2)>=parseInt(n3))
		{
		document.write(n2 + " Es el numero mayor");
		}
}

if(parseInt(n3)>=parseInt(n1))
{
	if(parseInt(n3)>=parseInt(n2))
		{
		document.write(n3 + " Es el numero mayor");
		}
}

	;}
/*
function() { var restArgs = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0);
      var rest = Array(length);
      for (var index = 0; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

function mayor (n1, n2, n3) {
	if(n1>n2) {
	document.write(n1 + " Es el número mayor");}
}


*/
