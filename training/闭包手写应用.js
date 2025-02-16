// const arr = [1, 2, 3, 4]
// const res = arr.reduce((pre, cur) => {
//   console.log(pre, cur);
//   return pre + cur
// })
// console.log(res)

// 柯里化

// function getWidth(width) {
//   return (height) => {
//     return width * height 
//   }
// }
// const getArea = getWidth(10)
// const a1 = getArea(1)
// const a2 = getArea(2)
// const a3 = getArea(3)
// console.log(a1, a2, a3);

// 使用闭包实现私有方法和变量

// function fun(num) {
//   function funOne() {
//     console.log(num);
//   }
//   return funOne
// }
// const f1 = fun(110)
// const f2 = fun(111)
// const f3 = fun(112)
// f1()

// 匿名自执行函数

// const funOne = (function() {
//   var num = 0
//   return function() {
//     num++
//     return num
//   }
// })()
// console.log(funOne());
// console.log(funOne());
// console.log(funOne());

// 缓存一些结果

// function parents() {
//   var list = []
//   function funTwo(params) {
//     list.push(params)
//     console.log(list)
//   }
//   return funTwo
// }
// const f1 = parents()
// f1(10)
// f1(20)
// f1(30)

// 代码题
// 实现一个compose函数，用法如下
// func tion fn1(x) {
//   return x + 1
// }
// function fn2(x) {
//   return x + 2
// }
// function fn3(x) {
//   return x + 3
// }
// function fn4(x) {
//   return x + 4
// }
// // const a = compose(fn1, fn2, fn3, fn4)
// // console.log(a(1)) // 1 + 4 + 3 + 2 + 1 = 11

// function compose() {
//   let list = [...arguments]
//   return function(num) {
//     return list.reduce((pre, cur) => {
//       console.log(pre)
//       return cur(pre)
//     }, num)
//   }
// }
// const a = compose(fn1, fn2, fn3, fn4)
// console.log(a(1), '..');

// 函数柯里化手写

// function currying(fn, ...args) {
//   const originArgsLength = fn.length
//   let allArgs = [...args]
//   const resFun = (...newArgs) => {
//     allArgs = [...allArgs, ...newArgs]
//     if (allArgs.length === originArgsLength) {
//       return fn(...allArgs)
//     }else {
//       return resFun
//     }
//   }
//   return resFun
// }

// const add = (a, b, c, d) => a + b + c + d
// const a1 = currying(add, 1)
// const a2 = a1(3)
// console.log(a2(3)(3));