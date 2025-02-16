let person: number | string
person = 100
person = '100$'

// 访问联合类型的属性和方法
// 当ts 不确定一个联合类型的变量的时候，我们只能够访问此联合属性的共有属性、方法，否则会报错
// function sayText(params: number | string): void {
//   console.log(params.length)
// }
// sayText('100')