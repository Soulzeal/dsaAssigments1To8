//  question-1

function reconstructPermutation(s) {
    const perm = [];
    let low = 0;
    let high = s.length;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === 'I') {
        perm.push(low);
        low++;
      } else if (s[i] === 'D') {
        perm.push(high);
        high--;
      }
    }
  
    perm.push(low);
  
    return perm;
  }

//   question-2

function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      return false;
    }
  
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    return searchRecursively(matrix, 0, rows - 1, 0, cols - 1, target);
  }
  
  function searchRecursively(matrix, rowStart, rowEnd, colStart, colEnd, target) {
    if (rowStart > rowEnd || colStart > colEnd) {
      return false;
    }
  
    const midRow = Math.floor((rowStart + rowEnd) / 2);
    const midCol = Math.floor((colStart + colEnd) / 2);
    const midValue = matrix[midRow][midCol];
  
    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      return (
        searchRecursively(matrix, midRow + 1, rowEnd, colStart, colEnd, target) ||
        searchRecursively(matrix, rowStart, rowEnd, midCol + 1, colEnd, target)
      );
    } else {
      return (
        searchRecursively(matrix, rowStart, midRow - 1, colStart, colEnd, target) ||
        searchRecursively(matrix, rowStart, rowEnd, colStart, midCol - 1, target)
      );
    }
  }

//   question-3

function validMountainArray(arr) {
    if (arr.length < 3) {
      return false;
    }
  
    let i = 0;
  
    // Increasing phase
    while (i < arr.length - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
  
    // Peak cannot be the first or last element
    if (i === 0 || i === arr.length - 1) {
      return false;
    }
  
    // Decreasing phase
    while (i < arr.length - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    return i === arr.length - 1;
  }

//   question-4

function findMaxLength(nums) {
    const map = new Map();
    map.set(0, -1); // Initialize the map with sum = 0 at index -1
    let maxLength = 0;
    let sum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i] === 0 ? -1 : 1;
  
      if (map.has(sum)) {
        // If the sum exists in the map, update the maxLength
        maxLength = Math.max(maxLength, i - map.get(sum));
      } else {
        // Store the sum along with its index in the map
        map.set(sum, i);
      }
    }
  
    return maxLength;
  }

//   question-5

function minProductSum(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => b - a);
  
    let productSum = 0;
    const n = nums1.length;
  
    for (let i = 0; i < n; i++) {
      productSum += nums1[i] * nums2[i];
    }
  
    return productSum;
  }

//   question-6

function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const frequency = new Map();
  
    // Count the frequency of each element in the changed array
    for (const num of changed) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    }
  
    const original = [];
  
    // Iterate over the elements in the changed array
    for (const num of changed) {
      // Check if the current element can be halved
      if (frequency.get(num) > 0 && frequency.get(num / 2) > 0) {
        original.push(num / 2); // Add the halved element to the original array
        frequency.set(num, frequency.get(num) - 1); // Decrease the frequency of num
        frequency.set(num / 2, frequency.get(num / 2) - 1); // Decrease the frequency of num/2
      }
    }
  
    // If all elements in the changed array are processed correctly, return the original array
    if (original.length === changed.length / 2) {
      return original;
    }
  
    return []; // Return an empty array if the changed array is not valid
  }

//   question-7

function generateMatrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let num = 1;
    let left = 0,
      right = n - 1,
      top = 0,
      bottom = n - 1;
  
    while (left <= right && top <= bottom) {
      // Traverse right
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num++;
      }
      top++;
  
      // Traverse down
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num++;
      }
      right--;
  
      // Traverse left
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          matrix[bottom][i] = num++;
        }
        bottom--;
      }
  
      // Traverse up
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          matrix[i][left] = num++;
        }
        left++;
      }
    }
  
    return matrix;
  }

//   question-8

function multiply(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
  
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let x = 0; x < k; x++) {
          result[i][j] += mat1[i][x] * mat2[x][j];
        }
      }
    }
  
    return result;
  }