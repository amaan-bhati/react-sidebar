var maxSumAfterPartitioning = function (arr, k) {
    const n = arr.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        let curMax = 0, curSum = 0;

        for (let j = 1; j <= k && i - j >= 0; j++) {
            curMax = Math.max(curMax, arr[i - j]);
            curSum = Math.max(curSum, curMax * j + dp[i - j]);
        }

       dp[i] = curSum;
    }

    return dp[n];
};

