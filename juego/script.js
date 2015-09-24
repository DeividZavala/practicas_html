// alert("Hola!");

// concole.log("Este es mi primer mensaje");
// var n1 = 3
// var n2 = 10
// var n3 = 4
// var resul = (n1 * n2) + 5 + n3
//    operador OR ||    suma "son como en sistemas"
//    operador AND &&   multiplica
//    operador NOT !    niega




// if (){       dentro del parentesis va la condición
//  console.log("si!");
//  }
//    else{
//	    console.log("Noo!");
//    }


// para sacar la caja: prompt("");
// hacemos el prompt como variable
// var nombre = prompt("como te llamas?")


alert("Hola este es juego de piedra, papel o tijeras");

var  opcion = prompt("Jugador: Escribe alguna de las siguientes opciones: piedra, papel o tijera");
var opcion2 = prompt("Compu: Escribe alguna de las siguientes opciones:piedra, papel o tijera");
var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";
 if (opcion == opcion2) {
 	alert("tu seleccionaste "+opcion+" y la Compu "+opcion2+" empate")
 }
 else if ((opcion == piedra) && (opcion2 == papel)) {
 	alert("tu seleccionaste "+opcion+" y la Compu "+opcion2+" gana papel")
 }
 else if ((opcion == piedra) && (opcion2 == tijera)) {
 	alert("tu seleccionaste "+opcion+" y la Compu "+opcion2+" gana piedra")
 }
 else if ((opcion == papel) && (opcion2 == tijera)) {
 	alert("tu seleccionaste "+opcion+" y la Compu "+opcion2+" gana tijera")
 }
 else if ((opcion == papel) && (opcion2 == piedra)) {
 	alert("tu seleccionaste "+opcion+" y la Compu "+opcion2+" gana papel")
 }
 else if ((opcion == tijera) && (opcion2 == papel)) {
 	alert("tu seleccionaste "+opcion+" y la Compu "+opcion2+" gana tijera")
 }
 else if ((opcion == tijera) && (opcion2 == piedra)) {
 	alert("tu seleccionaste "+opcion+" y la Compu "+opcion2+" gana piedra")
 }
 else{
 	alert("No es un valor valido")
 }