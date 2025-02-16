const arr = [1, 23, 23, 23, 23, 45, 56, 6, 7, 1, 56, 13, 12, 12, 7]
const obj = {
  arr: null
}
// function uniqueArr(arr) {
//   let result = []
//   let hash = new Map()
//   for (let index = 0; index < arr.length; index++) {
//     if (!hash.has(arr[index])) {
//       result.push(arr[index])
//       hash.set(arr[index])
//     }
//   }
//   return result
// }
// console.log(uniqueArr(arr))

if (obj.arr?.length > 0) {
  console.log(1)
}
