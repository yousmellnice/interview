// 实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。
const foo = (arg1: string, arg2: boolean): void => {}
// type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

type Myparameters<T> = T extends (...args: infer P) => void ? P : never;
type FunctionParamsType = Myparameters<typeof foo> // [arg1: string, arg2: number]