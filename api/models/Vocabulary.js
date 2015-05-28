/**
* Vocabulary.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    word : { type: 'string' },

    meaning : { type: 'string' },

    example : { type: 'string' },

    image : { type: 'string' },

    audio : { type: 'string' },

    video : { type: 'string' },

    other : { type: 'string' }
  }
};

