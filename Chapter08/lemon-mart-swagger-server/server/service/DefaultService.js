'use strict';


/**
 * Gets a `User` object by id
 *
 * id String User's unique id
 * returns User
 **/
exports.userIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "role" : { },
  "userStatus" : true,
  "lastModifiedBy" : "lastModifiedBy",
  "name" : {
    "middle" : "middle",
    "last" : "last",
    "first" : "first"
  },
  "id" : "id",
  "lastModified" : "2000-01-23",
  "email" : "email",
  "picture" : "picture"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a `User` object given id
 *
 * id String User's unique id
 * userData User Updated user object (optional)
 * returns User
 **/
exports.userIdPUT = function(id,userData) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "role" : { },
  "userStatus" : true,
  "lastModifiedBy" : "lastModifiedBy",
  "name" : {
    "middle" : "middle",
    "last" : "last",
    "first" : "first"
  },
  "id" : "id",
  "lastModified" : "2000-01-23",
  "email" : "email",
  "picture" : "picture"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Searches and returns `User` objects. Optional query params determines values of returned array 
 *
 * search String Search text (optional)
 * offset Integer The number of items to skip before starting to collect the result set. (optional)
 * limit Integer The numbers of items to return. (optional)
 * returns Users
 **/
exports.usersGET = function(search,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 0.80082819046101150206595775671303272247314453125,
  "items" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

