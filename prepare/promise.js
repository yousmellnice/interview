// 1. 声明一个promise类
// 2. 定义promise的三种状态 声明成功的原因 失败的原因 成功队列 失败队列
// 3. 声明成功的方法 失败的方法
// 4. 定义then的回调方法 
        // 解决异步操作的问题
        // 重点:then的链式调用 & 值穿透特性
        // 结合promise a+规范梳理一下思路
        // 1. then的参数 resolve 和reject可以缺省，如果不是函数，将其忽略，以及可以在then中取到之前返回的值


class dPromise {
  // 首先定义三种状态
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(excutor) {
    this.status = dPromise.PENDING //初始化状态
    this.value = undefined //成功的值
    this.reason = undefined //失败的原因
    this.onFulfilledCallbacks = [] //成功队列
    this.onRejectedCallbacks = [] //失败队列

    // 声明成功的方法
    const resolve = value => {
      // 只有pending状态才可以更新状态，防止被调用两次
      if (this.status === dPromise.PENDING) {
        this.status = dPromise.FULFILLED
        this.value = value
        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }
    // 声明失败的方法
    const reject = reason => {
      if (this.status === dPromise.PENDING) {
        this.status = dPromise.REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    // 立即执行
    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  // 1. onFulfilled， onRejected都是可选参数：如果不是函数则忽略他
  // 2. 每次调用then 都会返回一个新的promise
  // 3. 如果onfulfilled、onreject返回的是 值，则运行resolvePromise方法

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err } //抛出错误，让后面的then中获取到
    const promise2 = new dPromise((resolve, reject) => {
      // 成功的回调
      if (this.status === dPromise.FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      // 拒绝
      if (this.status === dPromise.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      // 等待状态
      if (this.status === dPromise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
      }
    })
    return promise2 //值穿透
  }
}

// 承诺解决程序
// 承诺解决过程是一个抽象操作，将承诺和值作为输入（ newPromise, x ）
// 1. 第一步要先判断 newPromise 和 x 是不是引用同一个对象 如果是，则以 TypeError 为理由拒绝
// 2. 如果有多次调用同一个参数，则第一个调用优先，其余的都将被忽略，所以声明一个标志位
// 3. 先判断 x 值是否是对象、函数，且不能为null，而后通过try catch 去捕获可能会出现的异常
// 4. 声明then = x.then 如果then是个函数或者对象 则将其返回的 resolve 或 reject抛出

function resolvePromise(newPromise, x, resolve, reject) {
  if (newPromise === x) {
    reject(new TypeError('promise 不可引用同一个对象'))
  }
  let called
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return
          called = true
          resolvePromise(newPromise, y, resolve, reject) //存在递归解析
        }, r => {
          if (called) return
          called = true
          reject(r)
        })
      } else {
        // 如果不是函数的时候 用promise 完成 
        resolve(x)
      }
    } catch (error) {
      // 捕获异常的过程也要防止重复调用
      if (called) return
      called = true
      reject(error)
    }
  } else {
    resolve(x)
  }
}
// function resolvePromise(newPromise, x, resolve, reject) {
//   if (newPromise === x) {
//     return reject(new TypeError('同一个引用对象不能循环引用'))
//   }
//   let called //函数只能被调用一次 通过一个标志位判断 如果可以反复调用则会乱透了
//   if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
//     try {
//       let then = x.then
//       if (typeof then === 'function') {
//         then.call(x, y => {
//           if (called) return
//           called = true
//           // 递归解析 因为promise中可能还有链式调用
//           resolvePromise(newPromise, y, resolve, reject)
//         }, r => {
//           if (called) return
//           called = true
//           // 如果失败了，就直接返回失败
//           reject(r)
//         })
//       }else {
//         // 如果x.then 是个普通值直接返回 resolve 作为结果
//         resolve(x)
//       }
//     } catch (err) {
//       if (called) return
//       called = true
//       reject(err)
//     }
//   } else {
//     // 如果x 也是个普通值 直接返回
//     resolve(x)
//   }
// }

// const p1 = new dPromise(resolve => {
//   setTimeout(() => {
//     resolve(1)
//   }, 100)
// })
// p1.then(res => {
//   console.log(res)
// })

const promise = new dPromise((resolve, reject) => {
  resolve('1');
}).then().then().then(data=>{
  console.log(data);
})