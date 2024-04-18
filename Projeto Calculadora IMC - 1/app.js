function calcular() {
let kg = document.getElementById('kg').value;
let altura = document.getElementById('altura').value;
let resultado = document.getElementById('resultado');

let imc = Math.round(kg/(altura*altura));
    if (imc < 18.5) { 
     resultado.innerHTML = `Seu IMC é de ${imc} Magreza, procure um Nutricionista!`;
    } else if (imc < 24.9) { 
        resultado.innerHTML = `Seu IMC é de ${imc} Normal, continue assim!`;
    } else if (imc < 29.9) { 
        resultado.innerHTML = `Seu IMC é de ${imc} Sobrepeso, tome cuidado!`;
    } else if (imc < 34.9) { 
        resultado.innerHTML = `Seu IMC é de ${imc} Obesidade 1, tome bastante cuidado!`;
    } else if (imc < 39.9) { 
    resultado.innerHTML = `Seu IMC é de ${imc} Obesidade 2, vá ao médico o mais rápido o possivel!`;
    } else { 
        resultado.innerHTML = `Seu IMC é de ${imc} Obesidade 3, VÁ AO MÉDICO IMEDIATAMENTE!`;
    }
}