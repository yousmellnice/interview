class extend {
  constructor(name) {
    this.name = name
  }
  sayHello(hello) {
    console.log(hello + this.name);
  }
}
const test = new extend('kobe')
const hello = 'hello first use class, my name is '
test.sayHello(hello)