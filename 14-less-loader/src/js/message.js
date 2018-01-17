import renderToDOM from './render-to-dom.js';
import makeMessage from './make-message.js';

const waitTime = new Promise((todoOk, todoMal) => {
	setTimeout( () => {
		todoOk('Han pasado 3 segundos, omg');
	}, 3000)
});

module.exports = {
	firstMessage: 'Hola mundo desde un módulo',
	delayMessage: async () => {
		const message = await waitTime;
		console.log(message);
		
		renderToDOM(makeMessage(message));
	}
}