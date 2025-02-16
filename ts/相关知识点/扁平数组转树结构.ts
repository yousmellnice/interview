/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-07-24 01:36:08
 * @LastEditors: yushennan yousmellnice@foxmail.com
 * @LastEditTime: 2022-07-24 16:08:25
 * @FilePath: /ts/扁平数组转树结构.ts
 * @Description: 
 * 
 */
interface deps {
  id: number;
  name: string;
  pid: number;
  children?: deps[];
}
let departsTs: Array<deps> = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
  {id: 6, name: '部门6', pid: 0},
  {id: 7, name: '部门7', pid: 6}
]
type itemMapTs = {
  [key: number]: any;
};

function getChildrenTs(list: Array<deps>): Array<deps> {
  let result: Array<deps> = [];
  let itemMap: itemMapTs = {};
  for(const item of list) {
    itemMap[item.id] = { ...item, children: [] };
  }
  for(const item of list) {
    const id = item.id;
    const pid = item.pid;
    if (pid === 0) {
      result.push(itemMap[id]);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: []
        }
      } else {
        itemMap[pid].children.push(itemMap[id]);
      }
    }
  }
  return result;
}
const resultTs = getChildrenTs(departsTs);
console.log(resultTs);