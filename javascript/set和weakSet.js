
// set可以包含任何JS数据类型作为值、
// const s = new Set() 
// const objVal = {}, 
// arrVal = [] 
// s.add(objVal) 
// s.add(arrVal) 
// objVal.bar = "bar" 
// arrVal.push("bar")


// 顺序和迭代
// set会维护值插入时的顺序，因此支持按顺序迭代

// ### WeakSet
// 弱集合中的值只能是对象或者继承自对象的类型，如果尝试使用非对象，会抛出异常 typeError

// const str = Symbol('ysn')
// console.log(str.description);


// (function() { 
//   let name = ''; 
//   Person = function(value) { 
//     name = value; 
//   }; 
//   Person.prototype.getName = function() { 
//     return name; 
//   }; 
//   Person.prototype.setName = function(value) { 
//     name = value; 
//   }; 
//  })();
//  let person1 = new Person('Nicholas')
// console.log(person1.getName());
// person1.setName('ysn')
// console.log(person1.getName());
// let person2 = new Person('zjj')
// console.log(person1.getName());
// console.log(person2.getName());


// function Person(name) { 
//   this.getName = function() { 
//   return name; 
//   }; 
//   this.setName = function (value) { 
//   name = value; 
//   }; 
//  } 
//  let person = new Person('Nicholas'); 
//  let person2 = new Person('ysn'); 
//  console.log(person.getName()); // 'Nicholas' 
//  person.setName('Greg'); 
//  console.log(person.getName()); // 'Greg'
//  console.log(person2.getName());