# jsmath
jsmath is a javascript library that lets you do math with arbitrarily long numbers. The default javascript maximum number is 9007199254740991. With this library, you can do math with numbers up to 10e9007199254740991. Well, a numbers even close to that big would need a hard drive that uses more atoms than there are in the observable universe.

Here are some examples. Check out the test file for more working examples.
```jaavscript
math.add('99999999999999999', '1');

// => 100000000000000000

math.multiply('999999', '999999');

// => 999998000001

math.divide('1', '5564', 5);

// => 0.00017

math.subtract('-50', '50000000');

// => -50000050

math.round('0.0003999', 7);

// => 0.00039999

math.round('0.0003999', 6);

// => 0.0004

console.log(math.floor('558.33'));

// => 558

console.time();

console.log(math.multiply('5432543653475346543', '564335767534'));

// => 3065778692345970217890538534962

console.timeEnd();

// => 0.349ms

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
```
