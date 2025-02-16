/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-06-21 17:42:42
 * @LastEditors: yushennan yousmellnice@foxmail.com
 * @LastEditTime: 2022-06-23 12:44:52
 * @FilePath: /ts/4.枚举.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 枚举
// 枚举类型 用于取值被限定在一定范围内的场景 例如 一周七天、颜色限定为红蓝绿
enum Week {
  sun = 0, // 手动赋值
  mon = 1,
  tue = 0, // 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的
  wed,
  thus,
  fri,
  sat
}

// 常数项和计算所得项§
// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）
enum Color {Red, Green, Blue = "bluehh".length}; // 这样定义的话是不会报错，length为计算所得项；
// 但是如果紧跟在 “计算所得项” 后面的是为手动赋值的项，那么他就会因为无法获取初始值而报错；
// enum Color {Blue = "bluehh".length, Red, Green, };  // 枚举成员必须具有初始化表达式




// declare 定义的类型只会用于编译时的检查，编译结果中会被删除

