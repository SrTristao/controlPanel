const _ = require('underscore');

export function updateDocument(doc, SchemaTarget, data) {
    for (let field of SchemaTarget.schema.paths) {
       if ((field !== '_id') && (field !== '__v')) {
            let newValue = getObjValue(field, data);
            if (newValue !== undefined) {
                setObjValue(field, doc, newValue);
          }  
       }  
    }
    return doc;
};

function getObjValue(field, data) {
    return _.reduce(field.split("."), function(obj, f) { 
        if(obj) return obj[f];
    }, data);
}

function setObjValue(field, data, value) {
  let fieldArr = field.split('.');
  return _.reduce(fieldArr, function(o, f, i) {
     if(i == fieldArr.length-1) {
          o[f] = value;
     } else {
          if(!o[f]) o[f] = {};
     }
     return o[f];
  }, data);
}