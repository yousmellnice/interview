/*
 * @Author: yushennan yousmellnice@foxmail.com
 * @Date: 2022-07-26 09:37:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-01-13 00:38:06
 * @FilePath: /ts/keyof的使用.ts
 * @Description: 
 * 
 */
interface Person {
  name: string;
  age: number;
  gender: string;
}

type P = keyof Person
const p: P = 'gender';

class Student {
  constructor(private info: Person) {};
  // getInfo(key: string) {
  //   if(key === 'name' || key === 'age' || key ==='gender') {
  //     return this.info[key];
  //   }
  // }
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key]
  };
}
const student = new Student({
  name: 'ysn',
  age: 20,
  gender: 'male'
})
const test = student.getInfo('gender');
console.log(test);


// 总结：使用了keyof 就说明只能用类型中的key值 作为值
