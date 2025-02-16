/**
 * 深拷贝函数
 * @param value 需要深拷贝的值
 * @returns 深拷贝后的值
 */
function cloneDeep<T>(value: T): T {
    // 处理 null 或 undefined
    if (value == null) {
        return value;
    }

    // 处理日期对象
    if (value instanceof Date) {
        return new Date(value.getTime()) as any;
    }

    // 处理正则表达式
    if (value instanceof RegExp) {
        return new RegExp(value.source, value.flags) as any;
    }

    // 处理数组
    if (Array.isArray(value)) {
        return value.map((item) => cloneDeep(item)) as any;
    }

    // 处理对象
    if (typeof value === 'object') {
        const result: any = {};
        
        // 获取所有属性，包括 Symbol 类型的键
        const keys = [
            ...Object.getOwnPropertyNames(value),
            ...Object.getOwnPropertySymbols(value)
        ];

        for (const key of keys) {
            result[key] = cloneDeep((value as any)[key]);
        }

        return result;
    }

    // 处理基本类型
    return value;
}

const obj = {
    name: 'test',
    age: 18,
    date: new Date(),
    regexp: /test/g,
    arr: [1, 2, { a: 1 }],
    nested: {
        a: 1,
        b: { c: 2 }
    },
    [Symbol('test')]: 'symbol'
};

let cloned = cloneDeep(obj);
cloned.name = 'test2';
console.log(obj);
console.log(cloned);

export default cloneDeep;

// 使用示例：
/*
const obj = {
    name: 'test',
    age: 18,
    date: new Date(),
    regexp: /test/g,
    arr: [1, 2, { a: 1 }],
    nested: {
        a: 1,
        b: { c: 2 }
    },
    [Symbol('test')]: 'symbol'
};

const cloned = cloneDeep(obj);
*/
