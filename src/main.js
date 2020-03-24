class Preloader {
	constructor(){
 		this.helpers = require('custom-card-helpers');
		this.console_error = window.console.error;
 	}
 	
	preloadElement(type, name) {
			window.console.error = function(){
				if(arguments[0].includes(name)){
					return;
				}
				
				console_error(...arguments);
			};
			
			if(type == "card"){
				this.createCardElement({type: name});
			}
			else if(type == "row"){
				this.createRowElement({type: name});
			}
			
			//window.console.error = this.console_error;
			console.log(`Preloaded ${type} ${name}`);
	}

	preloadCards(){
		window.loadCardHelpers().then(({ createCardElement, createRowElement }) => {
    		this.createCardElement = createCardElement;
    		this.createRowElement = createRowElement;
    		
    		let config = this.helpers.getLovelace().config;
    		
    		let preload = config.preload;
    		
    		let preload_cards = config.preload_cards ? 
    			config.preload_cards : 
    			(config.preload ? config.preload : []);
    		
    		let preload_rows = config.preload_rows ? 
    			config.preload_rows : [];
    			
    			
    		if(preload){
    			console.warn("Use of preload option is deprecated and may be removed in a leter version. Please use preload_cards and preload_rows");
    		}
    		
    		preload_cards.forEach(cardtype => {
    			this.preloadElement("card", cardtype);	
    		});
    		
    		preload_rows.forEach(cardtype => {
    			this.preloadElement("row", cardtype);	
    		});
    	});
	}
}

const preloader = new Preloader();

preloader.preloadCards();