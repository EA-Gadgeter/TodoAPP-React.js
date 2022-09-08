import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render (
    // Index no es un atributo, ES UN COMPONENTE
    // lo cual identificamos gracias a las mayúsculas

    // Podemos agregar propiedades a nuestros componentes
    // que usamos en el archivo del componente, es decir,
    // en Index.js

    /*<Index saludo="Buenas" />*/

    // Otra de forma de hacerlo, es la propiedad Children
    <App/>,
)