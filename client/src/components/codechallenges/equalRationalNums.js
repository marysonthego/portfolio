//leetcode
//4/6
//Theory:
//every nonzero terminating decimal has two equal representations (for example, 8.32 and 8.31999...)

//the Number type in browsers seems able to accurately represent 0.010000000000000009 without any tell-tale IEEE 754 rounding (ditto Python), whereas C#/.NET's Single (32-bit) and Double (64-bit) floating-point types both choke and give me rather bad approximations.

//parseInt truncates numbers to integer values.

//If parseInt or parseFloat encounters a character that is not a numeral in the specified radix (in the case of parseInt), it ignores it and all succeeding characters and returns the integer value parsed up to that point.

//The string.indexOf(substring) method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number. -1 if not found

//The string.slice(start, end) method extracts a section of a string and returns it as a new string, without modifying the original string.

//Cases:
// 1.2(32) != 1.232
// 1.2(31) != 1.2(32)
// 1.2(31) != 1.23(1)
// 0.6(6) == 0.6(666) == 0.67
// 8.32 == 8.31(999)
// 0.6(6) == 0.(666666)
// 0.9(99) == 1.0
// 2.(99) == 3
// (9) == 9(99)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isRationalEqual = function(s, t) {

  console.log(`\n\ns=`,s, `t= `,t);

  //No parens. Not repeating
  if(s.indexOf('(') === -1 && t.indexOf('(') === -1) {
    console.log(`parseFloat s=`, parseFloat(s),` t=`, parseFloat(t));
    if(parseFloat(s) === parseFloat(t)) {
        console.log(`equal?`,true);
        return true;
    } else {
      console.log(`equal?`, false);
      return false;
    }
  }

  //repeating. Get prefix, repeating, afterDecimal
  let sNum="";
  let tNum="";
  let sRepeating = "";
  let tRepeating = "";
  let sPrefix = "";
  let tPrefix = "";

  //s is repeating
  if (s.indexOf('(') > 0) {
      sPrefix = s.slice(0, s.indexOf('('));
      console.log(`sPrefix=`, sPrefix);

      sRepeating = s.slice(s.indexOf('(')+1, s.indexOf(')'));
      console.log(`sRepeating=`, sRepeating);
      sNum = sPrefix+sRepeating;

      for (let i=0; i<15; i++) {
        sNum += sRepeating;
      }
  //s not repeating
  } else if (s.indexOf('(') === -1) {
      sNum = s;
    }

  //t is repeating
  if (t.indexOf('(') > 0) {
    tPrefix = t.slice(0, t.indexOf('('));
    console.log(`tPrefix=`, tPrefix);

    tRepeating = t.slice(t.indexOf('(')+1, t.indexOf(')'));
    console.log(`tRepeating=`, tRepeating);

    tNum = tPrefix+tRepeating;

    for (let i=0; i<15; i++) {
      tNum += tRepeating;
    }
  //t not repeating
  } else if (t.indexOf('(') === -1) {
      tNum = t;
    }
    let precision = 11;
    sNum = parseFloat(sNum).toFixed(precision);
    tNum = parseFloat(tNum).toFixed(precision);
  
  console.log(`parseFloat sNum=`, parseFloat(sNum),` tNum=`, parseFloat(tNum));

  if(parseFloat(sNum) === parseFloat(tNum)) {
    console.log(`equal?`,true);
    return true;
  } else {
    console.log(`equal?`, false);
    return false;
  }
};

isRationalEqual("0.(52)", "0.5(25252)")
isRationalEqual("0.1666(6)", "0.166(66)");
isRationalEqual("0.9(9)", "1.");
isRationalEqual("0.(99)", "1.");
isRationalEqual("15.(9)", "16");
isRationalEqual("2.(2)", "2");
isRationalEqual("28.110(01)", "28.1(100)");

