/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.count = function(numStr, symbol) {
    charCount = 0;
    for (let i = 0; i < numStr.length; i++) {
      if (numStr.charAt(i) == symbol) {
        charCount++
      }
    }
    return charCount;
  }
  this.getNum = function(input) {
    let result;
    result = input.match(/[a-z]+|[^a-z]+/gi)[0]
    let operatorCount = this.count(result, '/');
    if (!result.match(/[0-9]/g)) { result = 1}
    if (operatorCount > 1) {
      result = "invalid number"
      // console.log("num invalid: too many //")
    }
    if (operatorCount == 1) {
      result = result.split('/')
      let num1 = parseFloat(result[0]);
      let num2 = parseFloat(result[1]);
      // console.log(result, num1, num2)
      result = num1 / num2
      
    }
    
  
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    let units;
    const unitsArr = ['km', 'lbs', 'kg', 'l', 'gal', 'mi', 'KM', 'LBS', 'KG', 'L', 'GAL', 'MI']
    // const unitsArr = ['km', 'lbs', 'kg', 'l', 'L', 'gal', 'mi']
    result = input.match(/[a-z]+|[^a-z]+/gi)

    if (result.length > 1) {
      units = result[1];
    } else {
      units = result[0]
    }
    // console.log(units)
        for (let i = 0; i < unitsArr.length; i++) {
          if (units == unitsArr[i]) {
            result = unitsArr[i]
            
            break;
          } else {
            result = "invalid unit"
            
          }
      }
    if (result === 'l') { result = result.toUpperCase(); }
    if (result !== 'l' && result !== 'L') {
      result = result.toLowerCase();
    }
    
    return result
  };
 
  this.getReturnUnit = function(initUnit) {
    let result;
    if (initUnit == undefined) { initUnit = "invalid unit"}
    if (initUnit == "invalid unit") { result = "invalid unit"}
    
    else {
      if (initUnit == "gal" || initUnit == "GAL" || initUnit == "l" || initUnit == 'L') {
        if (initUnit == "gal" || initUnit == "GAL") {
          result = "L"
        } else {
          result = "gal"
        }
      }
      else if (initUnit == "lbs" || initUnit == "LBS" || initUnit == "kg" || initUnit == "KG") {
        if (initUnit == "lbs" || initUnit == "LBS") {
          result = "kg"
        } else {
          result = "lbs"
        }
      }
      else if (initUnit == "mi" || initUnit == "MI" || initUnit == "km" || initUnit == "KM") {
        if (initUnit == "mi" || initUnit == "MI") {
          result = "km"
        } else {
          result = "mi"
        }
      } else {
        result = "invalid unit"
      }
    }
    
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    if (unit == "invalid unit" || unit == undefined) { result = "invalid unit"}
    else {
      if (unit == "kg" || unit == "KG") {
        result = "kilograms"
      } 
      else if (unit == "lbs" || unit == "LBS") {
        result = "pounds"
      }
      else if (unit == "mi" || unit == "MI") {
        result = "miles"
      }
      else if (unit == "l" || unit == "L") {
        result = "liters"
      }
      else if (unit == "gal" || unit == "GAL") {
        result = "gallons"
      }
      else if (unit == "km" || unit == "KM") {
        result = "kilometers"
      }
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if (initNum == "invalid number") { 
      result = "invalid number"
      return result; 
    }
    if (initNum === 1 && initUnit == "invalid unit") {
      initNum = "invalid number"
      result = "invalid number"
    } 
      
      if (initUnit == "gal" || initUnit == "l" || initUnit == "L") {
        if (initUnit == "gal") {
          result = initNum * galToL
        } else {
          result = initNum / galToL
        }
      }
      
      else if (initUnit == "lbs" || initUnit == "kg") {
        if (initUnit == "lbs") {
          result = initNum * lbsToKg
        } else {
          result = initNum / lbsToKg
        }
      }
  
      else if (initUnit == "mi" || initUnit == "km") {
        if (initUnit == "mi") {
          result = initNum * miToKm
        } else {
          result = initNum / miToKm
        }
      }
      
      if (result != "invalid number") { result = Math.round(result * 1e5) / 1e5 }
    
    return result
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    if (initNum === undefined) { initNum = "invalid number"}
    if (initUnit === undefined) { initUnit = "invalid unit"}
    
    if (initUnit != "invalid unit" && initNum != "invalid number") { 
      initUnit = this.spellOutUnit(initUnit)
      returnUnit = this.spellOutUnit(returnUnit)
      result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit
    }
    
    
    if (initNum === 1 && initUnit != "invalid unit") {
    
      initUnit = initUnit.slice(0, initUnit.length - 1)
    }
    if (returnNum === 1 && initUnit != "invalid unit") {
      returnUnit = returnUnit.slice(0, returnUnit.length - 1)
    }
    
    // console.log("initNum = "+initNum, "initUnit = "+initUnit, "returnNum = "+returnNum, "returnUnit = "+returnUnit)
    
    return result;
  };
  
}

module.exports = ConvertHandler;
