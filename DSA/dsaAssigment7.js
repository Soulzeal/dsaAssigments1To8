// question-1

function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const sToT = new Map();
    const tToS = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if ((sToT.has(charS) && sToT.get(charS) !== charT) || (tToS.has(charT) && tToS.get(charT) !== charS)) {
        return false;
      } else {
        sToT.set(charS, charT);
        tToS.set(charT, charS);
      }
    }
  
    return true;
  }
  
  const s = "egg";
  const t = "add";
  console.log(isIsomorphic(s, t));


// question-2

function isStrobogrammatic(num) {
    const mapping = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6'
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const charLeft = num[left];
      const charRight = num[right];
  
      if (!mapping.hasOwnProperty(charLeft) || mapping[charLeft] !== charRight) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }
  
  const num = "69";
  console.log(isStrobogrammatic(num));


// question-3

function addStrings(num1, num2) {
    let result = '';
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
  
    while (i >= 0 || j >= 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
  
      const sum = digit1 + digit2 + carry;
      result += (sum % 10).toString();
      carry = Math.floor(sum / 10);
  
      i--;
      j--;
    }
  
    if (carry > 0) {
      result += carry.toString();
    }
  
    return result.split('').reverse().join('');
  }
  
  const num1 = "11";
  const num2 = "123";
  console.log(addStrings(num1, num2));


// question-4

function reverseWords(s) {
    const words = s.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split('').reverse().join('');
    }
  
    return words.join(' ');
  }
  
  const s = "Let's take LeetCode contest";
  console.log(reverseWords(s));


// question-5

function reverseStr(s, k) {
    const chars = s.split('');
  
    for (let i = 0; i < chars.length; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, chars.length - 1);
  
      while (start < end) {
        const temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;
        start++;
        end--;
      }
    }
  
    return chars.join('');
  }
  
  const s = "abcdefg";
  const k = 2;
  console.log(reverseStr(s, k));


// question-6

function rotateString(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const concat = s + s;
  
    return concat.includes(goal);
  }
  
  const s = "abcde";
  const goal = "cdeab";
  console.log(rotateString(s, goal));


// question-7

function buildString(str) {
    const stack = [];
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '#') {
        stack.push(str[i]);
      } else {
        if (stack.length > 0) {
          stack.pop();
        }
      }
    }
  
    return stack.join('');
  }
  
  function backspaceCompare(s, t) {
    const finalS = buildString(s);
    const finalT = buildString(t);
  
    return finalS === finalT;
  }
  
  const s = "ab#c";
  const t = "ad#c";
  console.log(backspaceCompare(s, t));


// question-8

function checkStraightLine(coordinates) {
    if (coordinates.length <= 2) {
      return true;
    }
  
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    const slope = (y2 - y1) / (x2 - x1);
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      const [prevX, prevY] = coordinates[i - 1];
      const currSlope = (y - prevY) / (x - prevX);
  
      if (currSlope !== slope) {
        return false;
      }
    }
  
    return true;
  }
  
  const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
  console.log(checkStraightLine(coordinates));