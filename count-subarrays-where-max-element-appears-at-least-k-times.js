var countSubarrays = function (nums, k) {
    let ans = 0;
    let start = 0;
    let count = 0;
    const max = Math.max(...nums);

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === max) count++;
        while (count === k) {
            ans += nums.length - end;
            if (nums[start] === max) count--;
            start++;
        }
    }

    return ans;
};
