
const arr = [{ name: 'q' }, { name: 'w' }, { name: 'e' }, { name: 'r' }]

const obj = {
  name: '1',
  age: 23,
  lover: 'yyy',
  work: 'none'
}
// for(let key in arr) {
//   console.log(arr[key].name)
// }

// for(let key of arr) {
//   console.log(arr[key])
// }

// for(let key in obj) {
//   console.log(obj[key])
// }

// 总结
// for of 适应遍历数组  而for of遍历的是数组元素值。
// for in 适合遍历对象  for in遍历的是数组的索引（即键名）
var list,_list
list = _list = arr
console.log(list)
console.log(_list)
