/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-10-09 16:55:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-04 00:05:50
 * @FilePath: /ts/ts类型题-简单/8.实现if类型.ts
 * @Description: 
 * 
 */
// 实现一个 IF 类型，它接收一个条件类型 C ，一个判断为真时的返回类型 T ，
// 以及一个判断为假时的返回类型 F。 C 只能是 true 或者 false， T 和 F 可以是任意类型。

type If<C extends boolean, T, F> = C extends true ? T : F;

type A = If<false, 'a', 'b'>;

const a: A = 'b';


