class myPromise {
  static PENDING = 'pending'
  static FUIFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  static resolve = value => {
    return new myPromise(resolve => {
      resolve(value)
    })
  }

  static reject = reason => {
    return new myPromise((resolve, reject) => {
      reject(reason)
    })
  }


  constructor(executor) {
    this.status = myPromise.PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfillCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = value => {
      if (this.status === myPromise.PENDING) {
        this.status = myPromise.FULFILLED
        this.value = value
        this.onFulfillCallbacks.forEach(cb => cb())
      }
    }

    const reject = reason => {
      if (this.status === myPromise.PENDING) {
        this.status = myPromise.REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(cb => cb())
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
    let promise2 = new myPromise((resolve, reject) => {
      if (this.status === myPromise.FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }

      if (this.status === myPromise.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }

      if (this.status === myPromise.PENDING) {
        this.onFulfillCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      }
    })

    return promise2
  }
}

function resolvePromise(newPromise, x, resolve, reject) {
  if (newPromise === x) {
    reject(new TypeError('promise 不能重复引用'))
  }
  let called
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return
          called = true
          resolvePromise(newPromise, y, resolve, reject)
        }, r => {
          if (called) return
          called = true
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}
myPromise.prototype.catch = function(cb) {
  return this.then(null, cb)
}


function promiseAll(promise) {
  let result = []
  const length = promise.length
  let count = 0
  return new Promise((resolve, reject) => {
    for (let i = 0; i < length; i++) {
      Promise.resolve(promise[i]).then(res => {
        result[i] = res
        count++
        if (count === length) {
          resolve(result)
        }
      }).catch(er => {
        reject(er)
      })
    }
  })
}

promiseAll([myPromise.resolve(1), myPromise.resolve(2), myPromise.resolve(3)]).then(res => {
  console.log(res)
})

// Promise.resolve(Promise.resolve(1)).then(res => {
//   console.log(res)
// })
// const promise = new myPromise((resolve, reject) => {
//   reject('yes');
// }).then().then().then(data=>{
//   console.log(data);
// },err =>{
//   console.log('err', err);
// })
// myPromise.reject(2).then().catch(res => {
//   console.log(res)
// })

Promise.reject(2).then().then().catch(res => {
  console.log(res)
})

