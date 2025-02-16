// 9.1.1 创建空代理
// const target = {
//   id: '123'
// }
// const obj = {}
// const proxy = new Proxy(target, obj)
// console.log(proxy);

// target.id = '222'
// console.log(proxy);


// proxy.id = '333'
// console.log(target);

// 9.12 定义捕获器
// 使用代理的主要目的是可以定义捕获器。捕获器就是在处理程序对象中对应的“基本操作的拦截器”。
// 每个处理程序可以包含另个或多个捕获器，每个捕获器对应一种基本操作，可以直接或间接在代理
// 对象上调用。每次代理对象上调用这些基本操作时，代理可以在这些操作传播到目标对象前先调用
// 捕获器函数，从而拦截并修改响应的行为。

// const target = {
//   name: 'ysn'
// }
// const handler = {
//   // 捕获器在处理程序中以方法名为键名
//   get() {
//     return 'handel override'
//   }
// }
// const proxy = new Proxy(target, handler)
// console.log(target['name']); // 'ysn'
// console.log(proxy['name']); // 'handel override'
// 只有在代理对象上执行这些操作才会触发捕获器，在目标对象上执行这些操作仍然会产生正常行为

// 9.13 捕获器参数和反射API
// get() 捕获器会接收到目标对象、要查询的属性和代理对象三个参数
// const target = {
//   name: 'ysn',
//   age: 20
// }
// const handler = {
//   get(targer, property, receiver) {
//     return targer[property]
//   }
// }
// const proxy = new Proxy(target, handler)
// console.log(proxy.age)

// 所有的捕获器都可以基于自己的参数重建原始操作

// const target = {
//   name: 'ysn',
//   age: 20
// }
// const handler = {
//   get() {
//     // return Reflect.get(...arguments)
//     return Reflect.get
//   }
// }
// const proxy = new Proxy(target, handler)
// 如果真想创建一个可以捕获所有方法，然后将每个方法转发给对应反射API的空代理
// 那么甚至不需要定义处理程序对象
// const proxy = new Proxy(target, Reflect)
// console.log(proxy.age)
// console.log(target.age)

// const target = {
//   foo: 'bar',
//   baz: 'qux'
// };
// const handler = {
//   get(trapTarget, property, receiver) {
//     let decoration = '';
//     if (property === 'foo') {
//       decoration = '!!!';
//     }
//     return Reflect.get(...arguments) + decoration;
//   }
// };
// const proxy = new Proxy(target, handler);
// console.log(proxy.foo);
// console.log(proxy.baz);

// 9.14 捕获器不变式
// 捕获器几乎可以改变所有基本方法的行为，但是也不是没有限制
// 通常都会防止捕获器定义出现反常的行为

// 9.15 可撤销代理
// 有时候可能需要中断代理对象与目标对象之间的联系。对于使用 new Proxy()创建的代理来说
// 这种联系会再代理对象生命周期内一直持续存在
// revocable()方法支持撤销代理对象与目标对象的关联，且不可逆

// const target = {
//   name: 'ysn'
// }
// const handler = {
//   get() {
//     return 'hello'
//   }
// }

// const { proxy, revoke } = Proxy.revocable(target, handler)
// console.log(proxy.name);
// console.log(target.name);
// revoke();

// 9.16 实用反射API

// 9.17 代理另一个代理
// const target = {
//   name: 'ysn'
// }
// const firstProxy = new Proxy(target, {
//   get() {
//     console.log('first');
//     return Reflect.get(...arguments)
//   }
// })
// const secondProxy = new Proxy(firstProxy, {
//   get() {
//     console.log('second');
//     return Reflect.get(...arguments)
//   }
// })
// console.log(firstProxy.name);

// 9.18 代理的问题与不足
// 1. 代理中的this
// 2. 代理与内部槽位
// 代理与内置引用类型（比如Array）的实例通常可以很好地协同

// 9.2 代理捕获器与反射方法

// 9.2.1 get()
// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   get(target, property, receiver) {
//     console.log('get()');
//     return Reflect.get(...arguments)
//   }
// });
// proxy.id

// 9.2.2 set() 捕获器会再设置属性值操作中被调用
// const myTarget = {
//   name: 'ysn'
// }; 
// const proxy = new Proxy(myTarget, { 
//  set(target, property, value, receiver) { 
//  console.log('set()', value, receiver); 
//  return Reflect.set(...arguments) 
//  } 
// }); 
// proxy.name = 'bar';

