// 在ts中，数组类型有多种定义方式，比较灵活

// 「类型 + 方括号」表示法
// let numArray: number[] = [1, 2, 3]
// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
// let strArray: string[] = ['1', '2', '3', 4]

// 数组泛型
let array: Array<number | string> = [1, '2', '3', 4]

// 用接口表示数组
// 一般情况下不会用这种方式来描述数组
interface interfaceArray {
  [index: number]: number | string
}
let iArray: interfaceArray = [1, '2', 3]

// 类数组
// 类数组（Array-like Object）不是数组类型，比如 arguments：
// function sum() {
//   let args: number[] = arguments; //类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 26 项；说明不是数组，没有数组对应的Api
// }

// any 在数组中的应用
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
