// const render = (key, value) => {
//   console.log(`变化的key值：${key}, value：${value}`)
// }

// // 递归执行
// const reactive = obj => {
//   if (typeof obj === 'object') {
//     for(key in obj) {
//       defineReactive(obj, key, obj[key])
//     }
//   }
// }

// const defineReactive = (obj, key, val) => {
//   reactive(val)
//   Object.defineProperty(obj, key, {
//     get() {
//       return val
//     },
//     set(newVal) {
//       if (newVal === val) {
//         return
//       }
//       val = newVal
//       // 模拟触发渲染函数
//       render(key, val)
//     }
//   })
// }


const render = (key, value) => {
  console.log(`${key}值变更为${value}`)
}

const defineReactive = (obj, key, val) => {
  reactive(val)
  Object.defineProperty(obj, key, {
    get() {
      return val
    },
    set(newVal) {
      if (newVal === val) {
        return
      }
      val = newVal
      render(key, val)
    }
  })
}

const reactive = obj => {
  if (typeof obj === 'object') {
    for(key in obj) {
      defineReactive(obj, key, obj[key])
    }
  }
}

let obj1 = { name: 'ysn' }
reactive(obj1)
obj1.name = 'hello'
obj1.name = 'kobe'