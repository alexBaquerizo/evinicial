/**
* Cuestionario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

//Cuestionario -> clase
//cuestionario -> objeto
module.exports = {
	
  attributes: {

    observaciones : { type: 'string' },
    fechaFin : { type: 'date' },

    // Add a reference to Pregunta
        preguntas: {
            collection: 'pregunta',
            via: 'cuestionarios'
        },

        alumnos: {
            collection: 'alumno',
            via: 'cuestionarios'
        },

        duplicar: function(cb){
        	cuestionarioJSON =this.toJSON();
		    delete cuestionarioJSON['id'];
		    Cuestionario.create(cuestionarioJSON)// Metodo de Instancia.
		    .exec(function createCB (err, created){
		      if (err) return cb(err);
		      cb(null, created);
		    })      	
        },

        asociarGrupo: function (grupo, cb) {

	    while (grupo.alumnos.length){
	    	var alumno = grupo.alumnos.pop();
		    this.alumnos.add(alumno.id);
		    this.save(console.log);
	    }
	    	cb(null, this)
    }

  },

  duplicar: function (cuestionario, cb) {
	  (function _lookupCuestionarioIfNecessary(afterLookup){
	    // (this self-calling function is just for concise-ness)
	    if (typeof cuestionario === 'object') return afterLookup(null, cuestionario);
	    Cuestionario.findOne(cuestionario).populate('preguntas').exec(afterLookup);
	  	})(function (err, cuestionario){
	    if (err) return cb(err);
	    if (!cuestionario) {
	      err = new Error();
	      err.message = require('util').format('No existe un cuestionario con el id=%s.', cuestionario);
	      err.status = 404;
	      return cb(err);
	    }
	    cuestionarioJSON =cuestionario.toJSON();
	    delete cuestionarioJSON['id'];
	    Cuestionario.create(cuestionarioJSON)// Metodo de Clase.
	    .exec(function createCB (err, created){
	      if (err) return cb(err);
	      /*cuestionario.preguntas.forEach(function(pregunta){
	      	{created.preguntas.add(pregunta.id)}
	      });*/

	      cb(null, created);
	    })
	  });
	}

};

