<!--
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-10-09 19:33:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-23 18:02:56
 * @FilePath: /ts/type and interface.md
 * @Description: 
 * 
-->
### 官方描述
An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot.
接口可以在extends子句或implements子句中命名，但对象类型字面量的类型别名不能。

An interface can have multiple merged declarations, but a type alias for an object type literal cannot.
接口可以有多个合并声明，但对象类型字面量的类型别名不能。

### 相同点

#### 都可以用来描述对象或者函数
``` ts
// interface
interface User {
  name: string;
  age: number;
}

interface setUser {
  (name: string, age: number): void;
}

// type

type User = {
  name: string;
  age: number;
}

type setUser = (name: string, age: number): void;

```

#### 都允许扩展
可以互相继承，只是在语法上略有出入。
补充：type 那个其实不叫继承，那是**类型合并**，type 关键字的产生的东西官方有一个名字 type aliases ，就是类型别名，重点是它是别名不是真正的类型。

``` ts
// interface extends interface
interface Name {
  name: string;
}

interface User extends Name {
  age: number;
}

// type extends type

type Name = { name: string };

// 在继承的时候是并集，不能够使用别名
type User = Name & {
  age: number;
}

```


### 不同点

#### type 可以而 interface 不行

- type 可以声明基本类型别名、联合类型、元组等类型（换言之，type 可以进行一些骚操作）
  还可以指定数组的每个位置的类型

``` ts
// 基本类型别名
type Name = string;

// 联合类型
interface Dog {
  wong()
}

interface Cat {
  miao()
}

type Pet = Dog | Cat

// 指定数组位置的类型
type PetList = [string, number]

// type 语句中还可以使用 typeof 获取实例的 类型进行赋值
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div
```

#### interface 可以而 type 不行
interface 能够声明合并

``` ts

interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

```


### 总结

#### 区别

官网中的描述：

**接口的几乎所有特性都可以在类型中获得，关键的区别是类型不能重新打开以添加新属性，而接口总是可扩展的。**

1. 都可以用来描述对象、函数的类型
2. interface 的是继承，但是 type 的并不是继承，只是合并类型，而且不能使用别名
3. type 可以声明类型别名，联合类型，元祖等，
4. type 可以获取某个变量的类型进而声明，其他骚操作
5. interface 可以声明合并

#### 使用场景

1. 在日常开发中，非必须，应该是用的是 type，而不是 interface，经过对官方文档的使用，应该进行纠正
2. 一般用interface描述 **数据结构** ，用type描述 **类型关系**；
3. 有两种情况必须使用 type 
  - 限定具体几个值的基本类型联合类型
  - 具体定义数组每个位置的类型

interface是接口，type是类型，本身就是两个概念。只是碰巧表现上比较相似。
希望定义一个变量类型，就用type，如果希望是能够继承并约束的，就用interface。
如果你不知道该用哪个，说明你只是想定义一个类型而非接口，所以应该用type。

官网中对 type 的描述
https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases


### 官网中的描述
1. 接口的几乎所有特性都可以在类型中获得，关键的区别在于类型不能重新打开以添加新属性，而接口总是可扩展的。
2. 所以接口是可以继承的，而类型只能是并行。
3. 接口中可以添加新字段，类型不可以
4. 接口对扩展开放，从而更紧密地映射 JavaScript 对象的工作方式，因此我们建议在可能的情况下使用接口而不是类型别名。



