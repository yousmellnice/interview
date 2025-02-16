// 问题描述：
// 给定一个由 '1'（陆地）和 '0'（水）组成的二维网格，计算岛屿的数量。
// 一个岛屿被水包围，并且通过水平或垂直连接相邻的陆地而形成。
// 假设网格的边界都被水包围。

const input = [
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1]
]

function numIslands(grid) {
    if (!grid || grid.length === 0) {
        return 0
    }

    const rows = grid.length
    const cols = grid[0].length
    let islands = 0

    function dfs(row, col) {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 0) {
            return
        }
        grid[row][col] = 0
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                islands++
                dfs(i, j)
            }
        }
    }
    return islands
}
const res = numIslands(input)
console.log(res);