/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-08-14 21:12:46
 * @LastEditors: yushennan yousmellnice@foxmail.com
 * @LastEditTime: 2022-09-02 09:30:36
 * @FilePath: /ts/this.js
 * @Description: 
 * 
 */
const person = {
  name: '张三',
  getName() {
    return this.name;
  },
  getName1: () => {
    return this.name;
  }
}
console.log(person.getName());
console.log(person.getName1());

// const fn1 = () => {
//   console.log('arguments', arguments)
// }
// fn1(100, 200)

// function fn2(){
//   console.log('arguments', arguments)
// }
// fn2(100, 200)

// const fn3 = (...values) => {
//   console.log('values', values)
// }
// fn3(100, 200)

function test(list) {
  if (list?.length === 0) {
    return []
  }
}

console.log(test(null));
