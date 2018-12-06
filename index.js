const typeChecker = require('js-type-checker');

module.exports = function logFormJsonErrorReplacer(key, value){
  if(value instanceof Buffer){
    return value.toString('base64');
  }

  if(typeChecker.isError(value)){
    const error = {};

    Object.getOwnPropertyNames(value).forEach(function (key) {
      error[key] = value[key];
    });

    return error;
  }

  return value;
};