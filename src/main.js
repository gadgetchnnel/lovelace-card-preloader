const helpers = require('custom-card-helpers');

const preloadCard = (type) => {
	window.loadCardHelpers().then(({ createCardElement }) => {
			createCardElement({type});
		})
	}

var cardsToPreload = [];

function preloadCards(){ 
    let preload = helpers.getLovelace().config.preload;
    if(!preload) return;
    preload.forEach(cardtype => {
    	console.log(`Preloading ${cardtype}`);
    	preloadCard(cardtype);	
    });
}

preloadCards();