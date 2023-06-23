//contador---------------------------------------------------
/*const parrafo = document.querySelector("p");
const boton = document.querySelector("button");
//creo 2 variables en donde llamare a los objetos parrafo y boton
let contar = 0; //tiene la cuenta de las veces que pica el boton

function contador()
{
    contar++; //sumamos uno al contador
    parrafo.textContent = contar; //cambiamos el texto del parrafo segun el valor del contador. En vez de textContent tambien puede ir innerHTML
}
// creo la funcion que se hara cuando se haga click



boton.addEventListener("click", contador); //añadimos el addeEventListener como funcion, este toma como parametro el evento y la funcion o*/


// punto uno ------------------------------------------------

const formulario = document.querySelector("#formulario");
const boton = document.querySelector("button");
var value;

function numeroElegido(event)
{
    event.preventDefault();//prevenir el navegador hago cosas con el evento por defecto
    value = parseFloat((event.target.number.value));
    console.log(value);
}

formulario.addEventListener("submit", numeroElegido);

function numeroAleatorio()
{
    let numero = parseFloat(Math.round(Math.random() * (10 - 1 ) + 1));
    console.log(numero);

    if (numero == value)
    {
        alert("FELICIDADES !! Adivinaste el numero");
    }
    if (numero > value)
    {
        alert("Fallaste, intenta de nuevo. Tu numero era menor");
    }
    else
    {
        alert("Fallaste, intenta de nuevo. Tu numero era mayor");
    }
}

boton.addEventListener("click",numeroAleatorio);