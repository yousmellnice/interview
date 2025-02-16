// function deepClone(obj, hash = new WeakMap()) {
//   if (obj === null) {
//     return null
//   }
//   // 正则
//   if (obj instanceof RegExp) {
//     return new RegExp(obj)
//   }
//   // 时间
//   if (obj instanceof Date) {
//     return new Date(obj)
//   }
//   // 如果不是对象类型直接返回
//   if (typeof obj !== 'object') {
//     return obj
//   }
//   // 防止循环引用的情况
//   // 使用weakmap的原因是，如果没用到就会进行垃圾回收防止内存泄露
//   if (hash.has(obj)) {
//     return hash.get(obj)
//   }
//   let result = Array.isArray(obj) ? [] : {}
//   // 每一次进行赋值weakmap
//   hash.set(obj, result)
//   Reflect.ownKeys(obj).forEach(key => {
//     result[key] = deepClone(obj[key], hash)
//   })
//   return result
// }


// function deepClone(obj, hash = new WeakMap()) {
//   if (obj === null) {
//     return null
//   }
//   if (obj instanceof RegExp) {
//     return new RegExp(obj)
//   }
//   if (obj instanceof Date) {
//     return new Date(obj)
//   }
//   if (typeof obj !== 'object') {
//     return obj
//   }
//   // 防止循环引用对象的情况
//   if (hash.has(obj)) {
//     return hash.get(obj)
//   }
//   let result = Array.isArray(obj) ? [] : {}
//   // 每一次都赋值，防止当前对象、数组被循环引用
//   hash.set(obj, result)
//   // 最后递归
//   Reflect.ownKeys(obj).forEach(key => {
//     result[key] = deepClone(obj[key], hash)
//   })
//   return result
// }

// function deepClone(obj, hash = new WeakMap()) {
//   if (obj === null) {
//     return null
//   }
//   if (obj instanceof RegExp) {
//     return new RegExp(obj)
//   }
//   if (obj instanceof Date) {
//     return new Date(obj)
//   }
//   if (typeof obj !== 'object') {
//     return obj
//   }
//   if (hash.has(obj)) {
//     return hash.get(obj)
//   }
//   let result = Array.isArray(obj) ? [] : {}
//   hash.set(obj, result)
//   Reflect.ownKeys(obj).forEach(key => {
//     result[key] = deepClone(obj[key], hash)
//   })
//   return result
// }

// function deepClone(obj, hash = new WeakMap()) {
//   if (obj === null) {
//     return null
//   }
//   if (obj instanceof RegExp) {
//     return new RegExp(obj)
//   }
//   if (obj instanceof Date) {
//     return new Date(obj)
//   }
//   if (typeof obj !== 'object') {
//     return obj
//   }
//   if (hash.has(obj)) {
//     return hash.get(obj)
//   }

//   let result = Array.isArray(obj) ? [] : {}
//   hash.set(obj, result)
//   Reflect.ownKeys(obj).forEach(key => {
//     result[key] = deepClone(obj[key], hash)
//   })
//   return result
// }

// function deepClone(obj, hash = new WeakMap()) {
//   if (obj === null) {
//     return null
//   }
//   if (obj instanceof RegExp) {
//     return new RegExp(obj)
//   }
//   if (obj instanceof Date) {
//     return new Date(obj)
//   }
//   if (typeof obj !== 'object') {
//     return obj
//   }
//   if (hash.has(obj)) {
//     return hash.get(obj)
//   }
//   let result = Array.isArray(obj) ? [] : {}
//   hash.set(obj, result)
//   Reflect.ownKeys(obj).forEach(key => {
//     result[key] = deepClone(obj[key], hash)
//   })
//   return result
// }

function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) {
    return null
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }
  if (typeof obj !== 'object') {
    return obj
  }
  if (hash.has(obj)) {
    return hash.get(obj)
  }
  let result = Array.isArray(obj) ? [] : {}
  hash.set(obj, result)
  Reflect.ownKeys(obj).forEach(key => {
    result[key] = deepClone(obj[key], hash)
  })
  return result
}

let o1 = { name: 'ysn' }
const o2 = o1
const o3 = deepClone(o1)
o2.name = 'change'
console.log(o1, o2, o3);