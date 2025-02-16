// 在类型系统里实现 JavaScript 内置的 Array.concat 方法，这个类型接受两个参数，
// 返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

// 例如
// type Result = Concat<[1], [2]> 

// 声明一个未知的元组
type Tuple = readonly unknown[];
// 继承这个元组，然后合并成一个新的数组
type Concat<T extends Tuple, U extends Tuple> = [...T, ...U];

// 或者
// type Concat<T extends any[], U extends any[]> = [...T, ...U];

type Result = Concat<[1], [2]> 
let arr: Result = [1, 2];
