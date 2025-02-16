// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 1000);
// })
// p.then((res, rej) => {
//   console.log(res);
// })
// setTimeout(console.log, 0, p);
// setTimeout(console.log, 2000, p);

// let p = Promise.resolve(7)
// setTimeout(() => {
//   console.log(p === Promise.resolve(Promise.resolve(p)));
// }, 0);

// let p = Promise.reject(6)
// // setTimeout(() => {
// //   console.log(p);
// // }, 1);

// p.then(null, res => {
//   console.log(res);
// })

// try {
//   throw new Error('hh')
// } catch (e) {
//   console.log(e);
// }
// try {
//   Promise.reject(new Error('err'))
// } catch (e) {
//   console.log(e);
// }

// function delayed(str) {
//   return new Promise((resolve, reject) => {
//     resolve(str)
//   })
// }

// delayed('1').then(res => {
//   console.log(res);
//   return delayed('2')
// }).then(res => {
//   console.log(res);
// })

// let p1 = Promise.resolve('1')
// let p2 = Promise.reject('2')
// let p3 = Promise.resolve('3')

// let all = Promise.all([p1, p2, p3])
// all.then(res => {
//   console.log(res);
// })

// let p = Promise.all([
//   Promise.reject(1),
//   new Promise((resolve, reject) => { setTimeout(() => {
//     reject(2)
//   }, 1000); })
// ])
// p.catch(e => { setTimeout(() => {
//   console.log(e);
// }, 2000); })

// let p = Promise.race([
//   Promise.resolve(1),
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000)
//   })
// ])
// p.then(res => {
//   console.log(res);
// })

// 函数合成
// function addOne(x) {
//   return x + 1
// }
// function addTwo(x) {
//   return x + 2
// }
// function addThree(x) {
//   return x + 3
// }
// function addAll (x) {
//   return addThree(addTwo(addOne(x)))
// }

// 通过期约
// function addAll(x) {
//   return Promise.resolve(x)
//     .then(addOne)
//     .then(addTwo)
//     .then(addThree)
// }
// addAll(1).then(console.log)

// 通过array.prototype.reduce 实现
// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

// const arr = [1, 4, 6, 8]

// const re = (promise, fn) => promise.then(fn)

// function add(x) {
//   return [addOne, addTwo].reduce(re, Promise.resolve(x))
// }
// // add(1).then(console.log)
// console.log(...arr);

