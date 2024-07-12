//Defenimos las variables
let numeroSecreto = 0;
let intentos = 0;
let listaDenuemerosSorteados = [];
let numeroMaximo = 10;

//Funcion para asignar texto de inicio 
function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

//Verificamos si el numero de Ususario es igual al numero Secreto 
function verificarIntento(){
    //Obtenemos el número digitado por el usuraio 
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //sí el usuario acierta se mostarrá un mensaje con el número de intentos
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    //Si no acierta se mostrara indicaciones de proximidad al número secreto    
    }else {
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número es menor')
        } else {
            asignarTextoElemento('p', 'El número es mayor')
        }
    }
    intentos++;
    limpiarCampo();
    return;
}

//Función para limpiar el input 
function limpiarCampo(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

//Generamos el numero secreto
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaDenuemerosSorteados);

    if (listaDenuemerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posobles');
    } else {
        //Sí el número está incluido en la lista 
        if(listaDenuemerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); 
        //Si no lo está, generamos un nuevo número y lo añadimos a la lista
        } else {
            listaDenuemerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indique un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//Función para reiniciar el juego
function reiniciarJuego(){
    limpiarCampo();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();



