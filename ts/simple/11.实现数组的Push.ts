// 在类型系统里实现通用的 Array.push 。
// type Result = Push<[1, 2], '3'> // [1, 2, '3']


// type Push<T extends unknown[], U> = T extends [...any, U] ? T : [...T, U];
type Push<T extends any[], U> = [...T, U]; // 简单的实现
type Result = Push<[1, 2], 1>;
const arr: Result = [1, 2, 1];