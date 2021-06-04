import React from 'react'; // sera el analogo a createElement
import ReactDOM from 'react-dom'; // sera el analogo a appendChild
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgeNew from "./pages/BadgeNew";

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeNew />, container);


/* 
    Que es un componente ?: son bloques de construccion, el elemento sale del componente
    º Tienen ciclo de vida: nacen, crecen y desaparecen.
        Primer paso: "montaje"
        2do Actualizacion ejecuta render() y genera el nuevo DOM y React informa los cambios "componentDidUpdate()"
        3ro Desaparacer: usando componentWillUnmount() seguido de eliminar el codigo del DOM
*/