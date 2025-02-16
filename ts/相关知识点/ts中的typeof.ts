// typeof 就是获取 ts 的类型
interface Person {
  name: string;
  age: number;
  lover: string;
}

const son: Person = {
  name: 'ysn',
  age: 20,
  lover: 'haha'
}
type newType = { money: number } & typeof son;

const son2: newType = {
  name: 'ysn',
  age: 20,
  lover: 'haha',
  money: 2000
}