import HashMap from "./hashMap.js";

const hashMap = new HashMap();

hashMap.set('apple', 'red');
hashMap.set('banana', 'yellow');
hashMap.set('carrot', 'orange');
hashMap.set('dog', 'brown');
hashMap.set('elephant', 'gray');
hashMap.set('frog', 'green');
hashMap.set('grape', 'purple');
hashMap.set('hat', 'black');
hashMap.set('ice cream', 'white');
hashMap.set('jacket', 'blue');
hashMap.set('kite', 'pink');
// hashMap.set('lion', 'golden');

console.log(hashMap.hash('apple'));
console.log(hashMap.hash('banana'));

console.log(hashMap.get('apple'));
console.log(hashMap.get('aple'));

console.log(hashMap.has('apple'));
console.log(hashMap.has('aple'));

console.log(hashMap.remove('banana'));
console.log(hashMap.remove('ban'));

console.log(hashMap.length());

console.log(hashMap.entries())
