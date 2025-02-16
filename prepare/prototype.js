// function test() {
//   this.money = 200
//   this.name = 'ysn'
// }
// test.prototype.showMoney = function() {
//   console.log(this.money)
// }
// function son() {}
// son.prototype = new test()
// const s1 = new son()
// s1.showMoney()
// function parents() {
//   this.name = 'bb'
//   this.money = 12
// }
// parents.prototype.sayName = function() {
//   console.log(this.name)
// }
// function son() {}
// son.prototype = new parents()
// const s = new son()
// s.sayName()
// 原型链继承的缺点，
// 1. 无法传参
// 2. 所有实例都会共享父类的属性 例如name


// 盗用构造函数
// function parents(name) {
//   this.name = name
//   this.money = [5, 10, 50, 100]
// }
// function son(name) {
//   parents.call(this, name)
//   this.age = 20
// }
// const son1 = new son('ysn')
// console.log(son1.age);
// 1. 继承父类的属性，不能继承方法
// 2. 每个实例都有父类的属性副本，臃肿

// 组合继承
// function parents(money) {
//   this.name = 'ysn'
//   this.money = money
// }
// parents.prototype.sayMoney = function() {
//   console.log(this.money)
// }
// function son(money) {
//   parents.call(this, money) //1
// }
// son.prototype = new parents() //2
// const s1 = new son(100)
// s1.sayMoney()
// 1. 组合继承的结合了两者的优点，既可以传参，也可以继承父类的属性和方法
// 2. 缺点是调用了两次父类构造函数，消耗了内存

// 寄生式组合继承
// function create(obj) {
//   function o() {}
//   o.prototype = obj
//   return new o()
// }
// function inheritPrototype(son, parent) {
//   let obj = create(parent.prototype)
//   obj.constructor = parent
//   son.prototype = obj
// }
// function parent(name) {
//   this.name = name
// }
// parent.prototype.sayName = function() {
//   console.log(this.name)
// }
// function son(name) {
//   parent.call(this, name)
// }
// inheritPrototype(son, parent)
// const s1 = new son('ysn')
// s1.sayName()
// function created(obj) {
//   function f() {}
//   f.prototype = obj.prototype
//   return new f()
// }
// function inherriPrototype(son, parent) {
//   let obj = created(parent)
//   obj.constructor = parent
//   son.prototype = obj
// }
// function parents(name) {
//   this.name = name
// }
// parents.prototype.sayName = function() {
//   console.log(this.name)
// }
// function son(name) {
//   parents.call(this, name)
// }
// inherriPrototype(son, parents)
// const s1 = new son('hh')
// s1.sayName()
// 1. 寄生式组合继承的优点 只调用了父类构造函数一次
// 2. 继承了属性，也继承了方法，还可以传参
