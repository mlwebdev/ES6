// ES6 for of loop replaces both the for...in and for...each loop 
const iter = [	
  'a', 'b'
];    
for (const i of iter) {      
	console.log(i);    
} 
// prints a, b



for (let c of "String"){      
  console.log(c);    
} 
// "s" "t" "r" "i" "n" "g"



//Iterators
//Take an array and return an iterator    
function iter(array) {
  var nextId = 0;
  return {
    next: function () {
      if (nextId < array.length) {
        return {
          value: array[nextId++],
          done: false
        };
      } else {
        return {
          done: true
        }
      }
    }
  }
}
var it = iter(['Hello', 'Iterators']);
console.log(it.next().value); // 'Hello'
console.log(it.next().value); // 'Iterators'
console.log(it.next().done);  // true



//An iterable object    
//1. Has a method with key has 'Symbol.iterator'    
//2. This method returns an iterator via method 'next'    

let iter = {
  0: 'Hello',
  1: 'World of ',
  2: 'Iterators',
  length: 3,
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        let value = this[index];
        let done = index >= this.length;
        index++;
        return {
          value,
          done
        };
      }
    };
  }
};
for (let i of iter) {
  console.log(i);
}
// Prints 
"Hello"
"World of "
"Iterators"
