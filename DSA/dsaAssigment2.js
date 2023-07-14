// question 1

function arrayPairSum(nums) {
    const maxNum = Math.max(...nums);
    const minNum = Math.min(...nums);
    const countArr = new Array(maxNum - minNum + 1).fill(0);
  
    for (let i = 0; i < nums.length; i++) {
      countArr[nums[i] - minNum]++;
    }
  
    let sum = 0;
    let isOdd = true;
  
    for (let i = 0; i < countArr.length; i++) {
      while (countArr[i] > 0) {
        if (isOdd) {
          sum += i + minNum;
        }
        isOdd = !isOdd;
        countArr[i]--;
      }
    }
  
    return sum;
  }
  
  const nums = [1, 4, 3, 2];
  
  const maxSum = arrayPairSum(nums);
  console.log("Maximize sum is: " + maxSum);

//   question-2

function maximumCandy(candyType) {
    const maxEat = Math.floor(candyType.length / 2);
    const candyCount = {};
  
    for (let candy of candyType) {
      if (candyCount[candy]) {
        candyCount[candy]++;
      } else {
        candyCount[candy] = 1;
      }
  
      if (Object.keys(candyCount).length === maxEat) {
        break;
      }
    }
  
    return Object.keys(candyCount).length;
  }
  
  const candyType = [1, 1, 2, 2, 3, 3];
  const maxUniqueCandies = maximumCandy(candyType);
  console.log("Maximum number of candies: " + maxUniqueCandies);


// question-3

function findLHS(nums) {
    const frequencyMap = new Map();
    let longestSubsequenceLength = 0;
  
    for (let num of nums) {
      if (frequencyMap.has(num)) {
        frequencyMap.set(num, frequencyMap.get(num) + 1);
      } else {
        frequencyMap.set(num, 1);
      }
    }
  
    for (let [num, count] of frequencyMap.entries()) {
      if (frequencyMap.has(num + 1)) {
        const currentSubsequenceLength = count + frequencyMap.get(num + 1);
        longestSubsequenceLength = Math.max(longestSubsequenceLength, currentSubsequenceLength);
      }
    }
  
    return longestSubsequenceLength;
  }
  
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  const longestSubsequenceLength = findLHS(nums);
  console.log("Length of the longest harmonious subsequence: " + longestSubsequenceLength);

//   question-4

function canFlowerPlot(flowerbed, n) {
    let count = 0;
    let i = 0;
  
    while (i < flowerbed.length) {
      if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
        flowerbed[i] = 1;
        count++;
  
        if (count === n) {
          return true;
        }
      }
  
      if (count >= n) {
        return true;
      }
  
      i++;
    }
  
    return false;
  }
  
  const flowerbed = [1, 0, 0, 0, 1];
  const n = 1;
  
  const canPlace = canFlowerPlot(flowerbed, n);
  console.log("Can place flowers: " + canPlace);

//   question - 5

function maximumProduct(nums) {
    let max1 = Number.NEGATIVE_INFINITY;
    let max2 = Number.NEGATIVE_INFINITY;
    let max3 = Number.NEGATIVE_INFINITY;
  
    let min1 = Number.POSITIVE_INFINITY;
    let min2 = Number.POSITIVE_INFINITY;
  
    for (let num of nums) {
      if (num > max1) {
        max3 = max2;
        max2 = max1;
        max1 = num;
      } else if (num > max2) {
        max3 = max2;
        max2 = num;
      } else if (num > max3) {
        max3 = num;
      }
  
      if (num < min1) {
        min2 = min1;
        min1 = num;
      } else if (num < min2) {
        min2 = num;
      }
    }
  
    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
  }
  
  const nums = [1, 2, 3];
  const maxProduct = maximumProduct(nums);
  console.log("Maximum Product is: " + maxProduct);

//   question- 6

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  
  const index = search(nums, target);
  console.log("Resultant Index of targeted element: " + index);

// question-7

function isMonotonic(nums) {
    let increasing = true;
    let decreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
        decreasing = false;
      } else if (nums[i] < nums[i - 1]) {
        increasing = false;
      }
  
      if (!increasing && !decreasing) {
        return false;
      }
    }
  
    return true;
  }
  
  const nums = [1, 2, 2, 3];
  const isMonotonicArray = isMonotonic(nums);
  console.log("Is the given array monotonic: " + isMonotonicArray);

//   question-8

function minimumScore(nums, k) {
let minVal = nums[0];
let maxVal = nums[0];

for (let i = 1; i < nums.length; i++) {
minVal = Math.min(minVal, nums[i]);
maxVal = Math.max(maxVal, nums[i]);
}

let initialScore = maxVal - minVal;
if (initialScore === 0) {
return 0;
}

for (let num of nums) {
if (num >= minVal + k && num <= maxVal - k) {
return initialScore;
}
}

let scenario1 = maxVal - k;
let scenario2 = minVal + k;
let scenario3 = (maxVal - k) - (minVal + k);

return Math.min(initialScore, Math.min(scenario1, Math.min(scenario2, scenario3)));
}

const nums = [1, 2, 2, 9];
const k = 2;

const result = minimumScore(nums, k);
console.log("Minimum Score: " + result);























