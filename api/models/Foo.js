/**
* Foo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    bar : {
      model : 'bar'
    },

    bat : {
      collection : 'bat'
    }
  },
  afterUpdate: function (updated, next) {
    console.log('This makes me sad', updated);
    next();
  }
};

