// function mockInstanceof(left, right) {
//   if (typeof left !== 'object' || left === null) {
//     return false
//   }
//   while (true) {
//     if (left === null) {
//       return false
//     }
//     if (left.__proto__ === right.prototype) {
//       return true
//     }
//     left = left.__proto__
//   }
// }
// function instanceOf(left, right) {
//   if (left === null) {
//     return false
//   }
//   // 循环迭代往上找对象
//   while(left) {
//     if (left.__proto__ === right.prototype) {
//       return true
//     }
//     // 通过原型链继续往上找
//     left = left.__proto__
//   }
// }

// function instan(left, right) {
//   if (left === null) {
//     return false
//   }
//   while (left) {
//     if (left.__proto__ === right.prototype) {
//       return true
//     }
//     left = left.__proto__
//   }
//   return false
// }

function instanceOf(left, right) {
  if (left === null) {
    return false
  }
  while(left) {
    if (left.__proto__ === right.prototype) {
      return true
    }
    left = left.__proto__
  }
  return false
}

console.log(instanceOf(Array, Object));