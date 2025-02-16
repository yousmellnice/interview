/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-08-20 11:12:17
 * @LastEditors: yushennan yousmellnice@foxmail.com
 * @LastEditTime: 2022-08-20 11:25:52
 * @FilePath: /ts/ts类型题-简单/实现Readonly.ts
 * @Description: 
 * 
 */
// 不要使用内置的Readonly<T>，自己实现一个。

// 该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。

// 也就是不可以再对该对象的属性赋值。

type MyReadonly<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
}
interface ToDo {
  title: string;
  description: string;
}
const todo: MyReadonly<ToDo> = {
  title: 'haha',
  description: 'biaoshu'
}
// todo.title = 'ysn'; 不能修改