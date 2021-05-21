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
1. Utilizando archivos .css -> import './styles/Badge.css'; y para utilizarlos en las etiquetas HTML className="miclase"
2. Importar algun framework CSS con npm: ***npm install bootstrap*** y luego en mi index.js ***import 'bootstrap/dist/css/bootstrap.css';***

