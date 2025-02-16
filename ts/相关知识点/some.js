/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-09-06 16:12:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-12 20:39:09
 * @FilePath: /ts/some.js
 * @Description:
 *
 */
const list = [1, 2, 3, 4, 5, 6];
// const list = null;
list.some(item => {
  console.log(item);
  if (item === 3) {
    return true;
  }
})
console.log('xx');