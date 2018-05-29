'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.userIdGET = function userIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.userIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userIdPUT = function userIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var userData = req.swagger.params['userData'].value;
  Default.userIdPUT(id,userData)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGET = function usersGET (req, res, next) {
  var search = req.swagger.params['search'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Default.usersGET(search,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
