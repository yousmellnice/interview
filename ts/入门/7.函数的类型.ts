// 函数声明
function logMoney(left: number, right: number): number {
  return left + right
}
const money = logMoney(10, 20)

// 函数表达式
const mySum = function(left: number, right: number): number {
  return left + right
}
// 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，
// 而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
// 如果需要我们手动给 mySum 添加类型，则应该是这样：
const mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

// 用接口定义函数的形状
interface funType {
  (name: string, age: number): string
}
let sayName: funType;
sayName = function(name: string, age: number): string {
  return `my name is ${name}, ${age} 岁`
}
console.log(sayName('ysn', 20));

// 可选参数
// 可选参数要在必须参数后面
function buildName(oldName: string, newName?: string): string {
  return `${oldName}, ${newName}`
}

// 参数默认值
function getName(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}
let tomcat = getName('Tom', 'Cat');
let tom = getName('Tom');

// 剩余参数
// rest 参数只能是最后一个参数，关于 rest 参数
function logName(newName: any[], ...items: any[]) {
  console.log(items);
}
logName([], 1, 2, 3)

// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}