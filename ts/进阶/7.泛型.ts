/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-05-29 12:53:22
 * @LastEditors: yushennan yousmellnice@foxmail.com
 * @LastEditTime: 2022-07-23 21:56:25
 * @FilePath: /ts/7.泛型.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 泛型是指定义函数、接口或类的时候，不预先指定的类型，而在使用的时候再指定类型的一种特性
function createdArray<T>(length: number, value: T): Array<T> {
  let result: Array<T> = [];
  for (let index = 0; index < length; index++) {
    result.push(value);
  }
  return result;
}
const arr = createdArray<number>(3, 2);

// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
const arr2 = swap(['7', 2]);

// 泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意操作它的属性或方法
interface lengthWise {
  length: number;
}
function logIdentity<T extends lengthWise>(arg: T): T {
  console.log(arg.length); // 会报错，因为不一定存在length
  return arg;
}
logIdentity('1000');
// 使用extends 继承，约束了泛型T必须符合接口的形状，也就是必须包含length 属性


// 多个类型参数也可以互相约束：
function copyFieds<T extends U, U>(target: T, source: U): T {
  for(let item in source) {
    target[item] = (<T>source)[item];
  }
  return target
}
const target = {
  a: 2, b: 2, c: 0, d: 0
}
const source = {
  c: 3, d: 4
}
copyFieds(target, source)


// 泛型接口
// 可以使用接口的形式来定义一个函数需符合的形状
interface sayHelloFun {
  (name: string, age: number): string;
}
let sayHello: sayHelloFun;
sayHello = (value, age): string => {
  return `my name is ${value}, ${age} years old.`
}
// 当然，也可以使用含有泛型的接口来定义函数的形状
interface ceratArrayFun {
  <T>(length: number, value: T): Array<T>;
}
let ceratArray: ceratArrayFun;
ceratArray = <T>(length: number, value: T): Array<T> => {
  let result: T[] = [];
  for (let index = 0; index < length; index++) {
    result.push(value[index]);
  }
  return result;
}

// 进一步，可以把泛型参数提前到接口名上
interface creatTempArray<T> {
  (length: number, value: T[]): Array<T>;
}
let creatTempArray: creatTempArray<string>;
creatTempArray = function<T>(length: number, value: T[]): Array<T> {
  let result: T[] = [];
  for (let index = 0; index < length; index++) {
    result.push(value[index]);
  }
  return result;
}
creatTempArray(2, ['1', '2', '3']);


// 泛型类


// 泛型参数的默认类型