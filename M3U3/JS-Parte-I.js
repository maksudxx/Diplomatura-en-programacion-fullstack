// Ejercicio 1--------------------------------------
let transporte = (metros) => {
  metros <= 0
    ? console.log("no se aceptan distancias negativas")
    : metros > 0 && metros <= 1000
    ? console.log("pie")
    : null;
  metros > 1000 && metros <= 10000 ? console.log("bicicleta") : null;
  metros > 10000 && metros <= 30000 ? console.log("colectivo") : null;
  metros > 30000 && metros <= 100000 ? console.log("auto") : null;
  metros > 100000 ? console.log("avion") : null;
};

transporte(150);
transporte(1500);
transporte(15000);
transporte(38690);
transporte(150000);

// Ejercicio 2-----------------------------------------------

const arrayNumeros = [100, 55, 120, 88, 159, 1, 0, 65, 89, 7];

let numeroMayor = (arrayNumeros) => {
  let numeroMaximo = arrayNumeros[0];

  for (let i = 1; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > numeroMaximo) {
      numeroMaximo = arrayNumeros[i];
    }
  }

  return numeroMaximo;
};

console.log(numeroMayor(arrayNumeros));
