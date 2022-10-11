/* Evento uno

const boton = document.getElementById("btn");

boton.addEventListener("click", respuesta);

function respuesta(){
    console.log("Respuesta al click!");
};

/* Evento dos

const botonDos = document.getElementById("formulario");

botonDos.addEventListener("click", respuestaDos);

function respuestaDos(){
    console.log("Otra respuesta al click!");
};*/

const btn = document.getElementById("btn-svc");
btn.addEventListener("click", ()=> {
    Swal.fire({
        icon: "warning",
        title: "Atención",
        text: "Este es un acceso exclusivo para Agencias de Viaje",
        position: "top",
        confirmButtonColor: "#d33",
        imageWith: 600,
        imageHeigth: 150,
        background: "url(../imagenes/atencion.jpg)",
    });
})

//Ternarios 

// caso 1
/*let usuario = "romore"
let clave = 00743;

clave === 00743 ? console.log ("Sesión iniciada") : console.log ("Usded ingresó una combinacion de usuario y clave incorrecta");

// caso 2
let usuario = {
    nombre: "rosariomore",
    edad: 15

let permiso = (usuario.edad >= 18) ? true : false;
permiso ? console.log("Sesión iniciada") : console.log ("Usded es menor de edad y no cumple con la edad mínima requerida para el acceso");
*/

// caso 3
const hola =prompt ("Bienvenido a Entorno Turístico!!! Te gustaría conocer nuestras promociones?");

let rta =(hola == "si") ? alert ("Dirigite a la solapa de Destinos para conocerlas") : alert ("Esperamos poder ayudarte la próxima vez");