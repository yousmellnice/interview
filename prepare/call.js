// Function.prototype.myBind = function(context, ...args) {
//   const fn = this
//   const _args = args ? args : []
//   return function newFn(...newArgs) {
//     if (this instanceof newFn) {
//       return new fn(...args, ...newArgs)
//     }
//     return fn.apply(context, [...args, ...newArgs])
//   }
// }

// Function.prototype.myCall = function(context, ...args) {
//   let cxt = context || window
//   let func = Symbol()
//   cxt[func] = this
//   // const argsArgs = args ? args : []
//   const res = args.length > 0 ? cxt[func](...args) : cxt[func]()
//   delete cxt[func]
//   return res
// }

// Function.prototype.myApply = function(context, args = []) {
//   let cxt = context || window
//   let func = Symbol()
//   cxt[func] = this
//   const res = args.length > 0 ? cxt[func](...args) : cxt[func]()
//   delete cxt[func]
//   return res
// }

// Function.prototype.myCall = function(context, ...args) {
//   let cxt = context || window
//   let func = Symbol()
//   cxt[func] = this
//   const res = args.length > 0 ? cxt[func](...args) : cxt[func]()
//   delete cxt[func]
//   return res
// }

// Function.prototype.myApply = function(context, args = []) {
//   const cxt = context || window
//   const func = Symbol()
//   cxt[func] = this
//   const res = args.length > 0 ? cxt[func](...args) : cxt[func]
//   delete cxt[func]
//   return res
// }

// Function.prototype.myCall = function (context, ...args) {
//   const cxt = context || window
//   const func = Symbol()
//   cxt[func] = this
//   const res = args.length > 0 ? cxt[func](...args) : cxt[func]()
//   delete cxt[func]
//   return res
// }

Function.prototype.myCall = function(context, ...args) {
  const cxt = context || Window
  const fun = Symbol()
  cxt[fun] = this
  const res = args.length > 0 ? cxt[fun](...args) : cxt[fun]()
  delete cxt[fun]
  return res
}


const obj = {
  name: 'ysn',
  say: function(value, val) {
    console.log(`my name is ${this.name}, ${value}, ${val ? val : 'none'}`)
  }
}
const obj_ = { name: 'ysx' }
const test = obj.say.bind(obj_)
test('11', '22')
