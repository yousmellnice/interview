// 实现内置的Exclude <T, U>类型，但不能直接使用它本身。

type MyExclue<T, U> = T extends U ? never : T;

// never 表示返回的空类型

// 用T继承 U，则说明 T中含有U 的类型，如果不包含，则直接返回T

type exResult = MyExclue<'x' | 'y', 'y'>;
const re: exResult = 'x';