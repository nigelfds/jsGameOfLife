// requires node.js to be loaded


//Assume a grid
// [a , b]
// [c,  d]

// Initialise the Nodes
var a = new Node(DEAD);
var b = new Node(ALIVE);
var c = new Node(ALIVE);
var d = new Node(ALIVE);


// Setup their positions
a.addNeighbors([b,c,d]);
b.addNeighbors([a,c,d]);
c.addNeighbors([a,b,d]);
d.addNeighbors([a,b,c]);

//Get next generation
var a1 = a.reproduce();
var b1 = b.reproduce();
var c1 = c.reproduce();
var d1 = d.reproduce();

// Inspect new generation
console.log(a1.living);
console.log(b1.living);
console.log(c1.living);
console.log(d1.living);

//Get next generation
//var a2 = a1.reproduce();
//var b2 = b1.reproduce();
//var c2 = c1.reproduce();
//var d2 = d1.reproduce();

// Inspect new generation
//console.log(a2.alive);
//console.log(b2.alive);
//console.log(c2.alive);
//console.log(d2.alive);


//..script the rest :-)