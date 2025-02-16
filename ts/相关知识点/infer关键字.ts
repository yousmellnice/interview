// ### infer 的使用

// #### 介绍
// 顾名思义，`infer` 的意思是 判断、推断的意思；也就是说可以通过`infer`来获取某个类型中某个部分的类型

type X = 'X';
type Y = 'Y';
type infer<T, U> = T extends U ? X : Y;

// 语法限制如下：
// 1. `infer` 只能在条件类型的 `extends` 子句中使用
// 2. `infer` 得到的类型只能在 `true` 语句中使用，即 `x` 中使用

// #### 推断数组（或者元祖）的类型

// ##### 使用方法

type InferArray<T> = T extends (infer U)[] ? U : never;
type testArray = string[];
type result = InferArray<testArray>;
let inferArr: result = 'ysn';