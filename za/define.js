// const obj = {
//   name: 'ysn'
// }
// Object.defineProperty(obj, '_name', {
//   set: function(value) {
//     this.name = value
//   },
//   get: function() {
//     return this.name + '1'
//   },
// })
// obj.name = 'zjj'

// let data = {
//   name:'小明',
//   _age:18
// }

// Object.defineProperty(data,'age',{
//   set:function(newAge){
//       this._age = newAge;
//       console.log(this.name+'现在'+newAge+'岁')
//   },
//   get:function(){
//       return this._age
//   }    
// })
// data._age = 20

var obj = {}

Object.defineProperty(obj,'book',{
  value: 'hhh',
  // 可以被修改值的
  writable: true,
  // 可以被枚举
  enumerable: true,
  // 可以被删除或重新定义特性
  configurable: true
})
// obj.book = 'ysn'
// console.log(obj.book)
// console.log(Object.keys(obj));

// 最重要的两个属性 set 和 get

const user = {
  name: 'yousmellnice'
}
const name = 'ysn'
Object.defineProperty(user, 'name', {
  get: function() {
    return name + 'jjjj'
  },
  set: function(newVal) {
    console.log(newVal)
  }
})
console.log(user.name)
user.name = 'kobe'

// get函数 用来获取值的时候进行调用

// set函数是 在赋值的时候进行调用 
