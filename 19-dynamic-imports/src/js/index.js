import '../css/estilos.css';
import { firstMessage, delayMessage } from './message.js';
import platziImg from '../images/platzi.png';
import data from './teachers.json';
import renderaToDom from './render-to-dom.js';

import React from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers.js';
import '../css/main.less';

const $button = document.getElementById('dynamic-import');
$button.addEventListener('click', async () => {

	const { default: alerta } = await import('./alerta.js');
	alerta();
});


render(<Teachers data={data}/>, document.getElementById('container'));

console.log(data);

data.teachers.forEach((teacher) => {
	const element = document.createElement('li');
	element.textContent = teacher.name;
	renderaToDom(element);
});



document.write(firstMessage);
delayMessage();

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);

console.log('Hello World 2222');