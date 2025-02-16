class newPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  
  constructor(excutor) {
    this.status = newPromise.PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = value => {
      if (this.status === newPromise.PENDING) {
        this.status = newPromise.FULFILLED
        this.value = value
        this.onFulfilledCallbacks.forEach(cb => cb())
      }
    }

    const reject = reason => {
      if (this.status === newPromise.PENDING) {
        this.status = newPromise.REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(cb => cb())
      }
    }

    try {
      excutor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err } //抛出错误，让后面的then中获取到
    const promise2 = new newPromise((resolve, reject) => {
      // 成功的回调
      if (this.status === newPromise.FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            this.resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      // 拒绝
      if (this.status === newPromise.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            this.resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      // 等待状态
      if (this.status === newPromise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              this.resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              this.resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
      }
    })
    return promise2 //值穿透
  }

  resolvePromise(promise2, x, resolve, reject) {
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
            this.resolvePromise(newPromise, y, resolve, reject) //存在递归解析
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
  
  catch(reject) {
    return this.then(null, reject)
  }

  static all(promises) {
    let count = 0
    const length = promises.length
    let result = []
    return new Promise((resolve, reject) => {
      for (let i = 0; i < length; i++) {
        Promise.resolve(promises[i]).then(res => {
          result[i] = res
          count++
          if (count === length) {
            resolve(result)
          }
        }).catch(e => {
          reject(e)
        })
      }
    })
  }
}


const promise = new newPromise((resolve, reject) => {
  reject(111);
}).catch(res => {
  console.log(res)
})
// const promise1 = new newPromise((resolve, reject) => {
//   resolve('1');
// })
// const promise2 = new newPromise((resolve, reject) => {
//   resolve('2');
// })
// const promise3 = new newPromise((resolve, reject) => {
//   resolve('3');
// })

// newPromise.all([promise1, promise2, promise3]).then(res => {
//   console.log(res)
// })
