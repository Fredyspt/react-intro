import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Fredy'
const element = (
<div>
    <h1>Hola, soy {name}</h1>
    <p>Soy developer</p>
</div>
);

const container = document.getElementById('app');
ReactDOM.render(element, container);
