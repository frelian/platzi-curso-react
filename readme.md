# platzi-curso-react
Curso de Platzi, React

## Mi primer componente
**Ejemplo de crear componente:**
1. Creo: src/components/Badge.js e ***importo siempre React*** (import React from 'react';)
2. Creo el contenedor: const container = document.getElementById('app');
3. Unico el componente en la vista: ReactDOM.render(__qué__, __dónde__);
    
**Ejemplo del componente:**
```
// Ejemplo del componente:
import React from 'react';

class Badge extends React.Component {
    render() {
        return (<div><h1>Mi componente</h1></div>);
    }
}

export default Badge;
```
* Para poner imágenes: import confLogo from '../images/badge-header.svg'; y para utilizarla src={ confLogo } en el HTML

## Como aplicar estilos
**Para aplicar estilos en el componente, hay dos opciones:**
1. Utilizando archivos .css -> import './styles/Badge.css';
2. Importar algun framework CSS con npm: ***npm install bootstrap*** y luego en mi index.js ***import 'bootstrap/dist/css/bootstrap.css';***
3. Para utilizarlos en las etiquetas HTML className="miclase" en lugar de "class='' ya que generaria error al ser una palabra reservada para las clases"

* Tambien se puede instalar una version en especifico de Bootstrap: npm insttall bootstrap@4.1.0 (abreviado: npm i bootstrap@4.1.0)
Nota: la convension de nombres utilizada en CSS se llama BEM, más info: http://getbem.com/naming/

## PROPS
* ***Son los argumentos de una función*** y en este caso serán los atributos de 
  nuestro componente como class, src, etc.
* Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el 
  ReactDOM.render().
* Los props que es la forma corta de PROPerties
* Los atributos de HTML son los Propos de JSX en React, como className.
* Para no utilizar  { this.props.jobTitle } es mejor hacer un destructuring, por ejemplo:
```
class Badge extends React.Component {
  render() {
    const {
	    firstName,
	    lastName
    } = this.props;
    return (
      <div>
          <h1>
            {firstName} <br /> {lastName}
          </h1>
      </div>
    );
  }
}
```
***Formas de pasar props:***
1. <Componente firstName="Julian", container/>  Usando: {this.props.jobTile}
2. Usando "Destructuring 1" <Componente firstName="Julian", container/>  Declaro: const {firstName} = this.props; Uso: {firstName}
3. Usando "Destructuring 2" data = { name: 'Lily', lastName: "kafman" } <Component unaPror={...data} /> info:
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
4. Opcion de pasar una url o imágen: se puede pasar la imagen como props en index.js:
```
import avatar from './images/avatar.jpg';
ReactDOM.render(<Badge 
    firstName="Marco" 
    lastName= "Macedo"
    avatar= {avatar}
    jobTittle= "Kickass Developer" 
    twitter="marcosiegman"/>, 
container
);
```