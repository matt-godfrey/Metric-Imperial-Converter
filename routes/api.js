/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');


module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
     console.log(initNum, initUnit, returnNum, returnUnit)
      if (returnNum == 1 && returnUnit == "invalid unit") {
        res.json("invalid unit and number")
      }

      if (returnNum == "invalid number" && returnUnit == "invalid unit") {
        res.json("invalid unit and number")
      }

     else if (returnUnit == "invalid unit" && returnNum) {
        res.json("invalid unit")
      }
      else if (!returnNum && returnUnit) {
        res.json("invalid number")
      } else {
        Number(initNum)
        Number(returnNum)
        
        res.json({ initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString})
      }
      
    });
    
};
