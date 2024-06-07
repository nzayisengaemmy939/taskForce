function hasContiguousSubarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        // While currentSum exceeds the target, move the start pointer to the right
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // Check if we have found the target sum
        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Example:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarrayWithSum(arr, target));  // Output: true
