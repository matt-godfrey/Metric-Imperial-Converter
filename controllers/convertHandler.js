/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    if (!input.match(/[0-9]/g)) {
       result = 1;
    }
    else {
  
      num = input.match(/[a-z]+|[^a-z]+/gi)[0]
      
      if (num.indexOf("/") != -1) {
        num = num.split("/")
        num1 = Number(num[0])
        num2 = Number(num[1])
       
        if (num.length > 2) {
          result = "invalid number"
        } else {
          result = num1 / num2
        }
       
      } else {
        result = num
      }
    }
  
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    const unitsArr = ['km', 'lbs', 'kg', 'l', 'gal', 'mi']
    if (!input.match(/[0-9]/g) && input.match(/[a-z]+|[^a-z]+/gi)) {
      arr = [1, input]
  } else {
    arr = input.match(/[a-z]+|[^a-z]+/gi)
  }
   
      num = parseFloat(arr[0])
      units = arr[1]
    
    
      for (let i = 0; i < unitsArr.length; i++) {
        if (units.toLowerCase() == unitsArr[i]) {
          result = units
          return result
        } else {
          result = "invalid unit"
        }
    }
    return result
  };
 
  this.getReturnUnit = function(initUnit) {
    if (initUnit == "invalid unit" || initUnit == undefined) { return "invalid unit"}
    // if (initUnit) {
    //   initUnit = initUnit.toLowerCase();
    // }
    
    let result;
    if (initUnit == "gal" || initUnit == "l" || initUnit == 'L') {
      if (initUnit == "gal") {
        result = "L"
      } else {
        result = "gal"
      }
    }
    else if (initUnit == "lbs" || initUnit == "kg") {
      if (initUnit == "lbs") {
        result = "kg"
      } else {
        result = "lbs"
      }
    }
    else if (initUnit == "mi" || initUnit == "km") {
      if (initUnit == "mi") {
        result = "km"
      } else {
        result = "mi"
      }
    } else {
      return "invalid unit"
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    if (unit == "invalid unit" || unit == undefined) { return "invalid unit"}
    if (unit) {
      unit = unit.toLowerCase();
    }
    if (unit == "kg") {
      result = "kilograms"
    } 
    else if (unit == "lbs") {
      result = "pounds"
    }
    else if (unit == "mi") {
      result = "miles"
    }
    else if (unit == "l") {
      result = "liters"
    }
    else if (unit == "gal") {
      result = "gallons"
    }
    else if (unit == "km") {
      result = "kilometers"
    }
    

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    if (initNum == "invalid number" || initNum == undefined) { return result = "invalid number"}
    if (initNum == 1 && initUnit == "invalid unit" || initUnit == undefined) {
      return result = "invalid number"
    }
    else {
      if (initUnit) {
        initUnit = initUnit.toLowerCase();
      }
      
      initNum = parseFloat(initNum)
      
      
      if (initUnit == "gal" || initUnit == "l") {
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
      } else {
        result = initNum
      }
      result = Math.round(result * 1e5) / 1e5
    } 
    return result
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    if (initNum == "invalid number" || initNum == undefined) {
      return "invalid number"
    } else {
      returnUnit = this.spellOutUnit(returnUnit)
    }
    if (initUnit == "invalid unit" || initUnit == undefined) {
      return "invalid unit"
    } else {
      initUnit = this.spellOutUnit(initUnit)
    }
    
    if (initNum === 1 && initUnit != "invalid unit" && initUnit != undefined) {
    
      initUnit = initUnit.slice(0, initUnit.length - 1)
    }
    if (returnNum === 1 && initUnit != "invalid unit") {
      returnUnit = returnUnit.slice(0, returnUnit.length - 1)
    }
    result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit
    
    return result;
  };
  
}

module.exports = ConvertHandler;
