// 1. 创建一个对象
// 2. 对象的__proto__属性 指向构造函数的原型
// 3. 内部会执行这个构造函数，并且会添加成员属性和方法
// 4. 如果构造函数内部有return，就返回这个return的内容，否则返回这个结果

// function mockNew(fun, ...args) {
//   if (typeof fun !== 'function') {
//     throw 'fun must be function'
//   }
//   let obj = Object.create(fun.prototype)
//   let result = fun.apply(obj, args)
//   if (typeof result === 'object' && result !== null || typeof result === 'function') {
//     return result
//   } else {
//     return obj
//   }
// }

// function mockNew(fun, ...args) {
//   if (typeof fun !== 'function') {
//     throw 'fun must be function'
//   }
//   let obj = Object.create(fun.prototype)
//   let result = fun.call(obj, args)
//   if ((typeof result === 'function' || typeof result === 'object') && result !== null) {
//     return result
//   } else {
//     return obj
//   }
// }
function mockNew(fun, ...agrs) {
  let obj = Object.create(fun.prototype)
  let result = fun.call(obj, agrs)
  if ((typeof result === 'function' || typeof result === 'object') && result !== null) {
    return result
  } else {
    return obj
  }
}

function parents() {
  this.name = 'ysn'
}
parents.prototype.sayName = function() {
  console.log(this.name)
}
function son() {}
son.prototype = mockNew(parents)
const s1 = mockNew(son)
s1.sayName()
