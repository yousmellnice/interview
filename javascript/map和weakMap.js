// const m = new Map()
// m.set('name', 'ysn')
// m.set('age', '12')


// entries() 是默认迭代器，所以可以直接对映射实例使用扩展操作，把映射转换成数组
// for( let item of m.entries() ) {
//   console.log(item)
// }

// m.forEach((key, value) => {
//   console.log(`key : ${key} , value: ${value}`)
// });

// const keyObj = {id: 1}; 
// const keyObj = 'hello' 
// const m = new Map([ 
//  [keyObj, "val1"] 
// ])
// for(let item of m.keys()) {
  // 键的对象属性可以修改 但是键的字符串原始值不能改
  // item.id = 'newKey'
// }
// console.log(m)
// 即使是修改键的对象的属性，但对象在映射中引用的值依旧没有变。
// console.log(m.get(keyObj))  // val1


// ### WeakMap
// 弱映射中的键只能是对象，如果是非对象设置键的话，会抛出typeError

// const stringKey = new String("key1")
// const stringKey = new Number("2")
// console.log(stringKey);
// console.log(typeof stringKey);
// const obj = new Object()
// console.log(obj)
// const obj = {}
// const wm = new WeakMap(); 
// wm.set(obj, "val");
// console.log(wm.get(obj));

// 1.实现私有变量
// 实现弱映射造就了在JS中实现真正私有变量的一种新方式。
// 前提很明确：私有变量会存储在若映射中，以对象实例为键，以私有成员的字典为值

// const wm = new WeakMap()
// class User {
//   constructor(id) {
//     this.idProperty = Symbol('id')
//     this.setId(id)
//   }
//   setPrivate(property, value) {
//     const privateMembers = wm.get(this) || {}
//     privateMembers[property] = value
//     wm.set(this, privateMembers)
//   }
//   getPrivate(property) { 
//     return wm.get(this)[property]
//   }
//   setId(id) {
//     this.setPrivate(this.idProperty, id)
//   }
//   getId() {
//     return this.getPrivate(this.idProperty)
//   }
// }

// const user = new User('123')
// console.log('---------');

// console.log(wm.get(user)[user.idProperty]); //'123'
// 所以并不是真正的私有变量
// 外部的代码只要拿到对象实例的引用和若映射 还是可以取得内部的“私有”变量
// 所以为了避免这种情况，可以用一个闭包 把weakMap 包装起来


const user = (() => {
  const wm = new WeakMap()
  class user {
    constructor(id) {
      this.idProperty = Symbol('id')
      this.setId(id)
    }
    setPrivate(property, value) {
      const privateMembers = wm.get(this) || {}
      privateMembers[property] = value
      wm.set(this, privateMembers)
    }
    getPrivate(property) { 
      return wm.get(this)[property]
    }
    setId(id) {
      this.setPrivate(this.idProperty, id)
    }
    getId() {
      return this.getPrivate(this.idProperty)
    }
  }
  return user
})()
const us = new user('123')
console.log(us.getId());

// 这样，拿不到弱映射的键，也就无法获得弱映射中的值。虽然防止了上面的访问，但整个代码也完全陷入了ES6之前的闭包私有变量模式

// 2.DOM节点元数据
// 因为WeakMap实例不会妨碍垃圾回收，所以非常适合保存元数据
