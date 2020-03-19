const helpers = require('custom-card-helpers');
const console_error = window.console.error;

const preloadCard = (type) => {
	window.loadCardHelpers().then(({ createCardElement }) => {
			window.console.error = function(){
				if(arguments[0].includes(type)){
					return;
				}
				
				console_error(...arguments);
			};
			createCardElement({type});
			window.console.error = console_error;
			console.log(`Preloaded ${type}`);
		})
	}

var cardsToPreload = [];

function preloadCards(){ 
    let preload = helpers.getLovelace().config.preload;
    if(!preload) return;
    preload.forEach(cardtype => {
    	preloadCard(cardtype);	
    });
}

preloadCards();