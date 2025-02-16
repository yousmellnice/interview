// 下面展示的是里式替换原则：子类继承之后，想要无缝替换、覆盖父类，将不会引发错误或异常

class Shape {
    caculateArea() {
        console.log('this parents class');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }
    caculateArea() {
        return this.width * this.height
    }
}

const rect = new Rectangle(10, 10)
// console.log(rect.caculateArea());

const arr = '123456789abc'
console.log(arr.slice(0, -1));

