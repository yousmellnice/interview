// const arr = [12, 12, 12, 23, 45]
// function unique(arr) {
//   return Array.prototype.filter.call(arr, (item, index) => {
//     return arr.indexOf(item) === index;
//   })
// }

// function unique(arr) {
//   return arr.filter((item, index) => {
//     return arr.indexOf(item) === index
//   })
// }
// console.log(unique(arr));

function test() {
  this.name = 'ysn';
  this.age = 20
  console.log(this);
}
test()
