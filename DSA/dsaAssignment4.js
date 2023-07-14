// question-1

function findCommonElements(arr1, arr2, arr3) {
    let p1 = 0, p2 = 0, p3 = 0;
    const result = [];
  
    while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
      if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
        result.push(arr1[p1]);
        p1++;
        p2++;
        p3++;
      } else if (arr1[p1] < arr2[p2] || arr1[p1] < arr3[p3]) {
        p1++;
      } else if (arr2[p2] < arr1[p1] || arr2[p2] < arr3[p3]) {
        p2++;
      } else if (arr3[p3] < arr1[p1] || arr3[p3] < arr2[p2]) {
        p3++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  
  const result = findCommonElements(arr1, arr2, arr3);
  console.log(result); // Output: [1, 5]


//   question-2

function findDistinctIntegers(nums1, nums2) {
  const set1 = new Set();
  const set2 = new Set();
  
  for (let num of nums1) {
    set1.add(num);
  }
  
  for (let num of nums2) {
    set2.add(num);
  }
  
  const notInNums2 = [];
  const notInNums1 = [];
  
  for (let num of nums1) {
    if (!set2.has(num)) {
      notInNums2.push(num);
    }
  }
  
  for (let num of nums2) {
    if (!set1.has(num)) {
      notInNums1.push(num);
    }
  }
  
  return [notInNums1, notInNums2];
}

// Example usage:
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const result = findDistinctIntegers(nums1, nums2);
console.log(result); // Output: [[4, 6], [1, 3]]


// question-3

function transposeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
  
    const transposedMatrix = new Array(numCols);
  
    for (let j = 0; j < numCols; j++) {
      transposedMatrix[j] = new Array(numRows);
      for (let i = 0; i < numRows; i++) {
        transposedMatrix[j][i] = matrix[i][j];
      }
    }
  
    return transposedMatrix;
  }
  
  // Example usage:
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  
  const result = transposeMatrix(matrix);
  console.log(result); // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]


//   question-4

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
  
    let maxSum = 0;
    for (let i = 0; i < nums.length; i += 2) {
      maxSum += nums[i];
    }
  
    return maxSum;
  }
  
  // Example usage:
  const nums = [1, 4, 3, 2];
  const result = arrayPairSum(nums);
  console.log(result); // Output: 4

//   qustion-5

function arrangeCoins(n) {
    let left = 0;
    let right = n;
  
    while (left <= right) {
      const midpoint = Math.floor((left + right) / 2);
      const totalCoins = (midpoint * (midpoint + 1)) / 2;
  
      if (totalCoins <= n) {
        left = midpoint + 1;
      } else {
        right = midpoint - 1;
      }
    }
  
    return left - 1;
  }
  
  // Example usage:
  const n = 5;
  const result = arrangeCoins(n);
  console.log(result); // Output: 2

//   question-6

function sortedSquares(nums) {
    const n = nums.length;
    let left = 0;
    let right = n - 1;
    const squaredSortedArray = new Array(n);
  
    for (let i = n - 1; i >= 0; i--) {
      const leftSquare = nums[left] ** 2;
      const rightSquare = nums[right] ** 2;
  
      if (leftSquare > rightSquare) {
        squaredSortedArray[i] = leftSquare;
        left++;
      } else {
        squaredSortedArray[i] = rightSquare;
        right--;
      }
    }
  
    return squaredSortedArray;
  }
  
  // Example usage:
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result); // Output: [0, 1, 9, 16, 100]


//   question-7

function maxCount(m, n, ops) {
    let maxRow = m;
    let maxCol = n;
  
    for (const [ai, bi] of ops) {
      maxRow = Math.min(maxRow, ai);
      maxCol = Math.min(maxCol, bi);
    }
  
    return maxRow * maxCol;
  }
  
  // Example usage:
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  const result = maxCount(m, n, ops);
  console.log(result); // Output: 4


//   question-8

function shuffle(nums, n) {
    const x = nums.slice(0, n);
    const y = nums.slice(n, 2 * n);
    const result = [];
  
    for (let i = 0; i < n; i++) {
      result.push(x[i]);
      result.push(y[i]);
    }
  
    return result;
  }
  
  // Example usage:
  const nums = [2, 5, 1, 3, 4, 7];
  const n = 3;
  const result = shuffle(nums, n);
  console.log(result); // Output: [2, 3, 5, 4, 1, 7]