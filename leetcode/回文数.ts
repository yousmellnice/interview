// 回文数

const isPalindrome = (x: number): boolean => {
  // 1. 如果 x < 0 的时候，负数一定不是回文数
  // 2. 个位数是 0 的数字也一定不是回文数， 0 除外
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let reverseNum = 0
  while (reverseNum < x) {
    reverseNum = reverseNum * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  return x === reverseNum || x === Math.floor(reverseNum / 10) // 左侧表示长度为偶数，右侧表示长度为奇数
}

console.log(isPalindrome(1234321));

// 关键点在于长度是偶数或奇数的情况下，如何知道是否取到了中间的位置

// 例：x = 12321
//  - 利用取余 % 可以得到个位数数字
//  - reversedNumber = reversedNumber * 10 + (x % 10) 获取反转后的后半部数字
//  - x = Math.floor(x / 10) 继续取下一个个位数

// 当长度是奇数时：
//     reversedNumber = 0 * 10 + (12321 % 10) = 1
//     x = Math.floor(12321 / 10) = 1232

//     reversedNumber = 1 * 10 + (1232 % 10) = 12
//     x = Math.floor(1232 / 10) = 123

//     reversedNumber = 12 * 10 + (123 % 10) = 123
//     x = Math.floor(123 / 10) = 12

//     x > reversedNumber 不成立退出循环

// --------------------------------------------------------------------------

// 当长度是偶数时：

//     reversedNumber = 0 * 10 + (123321 % 10) = 1
//     x = Math.floor(123321 / 10) = 12332

//     reversedNumber = 1 * 10 + (12332 % 10) = 12
//     x = Math.floor(12332 / 10) = 1233

//     reversedNumber = 12 * 10 + (1233 % 10) = 123
//     x = Math.floor(1233 / 10) = 123

//     x > reversedNumber 不成立退出循环
