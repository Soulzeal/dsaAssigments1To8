// question-1

function minimumDeleteSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;
  
    // Create a 2D array to store the subproblem solutions
    const dp = Array(m + 1)
      .fill()
      .map(() => Array(n + 1).fill(0));
  
    // Fill the DP table
    for (let i = m - 1; i >= 0; i--) {
      dp[i][n] = dp[i + 1][n] + s1.charCodeAt(i); // Add ASCII value of s1[i]
    }
  
    for (let j = n - 1; j >= 0; j--) {
      dp[m][j] = dp[m][j + 1] + s2.charCodeAt(j); // Add ASCII value of s2[j]
    }
  
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (s1[i] === s2[j]) {
          dp[i][j] = dp[i + 1][j + 1]; // Characters match, no deletion required
        } else {
          dp[i][j] = Math.min(
            dp[i + 1][j] + s1.charCodeAt(i), // Delete s1[i]
            dp[i][j + 1] + s2.charCodeAt(j) // Delete s2[j]
          );
        }
      }
    }
  
    return dp[0][0]; // Minimum ASCII sum
  }
  
  // Example usage:
  const s1 = "sea";
  const s2 = "eat";
  const result = minimumDeleteSum(s1, s2);
  console.log(result); // Output: 231


// question-2

function isValid(s) {
    const stack = []; // Use an array as a stack
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '*') {
        stack.push(s[i]); // Push '(' or '*' to the stack
      } else if (s[i] === ')') {
        if (stack.length > 0 && stack[stack.length - 1] === '(') {
          stack.pop(); // Matching '(' found, pop from the stack
        } else if (
          stack.length > 0 &&
          stack[stack.length - 1] === '*'
        ) {
          stack.pop(); // Treat '*' as '(' and pop from the stack
        } else {
          return false; // No matching '(' or '*' found, string is invalid
        }
      }
    }
  
    // Process remaining '*' in the stack
    let count = 0; // Count of remaining '('
    while (stack.length > 0) {
      const top = stack.pop();
      if (top === '(') {
        count++;
      } else if (count > 0) {
        count--;
      } else {
        return false; // No matching '(' for '*' found, string is invalid
      }
    }
  
    return true; // All characters processed, string is valid
  }
  
  // Example usage:
  const s = "()";
  const result = isValid(s);
  console.log(result); // Output: true

// question-3

function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    // Create a 2D array to store the subproblem solutions
    const dp = Array(m + 1)
      .fill()
      .map(() => Array(n + 1).fill(0));
  
    // Fill the DP table
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1; // Characters match, increment LCS length
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Take the maximum LCS length
        }
      }
    }
  
    const lcsLength = dp[m][n];
    const steps = m + n - 2 * lcsLength; // Total length - 2 * LCS length
  
    return steps;
  }
  
  // Example usage:
  const word1 = "sea";
  const word2 = "eat";
  const result = minDistance(word1, word2);
  console.log(result); // Output: 2

// question-4

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBinaryTree(str) {
    // Helper function to find the closing parenthesis index
    const findClosingParenthesis = (str, start) => {
      let count = 0;
      for (let i = start; i < str.length; i++) {
        if (str[i] === '(') {
          count++;
        } else if (str[i] === ')') {
          count--;
          if (count === 0) {
            return i;
          }
        }
      }
      return -1; // Closing parenthesis not found
    };
  
    // Helper function to parse the integer value from a substring
    const parseInteger = (str, start, end) => {
      let numStr = '';
      for (let i = start; i < end; i++) {
        numStr += str[i];
      }
      return parseInt(numStr);
    };
  
    const construct = (str, start, end) => {
      if (start >= end) {
        return null; // Empty tree
      }
  
      // Find the value of the current node
      let i = start;
      while (i < end && !isNaN(parseInt(str[i]))) {
        i++;
      }
      const val = parseInteger(str, start, i);
  
      const node = new TreeNode(val);
  
      // Find the index of the closing parenthesis for the left child
      const leftParenthesis = i;
      const rightParenthesis = findClosingParenthesis(str, leftParenthesis + 1);
  
      // Construct the left child subtree
      node.left = construct(str, leftParenthesis + 1, rightParenthesis);
  
      // Find the index of the closing parenthesis for the right child
      const nextLeftParenthesis = rightParenthesis + 1;
      const nextRightParenthesis = findClosingParenthesis(
        str,
        nextLeftParenthesis + 1
      );
  
      // Construct the right child subtree
      node.right = construct(str, nextLeftParenthesis + 1, nextRightParenthesis);
  
      return node;
    };
  
    return construct(str, 0, str.length);
  }
  
  // Example usage:
  const str = "4(2(3)(1))(6(5))";
  const root = constructBinaryTree(str);
  console.log(root);

