/**
* Grupo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    anyo : { type: 'string', required: true, size: 7  },

    grupo : { type: 'string', required: true, size: 5  },

    subgrupo : { type: 'string', required: true, size: 5  },

    ensenyanza : { type: 'string', size: 80 },

    curso : { type: 'int', size: 1},

    alumnos: {
            collection: 'alumno',
            via: 'grupo'
       	},

  }
};

