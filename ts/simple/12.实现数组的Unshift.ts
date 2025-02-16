// 实现类型版本的 Array.unshift。
// type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
type Unshift<T extends unknown[], U> = [U, ...T];
type typeUnshift = Unshift<[1, 2], 3>;
const arrShift: typeUnshift = [3, 1, 2];