// question-5

function compress(chars) {
    let writeIndex = 0; // Index to write the compressed characters
    let count = 1; // Count of consecutive repeating characters
  
    for (let i = 0; i < chars.length; i++) {
      // Check if the current character is the same as the next character
      if (i + 1 < chars.length && chars[i] === chars[i + 1]) {
        count++; // Increment the count of consecutive repeating characters
      } else {
        // Write the current character
        chars[writeIndex++] = chars[i];
  
        // Write the count if it is greater than 1
        if (count > 1) {
          const countStr = count.toString();
          for (let j = 0; j < countStr.length; j++) {
            chars[writeIndex++] = countStr[j];
          }
        }
  
        count = 1; // Reset the count
      }
    }
  
    return writeIndex; // Return the new length of the array
  }
  
  // Example usage:
  const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
  const newLength = compress(chars);
  const compressedChars = chars.slice(0, newLength);
  console.log(newLength); // Output: 6
  console.log(compressedChars); // Output: ["a", "2", "b", "2", "c", "3"]

// question-6

function findAnagrams(s, p) {
    const result = []; // Array to store the start indices of anagrams
    const sFreq = new Array(26).fill(0); // Frequency array for characters in s
    const pFreq = new Array(26).fill(0); // Frequency array for characters in p
  
    // Function to compare two frequency arrays
    const isEqual = (arr1, arr2) => {
      for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    };
  
    // Calculate the frequency of characters in p
    for (let i = 0; i < p.length; i++) {
      const charCode = p.charCodeAt(i) - 97; // Convert character to index
      pFreq[charCode]++;
    }
  
    // Initialize the sliding window
    let left = 0;
    let right = 0;
  
    // Slide the window over s
    while (right < s.length) {
      const charCode = s.charCodeAt(right) - 97; // Convert character to index
      sFreq[charCode]++; // Increment frequency of current character
  
      // Shrink the window if its size is greater than p's length
      if (right - left + 1 > p.length) {
        sFreq[s.charCodeAt(left) - 97]--; // Decrement frequency of leftmost character
        left++; // Move the left pointer to the right
      }
  
      // Check if the current window is an anagram of p
      if (right - left + 1 === p.length && isEqual(sFreq, pFreq)) {
        result.push(left); // Add the start index to the result
      }
  
      right++; // Move the right pointer to the right
    }
  
    return result;
  }
  
  // Example usage:
  const s = "cbaebabacd";
  const p = "abc";
  const result = findAnagrams(s, p);
  console.log(result); // Output: [0, 6]

// question-7

function decodeString(s) {
    const stack = []; // Stack to store characters and repetition counts
    let currentNum = 0; // Current repetition count
    let currentStr = ''; // Current string
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (/[0-9]/.test(char)) {
        // Update the repetition count
        currentNum = currentNum * 10 + parseInt(char);
      } else if (char === '[') {
        // Push the current repetition count and string to the stack
        stack.push(currentStr);
        stack.push(currentNum);
        currentStr = '';
        currentNum = 0;
      } else if (char === ']') {
        // Decode the current string
        const num = stack.pop();
        const prevStr = stack.pop();
        currentStr = prevStr + currentStr.repeat(num);
      } else {
        // Append the character to the current string
        currentStr += char;
      }
    }
  
    return currentStr;
  }
  
  // Example usage:
  const s = "3[a]2[bc]";
  const result = decodeString(s);
  console.log(result); // Output: "aaabcbc"
  

// question-8

function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false; // Different lengths, cannot swap
    }
  
    if (s === goal) {
      // Check if there are any duplicate characters in s
      const charCount = new Map();
      for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount.has(char)) {
          return true; // Found duplicate characters, can swap
        }
        charCount.set(char, true);
      }
      return false; // No duplicate characters, cannot swap
    }
  
    const mismatchedPairs = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        mismatchedPairs.push(i);
      }
      if (mismatchedPairs.length > 2) {
        return false; // More than two mismatched pairs, cannot swap
      }
    }
  
    if (mismatchedPairs.length !== 2) {
      return false; // Number of mismatched pairs is not two, cannot swap
    }
  
    const [i, j] = mismatchedPairs;
    return s[i] === goal[j] && s[j] === goal[i]; // Check if characters at indices i and j can be swapped
  }
  
  // Example usage:
  const s = "ab";
  const goal = "ba";
  const result = buddyStrings(s, goal);
  console.log(result); // Output: true
  