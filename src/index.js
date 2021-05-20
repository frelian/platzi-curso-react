
/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, Platzi Badges!</h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);

*/

/*
// Option 1: usando javascrip puro, sin React
// 1. ELEMENTO: createElement necesita que tipo de elemento quiero crear
const element = document.createElement('h1')
element.innerText = "Hola Julian !"

// 2. CONTENEDOR: Luego tengo que especificar donde
const container = document.getElementById('app')
container.appendChild(element)
*/

// Clase ReactDOM.render
// Opcion 2: usando React
import React from 'react'; // sera el analogo a createElement
import ReactDOM from 'react-dom'; // sera el analogo a appendChild

const element = <h1>Hello, my name is Julian !</h1> 
// porque una etiqueta HTML sin commillas ? 
// lo hace react al importar la libreria y tener la extension .jsx
// JSX es una extension de javascript creada por Facebook

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container); 


