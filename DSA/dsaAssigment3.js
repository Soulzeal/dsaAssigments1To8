
// question-1

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let closestSum = Infinity;
  
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;
  
      while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right];
        if (currentSum === target) {
          return target;
        }
  
        if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
          closestSum = currentSum;
        }
  
        if (currentSum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return closestSum;
  }
  
  const nums = [-1, 2, 1, -4];
  const target = 1;
  console.log(threeSumClosest(nums, target));


//   question-2

function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const quadruplets = [];
  
    for (let i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
  
      for (let j = i + 1; j < n - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue;
        }
  
        let left = j + 1;
        let right = n - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
            while (left < right && nums[left] === nums[left + 1]) {
              left++;
            }
            while (left < right && nums[right] === nums[right - 1]) {
              right--;
            }
            left++;
            right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return quadruplets;
  }
  
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  console.log(fourSum(nums, target));


//   question-3

function nextPermutation(nums) {
    const n = nums.length;
    let i = n - 2;
  
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      let j = n - 1;
      while (j > i && nums[j] <= nums[i]) {
        j--;
      }
      swap(nums, i, j);
    }
  
    reverse(nums, i + 1, n - 1);
  
    return nums;
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  function reverse(nums, start, end) {
    while (start < end) {
      swap(nums, start, end);
      start++;
      end--;
    }
  }
  
  const nums = [1, 2, 3];
  console.log(nextPermutation(nums));

//   question-4

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return left;
  }
  
  const nums = [1, 3, 5, 6];
  const target = 5;
  console.log(searchInsert(nums, target));

//   question-5

function plusOne(digits) {
    const n = digits.length;
  
    // Start from the rightmost digit
    for (let i = n - 1; i >= 0; i--) {
      // Increment the current digit
      digits[i] += 1;
  
      // If the digit becomes less than 10, we are done
      if (digits[i] < 10) {
        return digits;
      }
  
      // Otherwise, set the digit to 0 and continue with the next digit
      digits[i] = 0;
    }
  
    // If we reach here, it means the entire number was composed of nines
    // In that case, add a new digit of value 1 at the beginning
    digits.unshift(1);
  
    return digits;
  }
  
  const digits = [1, 2, 3];
  console.log(plusOne(digits));

//   question-6

function singleNumber(nums) {
    let result = 0;
  
    // XOR all the elements in the array
    for (let num of nums) {
      result ^= num;
    }
  
    return result;
  }
  
  const nums = [2, 2, 1];
  console.log(singleNumber(nums));

//   question-7

function findMissingRanges(nums, lower, upper) {
    const result = [];
  
    // Helper function to add range to the result
    const addRange = (start, end) => {
      if (start === end) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${end}`);
      }
    };
  
    // Check for missing numbers before the first element
    if (lower < nums[0]) {
      addRange(lower, nums[0] - 1);
    }
  
    // Check for missing numbers between consecutive elements
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] > 1) {
        addRange(nums[i - 1] + 1, nums[i] - 1);
      }
    }
  
    // Check for missing numbers after the last element
    if (upper > nums[nums.length - 1]) {
      addRange(nums[nums.length - 1] + 1, upper);
    }
  
    return result;
  }
  
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  console.log(findMissingRanges(nums, lower, upper));

//   question-8

function canAttendMeetings(intervals) {
    // Sort the intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Check for overlapping intervals
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
        return false;
      }
    }
  
    return true;
  }
  
  const intervals = [[0, 30], [5, 10], [15, 20]];
  console.log(canAttendMeetings(intervals));