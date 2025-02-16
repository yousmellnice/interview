/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-06-21 17:37:59
 * @LastEditors: yushennan yousmellnice@foxmail.com
 * @LastEditTime: 2022-06-21 17:39:46
 * @FilePath: /ts/元组_3.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
// 元组起源于函数编程语言（如 F#），这些语言中会频繁使用元组。

let tom: [string, number] = ['100元', 100]
// tom = ['100']