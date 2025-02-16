// es6 中的类
class Animal {
  public name
  constructor(name: string) {
    this.name = name
  }
  sayHi(): string {
    return `my name is ${this.name}`
  }
}
let a1 = new Animal('dog')
// 类的继承
class Cat extends Animal {
  constructor(name: string) {
    super(name) // super表示调用父类的constructor的方法
  }
  sayHi(): string {
    return `son ${super.sayHi()}`
  }
}
let c = new Cat('cc')

// 存取器
class Animal2 {
  constructor(name: string) {
    this.name = name
  }
  get name() {
    return 'Jack'
  }
  set name(value: string) {
    console.log(`setter: ${value}`);
  }
}
let a2 = new Animal2('ysn')
console.log(a2.name);

// TypeScript 中类的用法
// public private 和 protected
// public 修饰的属性是公有的，可以在任何地方被访问，默认所有的属性和方法都是public
// private 表示私有变量，不允许在声明他的类的外部访问
// protected 修饰的属性是受保护的，它和private类似，区别是它在子类中也是允许被访问
class Animal3 {
  protected name: string;
  constructor(name?: string) {
    this.name = name || 'null';
  }
}
class sonAnimal extends Animal3 {
  private age: number
  constructor(name: string, age: number) {
    super(name)
    this.age = age
  }
  sayHello(): string {
    return `my father 'name is ${Animal3.name}, my age is ${this.age}`
  }
}
const a = new sonAnimal('animal', 20)

// 接口继承接口
interface school {
  schoolName: string;
}
interface className extends school {
  className?: string;
}
const schools: className = {
  schoolName: 'xxxx'
}

// 接口继承类
// 为什么 TypeScript 会支持接口继承类呢？
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
  }
}
interface Point3d extends Point {
  z: number;
}
let point3d: Point3d = {x: 1, y: 2, z: 3};
// 实际上，当我们在声明 class Point 时，除了会创建一个名为 Point 的类之外，
// 同时也创建了一个名为 Point 的类型（实例的类型）。
// 所以我们既可以将 Point 当做一个类来用（使用 new Point 创建它的实例）：

// 换句话说，声明 Point 类时创建的 Point 类型只包含其中的实例属性和实例方法，并不包含构造函数





