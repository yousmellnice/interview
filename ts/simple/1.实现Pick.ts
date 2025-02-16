/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-08-19 00:04:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-28 10:43:01
 * @FilePath: /ts/ts类型题-简单/实现Pick.ts
 * @Description:
 *
 */

// type MyPick<T, K extends keyof T> = {
//   [P in K]: T[P]
// }

// extends： 是扩展、继承的意思
// keyof： 获取类型里的值
// P 看做是 key值，
// 也就是从T 中过滤出属性 K

// interface Todo {
//   title: string;
//   name: string;
//   age: number;
// }

// type customerTodo = MyPick<Todo, 'title'>
// const todo: customerTodo = {
//   title: 'ysn'
// }

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
interface PickPersonType {
  name: string;
  age: number;
  title: string;
}
type CutomerPerson = MyPick<PickPersonType, "title" | "name">;

// type FuncType = () => void;

// const sayHello: FuncType = () => {
//     console.log("Hello Ts");
// };
