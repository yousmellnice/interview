// 贪心算法
// 贪心算法示例 - 零钱兑换问题：
// 假设你有不同面额的硬币，例如 [1, 5, 10, 25] 分，以及一个要兑换的金额 amount。你的目标是找到使用最少数量的硬币来凑成该金额。
export {}
export function coinChange(coins: number[], amount: number): number {
    coins.sort((a, b) => b - a)
    let coinCount = 0
    let remainingAmount = amount
    for (const coin of coins) {
        while (remainingAmount >= coin) {
            remainingAmount -= coin
            coinCount++
        }
    }
    if (remainingAmount === 0) {
        return coinCount
    }
    return -1;
}

const res = coinChange([1, 4, 6, 12, 69, 83], 86)
console.log(res);