// 9.2.3 has() 判断是否存在属性
// const myTarget = {
//   name: 'ysn'
// };
// const proxy = new Proxy(myTarget, {
//   has(target, property) {
//     console.log('has()');
//     return Reflect.has(...arguments)
//   }
// });
// console.log('name' in proxy);

// 9.2.4 defineProperty()

// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   defineProperty(target, property, descriptor) {
//     console.log('defineProperty() success');
//     return Reflect.defineProperty(...arguments)
//   }
// });

// Object.defineProperty(proxy, 'name', {
//   value: 'ysn'
// })

// 9.2.5 getOwnPropertyDescriptor()
// 捕获器会在Object.getOwnPropertyDescriptor() 中被调用
// const myTarget = {
//   name: 'ysn'
// };
// const proxy = new Proxy(myTarget, {
//   getOwnPropertyDescriptor(target, property) {
//     console.log('getOwnPropertyDescriptor()');
//     return Reflect.getOwnPropertyDescriptor(...arguments)
//   }
// });
// console.log(Object.getOwnPropertyDescriptor(proxy, 'name'));
// getOwnPropertyDescriptor()

// 9.2.6 deleteProperty()
// 捕获器在delete操作符中调用

// const myTarget = {
//   name: 'ysn'
// };
// const proxy = new Proxy(myTarget, {
//   deleteProperty(target, property) {
//     console.log('deleteProperty() success');
//     return Reflect.deleteProperty(...arguments)
//   }
// });
// delete proxy.name

// 9.2.8 getPrototypeOf()

// const myTarget = {}; 
// const proxy = new Proxy(myTarget, { 
//  getPrototypeOf(target) { 
//  console.log('getPrototypeOf()'); 
//  return Reflect.getPrototypeOf(...arguments) 
//  } 
// }); 
// console.log(Object.getPrototypeOf(proxy)); 
// getPrototypeOf()

// 9.2.12 apply()
// apply() 捕获器会在调用函数时被调用 对用的反射API方法是Reflect.apply()

// const myTarget = () => {
//   console.log('my target');
// }; 
// const proxy = new Proxy(myTarget, { 
//  apply(target, thisArg, ...argumentsList) { 
//   console.log('apply() hello'); 
//   return Reflect.apply(...arguments) 
//  } 
// }); 
// proxy(); 
// // apply()

// 9.2.13 construct()
// construct() 捕获器会在new操作符中被调用。
// const myTarget = function () { };
// const proxy = new Proxy(myTarget, {
//   construct(target, argumentsList, newTarget) {
//     console.log('construct()');
//     return Reflect.construct(...arguments)
//   }
// });
// const p1 = new proxy();
// // construct()

// 9.3 代理模式
// 9.3.1 跟踪属性访问
// 通过捕获get、set和has等操作，可以知道对象属性什么时候被访问、被查询
// 把实现响应捕获器的某个对象代理放到应用中，可以监控这个对象何时在何处被访问

// 9.3.2隐藏属性
// 代理的内部实现对外部代码是不可见的，因此要隐藏目标对象上的属性也轻而易举

// 9.3.3 属性验证
// 所有的赋值操作都会触发set()捕获器 可以根据所赋的值来决定是否允许

// var obj = {};
// Object.defineProperty(obj, "a", {
//   configurable: false,
//   enumerable: false,
//   value: 10,
//   writable: false,
// });

// var p = new Proxy(obj, {
//   get: function (target, prop) {
//     return 20;
//   },
// });

// p.a; //会抛出 TypeError
// console.log(p.a);

const rawWindow = {
    get: 'test'
}

const newWindow = new Proxy(rawWindow, {
    get(target, property, receiver) {
        console.log(this, receiver);
        return 'proxyTest'
    }
})
// console.log(rawWindow);
// console.log(Reflect.get(newWindow, 'get', newWindow));
// console.log(newWindow.get);

// const window = new Proxy(newWindow, {
//     get(target, property, receiver) {
//         console.log(this);
//         return 'windowTest'
//     }
// })
// console.log(window.get);
// console.log(Reflect.get(newWindow, 'get', { name: 'ysn' }));

const person = {
    _name: 'John',
    get name() {
        console.log(this);
      return this._name;
    }
};
const res = Reflect.get(person, 'name', { _name: 'Tom' })
// console.log(res);