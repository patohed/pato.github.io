let randomNumber = Math.floor(Math.random() * 100) + 1;

const intentos = document.querySelector('.intentos');
const resultado = document.querySelector('.resultado');
const masMenos = document.querySelector('.masMenos');

const intentoIn = document.querySelector('.intentoIn');
const campoIn = document.querySelector('.campoIn');

let contador = 1;
let resetButton;

function inicioJuego() {
    let intentosIngresados = Number(campoIn.value);

    if (contador === 1) {
      intentos.textContent = 'Tus intentos hasta ahora: ';
    }
    intentos.textContent += intentosIngresados + ' ';


  
    if (intentosIngresados === randomNumber) {
      resultado.textContent = 'Enhorabuena, adivinaste! El número era → '+ randomNumber ;
      resultado.style.color = 'green';
      masMenos.textContent = '';
      resetButton = document.createElement('button');
      resetButton.textContent = 'Reiniciar juego';
      

      finDelJuego();
    } else if (contador === 10) {
      resultado.textContent = 'Más suerte la próxima, el número oculto era '+ randomNumber;
      finDelJuego();
    } else {
    resultado.textContent = '¡No, probá otro número!';
    resultado.style.color = 'red';
    if(intentosIngresados < randomNumber) {
    masMenos.textContent = '¡El número es más alto!';
    } else if(intentosIngresados > randomNumber) {
    masMenos.textContent = '¡El número es más bajo!';
    }
    }
contador++;
campoIn.value = '';
campoIn.focus();
  }

    intentoIn.addEventListener('click', inicioJuego);

    function finDelJuego() {
    intentoIn.disabled = true;
    intentoIn.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Reiniciar juego';
    
    

    
    document.body.append(resetButton);
    resetButton.addEventListener('click', reiniciar);
  }

    function reiniciar() {
    contador = 1;
  
    const reiniciar = document.querySelectorAll('.resultadosIn');
    for (let i = 0 ; i < reinicio.length ; i++) {
      reiniciar [i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    campoIn.disabled = false;
    intentoIn.disabled = false;
    campoIn.value = '';
    intentoIn.focus();
  
    resultado.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
   }

   

 