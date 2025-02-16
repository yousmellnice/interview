// let code = 1
// {
//     console.log(code);
//     let code = 2
// }
// function fn(){
//     var x = 1
//     var y = 2
//   }
//   fn()

// for(var i = 0; i<6; i++ ) {
//   console.log(i);
// }

// const str = ']'
// console.log([')', ']', '}'].indexOf(str))
// const str = 'qwertyu'
// console.log(str[1]);

// var isValid = function (s) {
//   let len = s.length;
//   let first = s[0];
//   if (len === 0) return true;
//   // 奇数或右括号开头肯定不符合
//   if (len % 2 != 0 || [')', ']', '}'].indexOf(first) != -1) {
//     return false
//   }
//   // 栈，存入第一个字符。
//   let stack = [first];
//   const MAP = {
//     ')': '(',
//     ']': '[',
//     '}': '{',
//   }
//   for (let i = 1; i < len; i++) {
//     let length = stack.length;
//     let top = length > 0 ? stack[length - 1] : null;
//     let now = s[i];
//     if (MAP[now] === top) {
//       stack.pop();
//     } else {
//       stack.push(now);
//     }
//   }
//   return stack.length === 0
// };

// function foo( str ) {
//   // "use strict";
//   eval( str )
//   console.log(a);
// }
// eval('var b = 21')
// foo('var a = 20')
// console.log(b);

// function foo() {
//   function bar(a) {
//     i = 3; // 修改 for 循环所属作用域中的 i console.log( a + i ); }
//     for (var i = 0; i < 10; i++) {
//       bar(i * 2);
//       console.log(1)
//       // 糟糕，无限循环了！ 
//     }
//   }
// }
// foo();
// var a = 2;

// (function foo(){ // <-- 添加这一行
//   var a = 3; 
//   console.log( a ); // 3 
// })();

// console.log(a);
// undefined = true; // 给其他代码挖了一个大坑！绝对不要这样做！ 
// (function IIFE(undefined) {
//   var a;
//   if (a === undefined) { console.log("Undefined is safe here!"); }
// })();

// 可选链操作符
// const obj = {
//   name: 'yousmellnice',
//   age: 20,
//   children: {
//     name: 'you',
//     age: 1
//   }
// }
// if(obj?.children?.children) {
//   console.log(11);
// }

// 闭包

// window.ysn = 'yousmellnice'
// const obj = {
//   ysn: 'rtt',
//   getIdentity() {
//     return function() {
//       return this.ysn
//     }
//   }
// }
// console.log(obj.getIdentity());

// const name = 'rtt'
// const obj = {
//   name: 'ysn',
//   getThis() {
//     const that = this
//     return function() {
// 			return that.name  //ysn
//     } 
// 	}
// }
// console.log(obj.getThis()());

// 动态作用域
// function foo() { 
//   console.log( a ); // 2 
// }
// function bar() {
//   var a = 3; 
//   foo(); 
// }
// var a = 2; 
// bar();

// 数组扁平化
// const arr = [1,2,3,[1,2,3,[1,2]]]
// console.log(arr.length);

// function flatten(arr) {
//   let result = []
//   for(let i = 0; i < arr.length; i++) {
//     if(Array.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]))
//     }else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }
// const result = flatten(arr)
// console.log(result);

// 问输出
// const obj = {}
// const arr = []
// const o = Object.prototype.toString.call(obj)
// const a = Object.prototype.toString.call(arr)
// console.log(o);
// console.log(a);
// console.log('--------');
// console.log(obj.constructor === Object);

// 继承

// 原型链继承
// function parents() {
//   this.money = 100000
//   this.age = 40
//   this.arr = [1, 2, 3]
// }
// parents.prototype.showMoney = function() {
//   return this.money
// }
// function son() {}

// son.prototype = new parents()
// const son1 = new son()
// son1.arr.push(4)
// const son2 = new son()
// // console.log(son1.showMoney());
// console.log(son1.arr);
// console.log(son2.arr);

// 盗用构造函数继承
// function parents(name) {
//   this.name = name
//   this.color = ['pink', 'red', 'orange']
// }
// function son(name) {
//   parents.call(this, name)
//   this.age = 20
// }
// const son1 = new son('ysn')
// son1.color.push('black')
// const son2 = new son('err')
// console.log(son1.name) //ysn
// console.log(son1.color) //['pink', 'red', 'orange', 'black']
// console.log(son2.color) //['pink', 'red', 'orange']

