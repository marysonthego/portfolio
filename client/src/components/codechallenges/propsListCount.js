// 'arguments' only works with functions - not arrow functions
// 'props' works with both
// props.length returns the props count
// console.log(props) lists all the props passed

let props = ['first', 'second', 'third'];
let multiProps = [{1:'first'}, {2:'second'}, {3:'third'}];

const myArrow = (props) => {
  console.log('\nmyArrow');
  console.log('arguments', arguments);
	for (let i=0; i< arguments.length; i++) {
		console.log(arguments[i]);
	}
}

const myArrow2 = (props) => {
  console.log('\nmyArrow2');
  console.log('props.length=', props.length);
  console.log('props=', props);
}

function myFunction(props) {
  console.log('\nmyFunction');
  console.log('arguments', arguments);
  console.log('arguments.length=', arguments.length);
	for (let i=0; i< arguments.length; i++) {
		console.log('arguments[',i,']=', arguments[i]);
	}
  console.log('props.length=', props.length);
  console.log('props=', props);
}

console.log('propsListCount.js');
console.log('props:', props);
console.log('multiProps:', multiProps,'\n');
//myArrow(props); // ERROR arguments is not defined
myArrow2(props);
myArrow2(multiProps);
myFunction(props);
myFunction(multiProps);

