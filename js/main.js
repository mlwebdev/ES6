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
