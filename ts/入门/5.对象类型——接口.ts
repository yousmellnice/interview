// 5. 对象的类型——接口
// interface Person {
//   name: string;
//   age?: number;
//   // school?: string; //可选属性
//   [propName: string]: any //任意属性
// }
// let son: Person = {
//   name: 'ysn',
//   age: 25,
//   gender: 'male'
// }
// 根据接口的定义，多一个或者少一个属性都是不允许的，除非添加可选属性

// 任意属性：需要注意的是，一旦定义了任意属性，确定属性和可选属性的类型都必须是它的类型的子集；
// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: string; 
// }
// let tom: Person = {
//   name: 'ysn',
//   age: 20,
//   money: '111'
// }
// 上面报错的原因是：可选属性number 不是任意属性string 的子集，所以报错；

// 联合类型
// 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: string | number;
// }
// let p: Person = {
//   name: 'ysn',
//   money: 1000
// }

// 只读属性 
// readonly
// interface Person {
//   readonly name: string;
//   age?: number;
// }
// let son: Person = {
//   name: 'ysn',
//   age: 20
// }
// son.name = 'ysx' //不能修改
// ！！！！！注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：