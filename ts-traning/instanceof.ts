/**
 * 手动实现 instanceof 操作符
 * @param obj 要检查的对象
 * @param constructor 构造函数
 * @returns boolean 是否为该构造函数的实例
 */
function myInstanceof(obj: any, constructor: Function): boolean {
    // 处理 null 和 undefined
    if (obj === null || obj === undefined) {
        return false;
    }

    // 获取对象的原型
    let proto = Object.getPrototypeOf(obj);
    // 获取构造函数的 prototype 对象
    const prototype = constructor.prototype;

    // 沿着原型链向上查找
    while (proto !== null) {
        if (proto === prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }

    return false;
}

// 测试用例
class Animal {
    constructor(public name: string) {}
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
}

const dog = new Dog('旺财');
const promise = Promise;

console.log(myInstanceof(dog, Dog));        // true
console.log(myInstanceof(dog, Animal));     // true
console.log(myInstanceof(dog, Object));     // true
console.log(myInstanceof(dog, Array));      // false
console.log(myInstanceof(null, Object));    // false
console.log(myInstanceof(undefined, Object)); // false
console.log(myInstanceof(promise, Animal)); // false

export default myInstanceof;
