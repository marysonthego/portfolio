/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

- `spinalCase("This Is Spinal Tap")` should return the string `this-is-spinal-tap`.
- `spinalCase("thisIsSpinalTap")` should return the string `this-is-spinal-tap`.
- `spinalCase("The_Andy_Griffith_Show")` should return the string `the-andy-griffith-show`.
- `spinalCase("Teletubbies say Eh-oh")` should return the string `teletubbies-say-eh-oh`.
- `spinalCase("AllThe-small Things")` should return the string `all-the-small-things`.

https://stackoverflow.com/questions/54866457/i-wrote-code-to-replace-chars-in-the-string-on-javascript-but-it-doesnt-work?noredirect=1&lq=1

*/

function spinalCase(str) {
  console.log('str=',str);
  const arrStr = []; //Array.from(str);
  arrStr.push(str[0].toLowerCase());
  //console.log(arrStr);

  for(let i=1; i< str.length; i++) {
    switch (true) {
      case str[i] === '_':
      case str[i] === ' ':
        arrStr.push('-');
        break;
      case /[A-Z]/.test(str[i]):
        if(/[a-z]/.test(str[i-1])) {
          arrStr.push('-');
        }
        arrStr.push(str[i].toLowerCase());
        break;
      default:
        arrStr.push(str[i]);
        break;
    }
  }
  const retStr = arrStr.join('');
  console.log(retStr);
  return retStr;
}

console.log(spinalCase('thisIsSpinalTap'));
