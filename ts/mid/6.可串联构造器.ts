// 在 JavaScript 中我们经常会使用可串联（Chainable/Pipeline）的函数构造一个对象，但在 TypeScript 中，你能合理的给它赋上类型吗？

// 在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。

// 你需要提供两个函数 option(key, value) 和 get()。在 option 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 get 获取最终结果。

// 例如

declare const config: Chainable;

type Chainable<T = {}> = {
    option: <K extends string, V>(key: K extends keyof T ? 
        V extends T[K] ? never : K 
        : K, value: V) => Chainable<Omit<T, K> & Record<K, V>>
    get: () => T
}

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// 期望 result 的类型是：
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

// type demo = {
//     name: string,
//     age: number,
//     school: string
// }
// type NewDemo = Record<string, number>

export default void 0