// 组合式继承
// function parents(money) {
//   this.arr = [1, 2, 3]
//   this.money = money
// }
// //创建方法
// parents.prototype.sayMoney = function() {
//   console.log(this.money)
// }
// function son(money) {
//   parents.call(this, money)
// }
// //继承方法
// son.prototype = new parents()
// //创建实例
// const son1 = new son(20000)
// son1.arr.push(4)
// son1.sayMoney()
// console.log(son1.arr);
// const son2 = new son(111)
// son2.sayMoney()
// console.log(son2.arr);

// 寄生式继承
// function object(o) {
//   function F() {}
//   F.prototype = o
//   return new F()
// }

// 寄生式组合继承
// 寄生式
// function object(o) {
//   function f() {}
//   f.prototype = o
//   return new f()
// }

// function inheritPrototype(p, s) {
  // 把父类原型传进去 创建父类副本对象，即避免了调用父类函数
//   let obj = object(p.prototype)
  // 增强对象 由于重写的原型导致constructor丢失
//   obj.constructor = s
  // 将父类赋值过去
//   s.prototype = obj
// }

// function parents(name) {
//   this.name = name;
//   this.color = ['pink', 'red', 'orange']
// }
// parents.prototype.sayName = function() {
//   console.log(this.name);
// }

//通过盗用构造函数进行继承父类属性
// function son(name, age) {
  // 仅仅是调用了一次父类构造函数
//   parents.call(this, name)
//   this.age = age
// }

// inheritPrototype(parents, son)

// son.prototype.sayAge = function() {
//   console.log(this.age);
// }
// const s1 = new son('ysn', 20)

// s1.sayName()


// 组合继承
// 原型链继承加盗用构造函数继承

// function parents(name) {
//   this.name = name
//   this.color = ['pink', 'red', 'black']
//   this.money = 100000
// }
// parents.prototype.logMoney = function() {
//   return this.money
// }
// function son(name) {
//   // 盗用构造函数 继承属性
//   parents.call(this, name)
// }
// // 原型链继承
// son.prototype = new parents()

// const s1 = new son('ysn')

// console.log(s1.logMoney());














// const str = 'list.item.shool'
// function getObj(str) {
//   const arr = str.split('.')
//   const obj = arr[0]
//   const cmd = `var ${obj} = {}`
//   eval(cmd)

//   // 执行eval的次数
//   const len = arr.length - 1

//   for (let i = 1; i <= len; i++) {
//     if(i == 1) {
//       const cmd = `${obj}.${arr[i]} = {}`
//       eval(cmd)
//     }else {
//       // 当i=2 及以上时
//       const temp = []
//       for(let j = 1; j <= len; j++) {
//         // i是倍数，代表后面几个
//         // i需要剪去j
//         const str = `.$ {arr[${j}]} `
//         temp.push(str)
//       }
//       const cmd = temp.join('').replace(/\s/g, "") // '.${arr[1]}.${arr[2]}'
//       const _cmd = `.${arr[1]}.${arr[2]}`+`${cmd}`
//       // console.log(cmd);
//       // console.log(_cmd);
//       // console.log(`${_cmd}`);




//       // console.log(`${s}`);
//       // eval(console.log(`${s}`))
//       // console.log(s);
//       // console.log(_cmd == s);
//       // console.log(`${obj}${_cmd}`);
//       // console.log(`${obj}.${s}`);
//       // console.log(`${obj}${cmd}`);
//       // eval(`${obj}${cmd}`)
//       // console.log(obj);
//     }
//   }
//   // 返回该对象
//   // const ret = `return (${arr[0]})`
//   // eval(ret)
// }
// getObj(str)
// const ss = 'ysn'
// st = []
// st.push(ss)
// st.push(ss)
// console.log(st.join(''));

// 寄生式组合继承
//创建一个工具实现复制
// function create(o) {
//   function f() {}
//   f.prototype = o
//   return new f()
// }
// //再通过一个函数实现继承属性 避免了一次的调用父类构造函数
// function inheritPrototype(son, parents) {
//   //通过create来避免调用父类构造函数继承 创建一个副本 
//   let obj = create(parents.prototype) //因为这是继承 记住传进去的一定是父类的原型
//   //给返回的prototype对象解决 由于重写原型导致默认的constructor属性丢失
//   obj.constructor = parents
//   //最后 进行赋值对象
//   son.prototype = obj
// }

// function parents(name) {
//   this.name = name
//   this.money = 100000
//   this.color = ['red', 'pink', 'black']
// }
// parents.prototype.sayName = function() {
//   console.log('my name is' + this.name )
// }
// function son(name) {
//   parents.call(this, name)
// }
// inheritPrototype(son, parents)
// const s1 = new son('ysn')
// s1.color.push('orange')
// const s2 = new son('rtt')
// s1.sayName()
// console.log(s1.color);
// console.log(s2.color);



