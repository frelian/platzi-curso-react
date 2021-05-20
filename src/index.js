
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

// const jsx = <h1>Hello, my name is Julian !</h1> 

// Requiere 3 parametros, 1= tipo de elemento, 2= atributos (en React se llaman props o properties), 3=children (similar a InnerText o InnerHtml)
// Ejemplos: const element = React.createElement('h1', {}, 'Hola desde React.createElement...');
// const element = React.createElement('a', { href: 'https://platzi.com'}, 'Ir a Platzi...');
const name = 'Julian'
// Usando React.createElement => const element = React.createElement('h1', {}, `Hola, soy ${name}`);
// Usando JSX
/*
    // Ejemplo 1:
    const sum = () => 100 + 200;
    const jsx = <h1>Hola, soy {name}. Y la suma de 100 + 200 = {sum()}</h1>
*/

// Ejemplo 2:
const jsx = <div>
    <h1>Hola, soy Julian</h1>
    <p>Soy desarrollador</p>
</div>

// Haciendo el mismo ejemplo 2 con React.createElement
const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hola, soy Julian'),
    React.createElement('p', {}, 'Soy desarrollador (opcional)'),
)

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container); 
// Nota, cambiar "element" por jsx en caso se quiera ver ese elemento


