/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

No properties should be added. Object.keys(bob).length should always return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return the string Bob.
bob.getLastName() should return the string Ross.
bob.getFullName() should return the string Bob Ross.
bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").

*/

// class Person {
//   constructor(firstAndLast) {
//     // Only change code below this line
//     // Complete the method below and implement the others similarly
//     this._firstName = firstAndLast.split(" ")[0];
//     this._lastName = firstAndLast.split(" ")[1];
//     this._fullName = firstAndLast;
//     }
//   get getFirstName() {
//       return this._firstName;
//     }
//   get getLastName() {
//       return this._lastName;
//     }
//   get getFullName() {
//       return this._fullName;
//     }
//   set firstName(first) {
//       this._firstName = first;
//     }
//   set lastName(last) {
//       this._lastName = last;
//     }
//   set fullName(firstAndLast) {
//       this._fullName = firstAndLast.split(" ")[0] + ' ' + firstAndLast.split(" ")[1];
//     }
// }

var Person = function(firstAndLast) {

  var firstName = firstAndLast.split(' ')[0];
  var lastName = firstAndLast.split(' ')[1];

  this.setFirstName = function(firstNameNew) {
    firstName = firstNameNew;
  };

  this.setLastName = function(lastNameNew) {
    lastName = lastNameNew;
  };

  this.setFullName = function (fullNameNew) {
    firstName = fullNameNew.split(' ')[0];
    lastName = fullNameNew.split(' ')[1];
  };

  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };

  this.getFirstName = function() {
  return firstName;
  };

  this.getLastName = function() {
  return lastName;
  };


  };


const bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
console.log(bob instanceof Person);
console.log(bob.getFirstName);
console.log(bob.getLastName);
console.log(bob.getFullName);
bob.firstName = "Haskell";
bob.lastName= ("Curry");
bob.fullName = ("Haskell Curry");
console.log(bob.getFirstName);
console.log(bob.getLastName);
console.log(bob.getFullName);
