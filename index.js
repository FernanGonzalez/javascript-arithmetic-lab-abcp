function add(a, b) {
  var c=a+b;
  return c;
}

function subtract(a, b) {
  var c=a-b;
  return c;
}

function multiply(a, b) {
  var c=a*b;
  return c;
}

function divide(a, b) {
  var c=a/b;
  return c;
}

function inc(n) {
  var n;
  n++
  return n;
}

function dec(n) {
  var n;
  n--
  return n;
}

function makeInt(n) {
  n=parseInt(n, 10);
  return n;
}

function preserveDecimal(n) {
  n=parseFloat(n);
  return n;
}