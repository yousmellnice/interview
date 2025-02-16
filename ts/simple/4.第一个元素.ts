/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-08-28 01:43:20
 * @LastEditors: yushennan yousmellnice@foxmail.com
 * @LastEditTime: 2022-08-28 01:50:09
 * @FilePath: /ts/ts类型题-简单/4.第一个元素.ts
 * @Description: 
 * 
 */
// 实现一个通用First<T>，它接受一个数组 T 并返回它的第一个元素的类型

// type First<T extends any[]> = T extends never[] ? never : T[0];
type First<T extends any[]> = T['length'] extends 0 ? never : T[1]

type arr = ['1', 2, 3];
type arrResult = First<arr>;
const arr1: arrResult = 2;
