/**
 * @description:
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */

var twoSum = function (nums: number[], target: number) {
  if (!Array.isArray(nums)) {
    return [];
  }
  let map = new Map();
  for (let i = 0; i <= nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(num, i);
  }
};

const test = [1, 5, 8, 20, 5];
const res = twoSum(test, 10);
console.log(res);
