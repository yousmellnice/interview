/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-08-28 01:43:20
 * @LastEditors: yushennan yousmellnice@foxmail.com
 * @LastEditTime: 2022-08-28 19:34:17
 * @FilePath: /ts/ts类型题-简单/5.获取元祖长度.ts
 * @Description: 
 * 
 */
// 创建一个通用的Length，接受一个readonly的数组，返回这个数组的长度
type Length<T extends readonly any[]> = T['length'];

type teslaModel = ['model3', 'modely', 'modelx', 'models', 'model'];
type teslaLength = Length<teslaModel>