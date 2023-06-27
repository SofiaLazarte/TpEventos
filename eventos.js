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


// PUNTO UNO -----------------------------------------------------------------------------------------------------------------------------
/*
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
*/

// PUNTO DOS -------------------------------------------------------------------------------------------------------------------------------
/*
class Persona
{
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;

    }

    mostrarGeneracion()
    {
        if (this.nacimiento <= 1948)
        {
            alert(`${this.nombre} pertenece a la generacion Silent la cual tiene como razgo caracteristico la austeridad`);
        }

        else if (this.nacimiento >= 1949 || this.nacimiento <= 1968) 
        {
            alert(`${this.nombre} pertenece a la generacion Baby Boom la cual tiene como razgo caracteristico la ambicion`);
        }

        else if (this.nacimiento >= 1969 || this.nacimiento <= 1980) 
        {
            alert(`${this.nombre} pertenece a la generacion X la cual tiene como razgo caracteristico la obsesion por el exito`);
        }

        else if (this.nacimiento >= 1981 || this.nacimiento <= 1993) 
        {
            alert(`${this.nombre} pertenece a la generacion Y o Millennials la cual tiene como razgo caracteristico la frustracion`);
        }

        else if (this.nacimiento >= 1994 || this.nacimiento <= 2010) 
        {
            alert(`${this.nombre} pertenece a la generacion Z la cual tiene como razgo caracteristico la irreverencia`);
        }

        else 
        {
            console.log(`${this.nombre} pertenece a la generacion desconocida`);
        }

    }

    esMayordeEdad()
    {
        if (this.edad >= 18) 
        {
            console.log(`${this.nombre} es mayor de edad`);
        } 
        else 
        {
            console.log(`${this.nombre} es menor de edad`);
        }

    }

    MostrarDatos()
    {
        alert(`${this.nombre} ${this.sexo} de ${this.edad} años, con DNI ${this.dni} y fecha de nacimiento el dia ${this.nacimiento}. Tiene una altura de ${this.altura} cm y un peso de ${this.peso} kg. `);
    }

    generarDni()
    {
        this.dni = (Math.round(Math.random() * (100000000 - 10000000 ) + 10000000));
        console.log(this.dni)
    }
}

var personaUno = new Persona ("Segundo", 25, 48522475, "masculino", 90, 198, 1997);



/*const formulario = document.getElementById("formulario");
const botonGeneracion = document.getElementById("verGeneracion");
const botonEdad = document.getElementById("verEdad");
var personaNueva;

function crearPersona(event)
{
    event.preventDefault();//prevenir el navegador hago cosas con el evento por defecto

    var nombreNuevo = event.target.name.value;
    var edadNuevo = parseFloat(event.target.number.value);
    var dniNuevo = parseFloat(event.target.dni.value);
    var sexoNuevo = event.target.sexo.value;
    var alturaNuevo = event.target.altura.value;
    var pesoNuevo = event.target.peso.value;
    var anioNuevo = parseInt(event.target.anio.value);
    
    personaNueva = new Persona(nombreNuevo, edadNuevo, dniNuevo, sexoNuevo, pesoNuevo, alturaNuevo, anioNuevo);

    console.log(personaNueva);

}



function esMayorDeEdad(event) 
{
    event.preventDefault();
    var nombreNuevo = event.target.name.value;
    var edadNuevo = parseFloat(event.target.number.value);
    var dniNuevo = parseFloat(event.target.dni.value);
    var sexoNuevo = event.target.sexo.value;
    var alturaNuevo = event.target.altura.value;
    var pesoNuevo = event.target.peso.value;
    var anioNuevo = parseInt(event.target.anio.value);
    
    personaNueva = new Persona(nombreNuevo, edadNuevo, dniNuevo, sexoNuevo, pesoNuevo, alturaNuevo, anioNuevo);

    personaNueva.esMayordeEdad();

}

function mostrarGeneracion(event) 
{
    event.preventDefault();
    var nombreNuevo = event.target.name.value;
    var edadNuevo = parseFloat(event.target.number.value);
    var dniNuevo = parseFloat(event.target.dni.value);
    var sexoNuevo = event.target.sexo.value;
    var alturaNuevo = event.target.altura.value;
    var pesoNuevo = event.target.peso.value;
    var anioNuevo = parseInt(event.target.anio.value);
    
    personaNueva = new Persona(nombreNuevo, edadNuevo, dniNuevo, sexoNuevo, pesoNuevo, alturaNuevo, anioNuevo);

    personaNueva.mostrarGeneracion();

}

formulario.addEventListener('submit', crearPersona);
botonGeneracion.addEventListener('click', mostrarGeneracion);
botonEdad.addEventListener('click', esMayorDeEdad);*/

