class myPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(executor) {
    this.status = myPromise.PENDING
    this.value = null
    this.reason = null
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = value => {
      if (this.status === myPromise.PENDING) {
        this.status = myPromise.FULFILLED
        this.value = value
        this.onFulfilledCallbacks.forEach(cb => cb())
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
    const promise2 = new myPromise((resolve, reject) => {
      if (this.status === myPromise.FUIFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
      if (this.status === myPromise.REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
      if (this.status === myPromise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason)
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
  if (x === newPromise) {
    reject(new TypeError('不可重复引用 promise 对象'))
  }
  let called
  if ((typeof x === 'object' || x !== null) && typeof x === 'function') {
    try {
      const then = x.then
      if (typeof then === 'function') {
        then(x, y => {
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

const promise = new myPromise((resolve, reject) => {
  reject('失败');
}).then().then().then(data=>{
  console.log(data);
},err=>{
  console.log('err',err);
})