// let time
// function mockInterval(fun, delay, ...arg) {
//   let time
//   function mock() {
//     time = setTimeout(() => {
//       fun.call(this, arg)
//       mock()
//     }, delay)
//   }
//   mock()
//   return time
// }
function mockInterval(fun, timeout, ...args) {
  let timer = null
  const interval = () => {
    timer = setTimeout(() => {
      fun.call(this, args)
      interval()
    }, timeout)
  }
  interval()
  return () => clearTimeout(timer)
}

function mockSetTimeout(fun, time, ...args) {
  let timer = null
  const timeout = () => {
    timer = setInterval(() => {
      clearInterval(timer)
      fun.call(this, args)
    }, time)
  }
  timeout()
  return () => clearInterval(timer)
}

let time = mockSetTimeout(() => {
  console.log(1)
}, 1000)
