/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let dp = new Array(m).fill().map(item => new Array(n))

  let start = 1
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      start = 0
    }
    dp[i][0] = start
  }
  start = 1
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      start = 0
    }
    dp[0][i] = start
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
    }
  }

  return dp[m-1][n-1]
};