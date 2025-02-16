/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-07-10 14:20:24
 * @LastEditors: yushennan yousmellnice@foxmail.com
 * @LastEditTime: 2022-07-20 00:07:24
 * @FilePath: /ts/6.类与接口.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 类与接口
// 接口可以用于对 对象形象进行描述，这一章节主要介绍接口的另一个用途，对类的一部分行为进行抽象；
// 一般来说一个类只能继承另一个类，有时候不同类之间可以有一些共性，这个时候就可以把 共性 提取出成为接口，用implements 关键字实现，
// 这个特性大大提高了面向对象的灵活性
// interface Alarm {
//   alert(): string;
// }
// interface Light {
//   on(): void;
//   off(): void;
// }
// class Door {
//   private value = ''
//   constructor(value) {
//     this.value = value
//   }
// }

// class SecurityDoor extends Door implements Alarm {
//   alert() {
//     return '安全们报警系统';
//   }
// }

// class Car implements Alarm, Light {
//   alert() {
//     return '汽车报警系统';
//   }
//   on() {
//     console.log('on');
//   }
//   off() {
//     console.log('off');
    
//   }
// }

// // 接口继承接口
// interface lightAbleAlarm extends Light {
//   on(): void;
//   off(): void;
// }

class Store {
  public name = 'ysn';
  constructor(name: string) {
    this.name = name;
  }
  protected push() {
    console.log('这是父类的push方法');
    
  }
}

class Rate extends Store {
  constructor(value: string) {
    super(value);
    super.push();
  }
  // public push(): void {
  //   console.log('这是子类的push方法');
  // }
}
const test = new Rate('ysn');

