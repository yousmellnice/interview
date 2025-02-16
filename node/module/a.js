// demo1
module.exports.value = 'hello node!'
exports.value = 'export'
// exports = 'export'
// console.log(exports);
// console.log(exports === module.exports); // true

/*
demo1 说明了：module.exports 和 exports 指向同一个变量
*/

// demo2
// exports.text = 'demo2.1'
// module.exports = {
//     text: 'demo2'
// }
// console.log(exports);
// console.log(exports === module.exports);

/*
demo2 说明了：
1、导出的是 module.exports，而不是 exports；
2、exports 仅仅是对 modules.exports 的引用，这里需要加一个前提条件，在模块的初始化时；但是这里又产生了一个疑问，为什么 demo1 中的又能指向同一个呢？
    真相出来了，demo1 中他们的指向是一样的，因为只是添加属性，所以指向仍旧是一样，并没有被破坏到，没有人进行重新赋值。
3、在模块初始化时， exports 和 module.exports 是指向同一个对象，然而，当在执行模块的过程中， 
    module.exports 被直接赋值为一个新的对象，那么 exports 不再和 module.exports 指向同一个对象。

*/ 
