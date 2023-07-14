
// question-1

function construct2DArray(original, m, n) {
    if (original.length !== m * n) {
      return [];
    }
  
    const result = new Array(m);
    let index = 0;
  
    for (let i = 0; i < m; i++) {
      result[i] = new Array(n);
      for (let j = 0; j < n; j++) {
        result[i][j] = original[index];
        index++;
      }
    }
  
    return result;
  }


//   question-2

function arrangeCoins(n) {
    let left = 0;
    let right = n;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const coinsRequired = (mid * (mid + 1)) / 2;
  
      if (coinsRequired === n) {
        return mid; // Found exact number of complete rows
      } else if (coinsRequired < n) {
        left = mid + 1; // Go to the right half
      } else {
        right = mid - 1; // Go to the left half
      }
    }
  
    return right; // Number of complete rows
  }

//   question-3

function sortedSquares(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    let index = n - 1;
  
    while (left <= right) {
      const leftSquare = nums[left] * nums[left];
      const rightSquare = nums[right] * nums[right];
  
      if (leftSquare > rightSquare) {
        result[index] = leftSquare;
        left++;
      } else {
        result[index] = rightSquare;
        right--;
      }
  
      index--;
    }
  
    return result;
  }


//   question-4

function findDistinct(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const distinct1 = [];
    const distinct2 = [];
  
    for (const num of nums1) {
      if (!set2.has(num)) {
        distinct1.push(num);
      }
    }
  
    for (const num of nums2) {
      if (!set1.has(num)) {
        distinct2.push(num);
      }
    }
  
    return [distinct1, distinct2];
  }

//   question-5

function distanceValue(arr1, arr2, d) {
    let distance = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      let hasCloseElement = false;
  
      for (let j = 0; j < arr2.length; j++) {
        if (Math.abs(arr1[i] - arr2[j]) <= d) {
          hasCloseElement = true;
          break;
        }
      }
  
      if (!hasCloseElement) {
        distance++;
      }
    }
  
    return distance;
  }


//   question-6

function findDuplicates(nums) {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      const index = Math.abs(nums[i]) - 1;
      if (nums[index] < 0) {
        result.push(Math.abs(nums[i]));
      } else {
        nums[index] = -nums[index];
      }
    }
  
    return result;
  }

//   question-7

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] < nums[right]) {
        // The minimum element is in the left half
        right = mid;
      } else {
        // The minimum element is in the right half
        left = mid + 1;
      }
    }
  
    return nums[left];
  }

//   question-8

function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const sortedChanged = changed.slice().sort((a, b) => a - b);
    const original = [];
  
    for (const num of sortedChanged) {
      if (original.includes(num / 2)) {
        original.splice(original.indexOf(num / 2), 1);
      } else {
        return [];
      }
  
      original.push(num);
    }
  
    return original;
  }