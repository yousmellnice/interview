// const arr = [];
// const obj = {};
// arr[obj] = '23';
// console.log(arr.length, arr);
// arr.forEach(item => {
//     console.log(item);
// })

// const arr = new Array(10);
// arr.push(1);
// console.log(arr.length); // 11 js 数组的是动态的，length 会自动增加

// Array 在设计上的失误

// const arr = new Array(10).fill(10);
const arr = [1, 2, 3, 4, 5].fill(6, 0)
console.log(arr);