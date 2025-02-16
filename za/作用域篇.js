// function foo() {
//  var a = 2;
//  function bar() {
//   console.log(a);
//  }
//  return bar
// }
// var baz = foo()
// baz()

// for (var i = 1; i <= 5; i++) { 
//  (function (i) { 
//   setTimeout(function timer() { 
//    console.log(i); 
//   }, i * 1000); })(i); 
// }

function foo(a, b) {
  console.log(arguments);
  console.log(a + b);
}
foo(10, 12)