// 1. Función Promise
async function divisible(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0){
            resolve("El numero " + num + " es divisible por 2");
        } else {
            reject("El numero " + num + " no es divisible por 2");
        }
    });
}
 
divisible(10)
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(error);
    });


// 2. Promesa en variable
const promesa = new Promise((resolve, reject) => {
    const valor = 5; 
  
    if (valor >= 0 && valor <= 10) {
      resolve("El valor está entre 0 y 10");
    } else {
      reject("El valor no está entre 0 y 10");
    }
  });
  
  // Manejo de la promesa
  promesa.then(resultado => {
    console.log(resultado);
  }).catch(error => {
    console.error(error);
  });
  
// 3. Vocal

async function esVocal(letra){
    return new Promise((resolve, reject) => {
        let vocal = ["a", "e", "i", "o", "u"];

        if(vocal.includes(letra)){
            resolve("La letra "+letra+" es una vocal");
        }else{
            reject("La letra "+letra+" no es una vocal");
        }
    })
}
//Datos correctos
esVocal("a").then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});
//Datos incorrectos
esVocal("b").then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});


// 4. DIVIDIR

async function dividir(num1, num2){
    return new Promise((resolve, reject) => {
        if(num1 >0 && num2 > 0){
            resolve("La división de "+num1+" entre "+num2+" es "+(num1/num2));
        }else{
            reject("Los números deben ser mayores a 0");
        }
    })
}

//Datos correctos
dividir(10, 2).then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

dividir(6, 0).then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});