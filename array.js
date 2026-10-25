const dyr = ["köttur", "hundur", "hestur", "fiskur"];
console.log(dyr);
dyr.push("geit");
console.log(dyr);
console.log(dyr.length);
console.log(dyr[4]);
dyr.push("fíll");
console.log(dyr.length);
console.log(dyr[5]);
console.log(dyr);
dyr.pop();
console.log(dyr);
dyr.shift();
console.log(dyr);
dyr.unshift("fluga");
console.log(dyr[0], dyr[2]);
console.log(dyr[0] + dyr[2]);
dyr.push("fíll");
console.log(dyr);
console.log(dyr.length);
console.log(dyr.length - 3);

//
dyr.map((d) => {
  const dyr1 = "dyr: ";
  return console.log(dyr1 + d);
});

dyr.map((b) => {
  const dyr2 = b.toUpperCase();
  return console.log(dyr2);
});
