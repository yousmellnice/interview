// function flattern (arr) {
//   let result = []
//   arr.map(item => {
//     if (Array.isArray(item)) {
//       result = [...result, ...flattern(item)]
//     } else {
//       result.push(item)
//     }
    
//   })
//   return result
// }

// function flattern(arr) {
//   return arr.reduce((left, right) => {
//     return left.concat(Array.isArray(right) ? flattern(right) : right)
//   }, [])
// }

// function flattern(arr) {
//   if (!Array.isArray(arr)) {
//     return false
//   }
//   let result = []
//   arr.map(item => {
//     if (Array.isArray(item)) {
//       result = [...result, ...flattern(item)]
//     } else {
//       result.push(item)
//     }
//   })
//   return result
// }

// function flattern(arr) {
//   return arr.reduce((res, cur) => {
//     return res.concat(Array.isArray(cur) ? flattern(cur) : cur)
//   }, [])
// }

const arr = [1, [2], [3, [4]]]
console.log(flattern(arr))