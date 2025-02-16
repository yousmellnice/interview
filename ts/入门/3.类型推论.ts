//当设置为数字的时候，会自动定义类型为数字，后面则不能更改类型
// let myFavoriteNumber = 100; 
// myFavoriteNumber = 'ysn';

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
let myFavoriteNumber
myFavoriteNumber = 100
myFavoriteNumber = 'ysn'