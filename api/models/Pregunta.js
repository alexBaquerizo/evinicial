/**
* Pregunta.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

	    pregunta : { 
	    	type: 'string',
	    	size: 255,
	    	required: true
	    },

	    respuesta : { 
	    	type: 'string',
	    	size: 255,
	    	required: true
	    },

	     // Add a reference to Cuestionario
        cuestionarios:{
            collection: 'cuestionario',
            via: 'preguntas'
        }
	}
};

