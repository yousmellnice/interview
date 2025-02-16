/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-08-20 23:37:26
 * @LastEditors: yushennan yousmellnice@foxmail.com
 * @LastEditTime: 2022-08-20 23:37:56
 * @FilePath: /ts/interface和type的区别.ts
 * @Description: 
 * 
 */
// interface：
// 同名的 interface 自动聚合，也可以跟同名的 class 自动聚合
// 只能表示 object、class、function 类型


// type:
// 不仅仅能够表示 object、class、function
// 不能重名（自然不存在同名聚合了），扩展已有的 type 需要创建新 type
// 支持复杂的类型操作