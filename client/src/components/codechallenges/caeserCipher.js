//const prompt = require('prompt-sync')({sigint: true});

//Original alphabet:      abcdefghijklmnopqrstuvwxyz
//Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

// s = the string to encrypt
// k = the rotation number

function caesarCipher(s, k) {
  let myString = '';
  // let alphabetLower = "abcdefghijklmnopqrstuvwxyz";  //97 - 122
  // let alphabetHigher = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //65 - 90
  let code = 0;
  let cipher = 0;

  if(k === 0 || k % 26 === 0) {
    return s;
}
if(k > 26) {
    k = k % 26;
}

  for(let i=0; i< s.length; i++) {
    code = s.charCodeAt(i);

    if(code > 96 && code < 123) {
      if((code + k) < 123) {
        cipher = code + k;
      } else {
        cipher = code + k - 26;
      }
    } else if (code < 91 && code > 64) {
        if(code + k < 91) {
          cipher = code + k;
        } else {
          cipher = code + k - 26;
        }
      } else {
        cipher = code;
      }
    myString = myString.concat(String.fromCharCode(cipher));
    console.log(`myString: `, myString);
  };
  //console.log(`myString: `, myString);
  return myString;
};

let s = "AbC xyz";
let k = 40;
console.log(s);
console.log(`Done`, caesarCipher(s, k));
