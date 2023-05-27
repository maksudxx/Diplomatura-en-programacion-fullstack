

// Ejercicio 1
function cambiarColorRojo() {
  let rojo = document.querySelector(".rojo");
  rojo.classList.toggle("clicked");
}
function cambiarColorAzul() {
  let azul = document.querySelector(".azul");
  azul.classList.toggle("clicked");
}
function cambiarColorVerde() {
  let verde = document.querySelector(".verde");
  verde.classList.toggle("clicked");
}


//Ejercicio 2
function contarCaracteres() {
    let textarea = document.getElementById('textArea');
    let contador = document.getElementById('contador');
    contador.innerText = textarea.value.length
}
// Ejercicio 3
// let alumnos = [
//   {
//     nombre: "Juan Gomez",
//     nota: 7,
//   },
//   {
//     nombre: "Pedro Rodriguez",
//     nota: 4,
//   },
//   {
//     nombre: "Roxana García",
//     nota: 8,
//   },
//   {
//     nombre: "Luciano Lopez",
//     nota: 5,
//   },
//   {
//     nombre: "Fernanda Gimenez",
//     nota: 6,
//   },
//   {
//     nombre: "Florencia Martinez",
//     nota: 10,
//   },
//   {
//     nombre: "Raul Sanchez",
//     nota: 7,
//   },
//   {
//     nombre: "Sandra Figueroa",
//     nota: 8,
//   },
// ];

// let aprobados = alumnos.filter((alumno)=>{
//   return  alumno.nota >=7
// })

// console.log(aprobados)
