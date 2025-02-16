// new Promise(resolve => {
//   console.log('start promise')
//   resolve(1)
// }).then(res => {
//   console.log(res);
// }).then(() => {
//   console.log(2)
// })

// new Promise(resolve => {
//   console.log('promise3')
//   resolve(3)
// }).then(res => {
//   console.log(res);
// }).then(() => {
//   console.log(4)
// })

// setTimeout(() => {
//   console.log('settime1')
//   new Promise(resolve => {
//     console.log('start promise2')
//     resolve(11)
//   }).then(res => console.log(res))
// });

// function fn1() {
//   console.log('fn1')
// }
// fn1()

// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2')
// }
// console.log('script start')
// setTimeout(function () {
//   console.log('settimeout')
// })
// async1()
// new Promise(function (resolve) {
//   console.log('promise1')
//   resolve()
// }).then(function () {
//   console.log('promise2')
// })
// console.log('script end')

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// settimeout



async function fn1() {
  await console.log('fn1');
  console.log(1);
}
function fn2() {
  console.log('fn2');
}
fn1()
fn2()