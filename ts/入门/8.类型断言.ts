// 将一个联合类型断言为其中一个类型


// 将父类断言为更加具体的子类


// 将任何一个类型断言为any
// window.foo = 1 会报错 因为window没有foo属性
// 在 any 类型的变量上，访问任何属性都是允许的。
(window as any).foo = 1;


// 将 any 断言为一个具体的类型
// 举例来说，历史遗留的代码中有个 getCacheData，它的返回值是 any：
function getCacheData(key: string): any {
  return (window as any).cache[key];
}

// 联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型
// 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可
// 其实前四种情况都是最后一个的特例。


// 双重断言