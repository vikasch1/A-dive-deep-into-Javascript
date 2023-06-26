var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2

// var is not meant for block scoping thats why its outputting 2 and 2. acting as global scoped variable

