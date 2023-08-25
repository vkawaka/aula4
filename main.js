'use strict'

const botaoMostrarNumeros= document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares= document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarDobro = document.getElementById('botao-mostrar-dobro')
const botaoMostrarProximoPar = document.getElementById('botao-mostrar-proximo-par')
const botaoMostrarMultiplos3e5 = document.getElementById('botao-mostrar-multiplo-3e5')
const botaoMostrarMultiplos3ou5 = document.getElementById('botao-mostrar-multiplo-3ou5')
const botaoMostrarPrimo = document.getElementById('botao-mostrar-numero-primo')


function showNumbers(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for(let contador = 0; contador < ultimoIndice; contador ++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)
    }}
function showEvenNumbers(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-pares')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for(let contador = 0; contador < ultimoIndice; contador ++){
       if(numeros[contador] % 2 == 0){
           const novoSpan = document.createElement('span')
           novoSpan.textContent = numeros[contador]
           container.appendChild(novoSpan)
       }
    }
}
function showDouble(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-dobro')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for(let contador = 0; contador < ultimoIndice; contador ++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador] * 2
        container.appendChild(novoSpan)
    }
}
function showNextEven(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-proximo-par')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for(let contador = 0; contador < ultimoIndice; contador ++){
       if(numeros[contador] % 2 == 0){
           const novoSpan = document.createElement('span')
           novoSpan.textContent = Number(numeros[contador]) + 2
           container.appendChild(novoSpan)
       }else{
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[contador]) + 1
        container.appendChild(novoSpan)
       }
    }
}
function showMultiplesAnd(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-multiplo-3e5')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for(let contador = 0; contador < ultimoIndice; contador ++){
       if(numeros[contador] % 3 == 0 && numeros[contador] % 5 == 0){
           const novoSpan = document.createElement('span')
           novoSpan.textContent = numeros[contador]
           container.appendChild(novoSpan)
       }
    }
}
function showMultiplesOr(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-multiplo-3ou5')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for(let contador = 0; contador < ultimoIndice; contador ++){
       if(numeros[contador] % 3 == 0 || numeros[contador] % 5 == 0){
           const novoSpan = document.createElement('span')
           novoSpan.textContent = numeros[contador]
           container.appendChild(novoSpan)
       }
    }
}
function mostrarProximoPrimo() {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.getElementById('container-mostrar-proximo-primo');
    container.replaceChildren('');

    function isPrimo(numero) {
        if (numero <= 1) return false;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) return false;
        }
        return true;
    }

    for (let contador = 0; contador < numeros.length; contador++) {
        let numero = parseInt(numeros[contador]) + 1;

        while (!isPrimo(numero)) {
            numero++;
        }

        const novoSpan = document.createElement('span');
        novoSpan.textContent = numero;
        container.appendChild(novoSpan);
    }
}
    
botaoMostrarNumeros.addEventListener('click', showNumbers)
botaoMostrarNumerosPares.addEventListener('click', showEvenNumbers)
botaoMostrarDobro.addEventListener('click', showDouble)
botaoMostrarProximoPar.addEventListener('click', showNextEven)
botaoMostrarMultiplos3e5.addEventListener('click', showMultiplesAnd)
botaoMostrarMultiplos3ou5.addEventListener('click', showMultiplesOr)
botaoMostrarPrimo.addEventListener('click', mostrarProximoPrimo)