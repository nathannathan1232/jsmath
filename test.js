var math = require('./lib.js');


console.log(math.add('99999999999999999', '1'));
// => 100000000000000000

console.log(math.multiply('999999', '999999'));
// => 999998000001

console.log(math.divide('1', '5564', 5));
// => 0.00017

console.log(math.divide('1005', '.05', 5));
// => 20100.00000

console.log(math.subtract('-50', '50000000'));
// => -50000050

console.log(math.round('0.0003999', 7));
// => 0.00039999
console.log(math.round('0.0003999', 6));
// => 0.0004

console.log(math.floor('558.33'));
// => 558

console.time();
console.log(math.multiply('5432543653475346543', '564335767534'));
// => 3065778692345970217890538534962
console.timeEnd();
// => 0.349ms

console.time();
console.log(math.multiply([
	'9999999999999999999',
	'9999999999999999999',
	'9999999999999999999'
]));
// => 999999999999999999700000000000000000029999999999999999999
console.timeEnd();
// => 1.769ms

console.time();
console.log(math.add([
	math.from_scientific('9.99e50'),
	math.from_scientific('9.99e50'),
	math.from_scientific('9.99e50'),
	math.from_scientific('9.99e50'),
	math.from_scientific('9.99e50')
]));
// => 4995000000000000000000000000000000000000000000000000.0
console.timeEnd();
// => 0.438ms

// Chaining

var n = math
	.chain('5')
	.multiply('-8').print() // => -40
	.divide('-8')
	.add('8')
	.subtract('1')
	.divide('5.3')
	.round(3)
	.end();

console.log(n);
// => 2.264

console.log(math.multiply(n, '55555'));
// => 125776.520000
