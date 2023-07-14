// quest 1

function twoNumSum(nums, target) {
    let numMap = {};
  
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
  
      if (numMap.hasOwnProperty(complement)) {
        return [numMap[complement], i];
      }
  
      numMap[nums[i]] = i;
    }
  
    return [];
  }
  
  let nums = [2, 7, 11, 15];
  let target = 9;
  let result1 = twoNumSum(nums, target);
  console.log(result1);

// quest 2

function removeElementOccurence(nums, val) {
    let left = 0;
    let right = nums.length;
  
    while (left < right) {
      if (nums[left] === val) {
        nums[left] = nums[right - 1];
        right--;
      } else {
        left++;
      }
    }
  
    return left;
  }
  
  let nums = [3, 2, 2, 3];
  let val = 3;
  
  let result = removeElementOccurence(nums, val);
  
  console.log(nums);
  
  let output = "Output: " + result + ", nums = [";
  for (let i = 0; i < result; i++) {
    output += nums[i] + ",";
  }
  
  output = output.slice(0, -1); // Remove the trailing comma
  output += "]";
  
  console.log(output);


//   quest 3

function binarySearch(nums, target, left, right) {
    if (left > right) {
      return -1;
    }
  
    let mid = Math.floor(left + (right - left) / 2);
  
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      return binarySearch(nums, target, mid + 1, right);
    } else {
      return binarySearch(nums, target, left, mid - 1);
    }
  }
  
  let nums = [1, 3, 5, 6];
  let target = 5;
  
  let result = binarySearch(nums, target, 0, nums.length - 1);
  console.log("Element found at index:", result);

// ques: 4

class Arr_add_one_04 {
    static addOne(digits) {
        let n = digits.length;

        for (let i = n - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }

            digits[i] = 0;
        }

        let newDigits = Array(n + 1).fill(0);
        newDigits[0] = 1;

        return newDigits;
    }
}

let digits = [1, 2, 9];
let result2 = Arr_add_one_04.addOne(digits);
console.log("Resultant array: " + result2);


// ques 5
function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
  
    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  
  let nums1 = [1, 2, 3, 0, 0, 0];
  let nums2 = [2, 5, 6];
  
  let n = nums2.length;
  let m = nums1.length - n;
  
  merge(nums1, m, nums2, n);
  console.log("Resultant array:", nums1);

//   quest 6

function containsDuplicate(nums) {
    let hashMap = {};
  
    for (let num of nums) {
      if (hashMap[num]) {
        return true;
      }
      hashMap[num] = true;
    }
  
    return false;
  }
  
  let nums = [1, 2, 3];
  
  let result = containsDuplicate(nums);
  console.log("Duplicate found: " + result);

//   qyest 7

function moveZeros(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      while (nums[left] !== 0 && left < right) {
        left++;
      }
  
      while (nums[right] === 0 && left < right) {
        right--;
      }
  
      if (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
      }
    }
  }
  
  let nums = [0, 1, 0, 3, 12];
  
  moveZeros(nums);
  console.log("Array with zeros moved to the end: " + nums.join(" "));

//   quest 8

function findMissingDuplicate(nums) {
    let result = [0, 0];
    let n = nums.length;
    let count = new Array(n + 1).fill(0);
  
    for (let num of nums) {
      count[num]++;
    }
  
    for (let i = 1; i <= n; i++) {
      if (count[i] === 2) {
        result[0] = i;
        break;
      }
    }
  
    for (let i = 1; i <= n; i++) {
      if (count[i] === 0) {
        result[1] = i;
        break;
      }
    }
  
    return result;
  }
  
  let nums = [1, 1, 2, 3];
  
  let result = findMissingDuplicate(nums);
  console.log("Result: " + result);