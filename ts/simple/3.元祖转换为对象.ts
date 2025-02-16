/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-08-20 12:00:09
 * @LastEditors: yushennan yousmellnice@foxmail.com
 * @LastEditTime: 2022-08-20 23:38:21
 * @FilePath: /ts/ts类型题-简单/元祖转换为对象.ts
 * @Description: 
 * 
 */
// 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

// 这道题需要知道两点
// 1. 如何表达数组中的元素 T[number]
// 2。 如何表达数组中的类型 (keyof any)[] 或 PropertyKey[] 或 any[]

// PropertyKey 为内置属性
// 在源码中为 declare type PropertyKey = string | number | symbol;

// type TupleToObject<T extends readonly PropertyKey[]> = {
//   [K in T[number]]: K;
// }
type TupleToObject<T extends readonly (keyof any)[]> = {
  [k in T[number]]: k;
}

const tuple = ['tesla', 'model3 ', 'model y'] as const;
type result = TupleToObject<typeof tuple>;


// 1、typeof 在ts中的应用
// typeof 可以用来获取一个对象或者变量的类型
type PersonType = {
  name: string;
  age: number;
  text: string;
}
const person1: PersonType = {
  name: 'ysn',
  age: 20,
  text: 'hello'
}
type Type2 = typeof person1
// type Type2 = {
//   name: string;
//   age: number;
//   text: string;
// }
// 还可以获取嵌套对象的类型，除此之后，也可用来获取函数对象的类型


// 2、const 断言
// 在 ts 类型中，当使用了as const 断言，将会发出以下几种信号
// - 表达式中的任何字面量类型 都不应该被扩展
// - 对象字面量的属性，将使用 readonly 修饰
// - 数组字面量将变成 readonly 元祖


// 3、typeof 和 keyof
// - typeof 用来获取某个变量或对象的类型
// - keyof 用来获取某种类型的所有键，返回类型是联合类型