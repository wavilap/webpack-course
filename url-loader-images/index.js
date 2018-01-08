import './estilos.css';
import { firstMessage, delayMessage } from './message.js';
import platziImg from './platzi.png';

document.write(firstMessage);
delayMessage();

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);

console.log('Hello World 2222');