/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-09-25 00:36:56
 * @LastEditors: yushennan yousmellnice@foxmail.com
 * @LastEditTime: 2022-09-25 18:32:58
 * @FilePath: /ts/ts类型题-简单/7.awaited.ts
 * @Description: 
 * 
 */
// 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。
// 在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

type myPromise = Promise<string>;

type awaitResult = MyAwaited<myPromise>;

// 这里需要掌握 infer 的作用

// 获取数组、元祖的类型
type InferArray<T> = T extends (infer U)[] ? U : never;
type testArray = number[];
type result = InferArray<testArray>;