/*const formulario = document.querySelector("#formulario");
const botonGeneracion = document.querySelector("#verGeneracion");
const botonEdad = document.querySelector("#verEdad");
var personaNueva = new Persona();

function valoresFormulario(event)
{
    event.preventDefault();//prevenir el navegador hago cosas con el evento por defecto

    var nombreNuevo = event.target.name.value;
    var edadNuevo = event.target.number.value;
    var dniNuevo = event.target.dni.value;
    var sexoNuevo = event.target.sexo.value;
    var alturaNuevo = event.target.altura.value;
    var pesoNuevo = event.target.peso.value;
    var anioNuevo = event.target.anio.value;

    //personaNueva = new Persona(nombreNuevo, edadNuevo, dniNuevo, sexoNuevo, pesoNuevo, alturaNuevo, anioNuevo);
    personaNueva.nombre = nombreNuevo;
    personaNueva.nacimiento = anioNuevo;

    console.log(personaNueva);
}

formulario.addEventListener("submit", valoresFormulario);

function verGeneracion() 
{
    console.log(personaNueva);
    personaNueva.mostrarGeneracion();
}

botonGeneracion.addEventListener("click", verGeneracion);
*/

//PUNTO TRES ---------------------------------------------------------------------------------------------------------------------------
/*
const input = document.querySelector("#input");
const btnAdd = document.querySelector("#btn-add");
const ul = document.querySelector("ul");

function anadirLista(e) 
{
    e.preventDefault();
    var text = input.value; //aqui guardo el valor del input en la variable text

    if (text !== "") 
    {
        var li = document.createElement("li");//creo un nuevo elemento htlm fr yipo <li> y la almaceno en la variale li
        var p = document.createElement("p");//idem anterior
    
        p.textContent = text;//con esto el texto que almacene en la variable "text" lo asigno al elemento p, osea que la nueva tarea ingresada sera el contenido del parrafo
    
        li.appendChild(p);//con esto agrego el elemento parrafo como hijo de el elemento lista "li"
        li.appendChild(crearBtnDelete());
    
        ul.appendChild(li);//  con este agrego a los li como hijos de ul (lista des)
    
        input.value = "";//borrar el impunt cuando pulsemos añadir 
    }

    else
    {
        alert("ingrese una tarea");
    }

}

btnAdd.addEventListener("click", anadirLista);

function borrar(e) 
{
    var item = e.target.parentElement;
    ul.removeChild(item);
}

function crearBtnDelete() 
{
    var btnDelete = document.createElement("button");
    btnDelete.textContent = "x";
    btnDelete.addEventListener("click", borrar);

    return btnDelete;   
}
*/

//PUNTO CUATRO --------------------------------------------------------------------------------------------------------------------------

/*
function reloj() 
{
    horaActual = new Date();
    hora = horaActual.getHours();
    minutos = horaActual.getMinutes();
    segundos = horaActual.getSeconds();

    var horarioImprimible = ('00' + hora).slice(-2) + ":" +  ('00' + minutos).slice(-2) + ":" + ('00' + segundos).slice(-2) ;
    document.querySelector("#horario").textContent = horarioImprimible;

}

setTimeout("reloj()",1000);
setInterval(reloj, 1000);

let fechaActual = new Date();    
fechaActual.getDay();
fechaActual.getDate();
fechaActual.getMonth();
fechaActual.getFullYear();

let diasSemana = [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
let dia = (diasSemana[fechaActual.getDay()]);

let meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let mes = (meses[fechaActual.getMonth()]);

let fechaImprimible = `${dia}, ${fechaActual.getDate()} de ${mes} de ${fechaActual.getFullYear()}`;
document.querySelector("#fecha").textContent = fechaImprimible;
*/


