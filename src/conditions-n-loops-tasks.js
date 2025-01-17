/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(/* queen, king */) {
  throw new Error('Not implemented');
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b && c < a * b && c !== 0) {
    return true;
  }
  if (a === c && b < a * c && b !== 0) {
    return true;
  }
  if (b === c && a < b * c && a !== 0) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const numerals = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII',
    'XIII',
    'XIV',
    'XV',
    'XVI',
    'XVII',
    'XVIII',
    'XIX',
    'XX',
    'XXI',
    'XXII',
    'XXIII',
    'XXIV',
    'XXV',
    'XXVI',
    'XXVII',
    'XXVIII',
    'XXIX',
    'XXX',
    'XXXI',
    'XXXII',
    'XXXIII',
    'XXXIV',
    'XXXV',
    'XXXVI',
    'XXXVII',
    'XXXVIII',
  ];
  return numerals[num - 1];
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let finalStr = '';
  let space = ' ';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i === numberStr.length - 1) {
      space = '';
    }
    switch (numberStr[i]) {
      case '-':
        finalStr += `minus${space}`;
        break;
      case '.':
        finalStr += `point${space}`;
        break;
      case ',':
        finalStr += `point${space}`;
        break;
      case '0':
        finalStr += `zero${space}`;
        break;
      case '1':
        finalStr += `one${space}`;
        break;
      case '2':
        finalStr += `two${space}`;
        break;
      case '3':
        finalStr += `three${space}`;
        break;
      case '4':
        finalStr += `four${space}`;
        break;
      case '5':
        finalStr += `five${space}`;
        break;
      case '6':
        finalStr += `six${space}`;
        break;
      case '7':
        finalStr += `seven${space}`;
        break;
      case '8':
        finalStr += `eight${space}`;
        break;
      case '9':
        finalStr += `nine${space}`;
        break;
      default:
        break;
    }
  }
  return finalStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const strNum = `${num}`;
  for (let i = 0; i < strNum.length; i += 1) {
    if (+strNum[i] === digit) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length === 0) {
    return -1;
  }
  let sumFirstEl = 0;
  let sumLastEl = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sumFirstEl += arr[i];
    if (arr[i + 2]) {
      for (let j = i + 2; j < arr.length; j += 1) {
        sumLastEl += arr[j];
      }
    }
    if (sumFirstEl === sumLastEl) {
      return i + 1;
    }
    sumLastEl = 0;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  if (!size) {
    return [];
  }
  const matrix = [];
  let counter = 1;
  let startRow = 0;
  let endRow = size - 1;
  let startCol = 0;
  let endCol = size - 1;

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i += 1) {
      matrix[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;
    for (let i = startRow; i <= endRow; i += 1) {
      matrix[i][endCol] = counter;
      counter += 1;
    }
    endCol -= 1;
    for (let i = endCol; i >= startCol; i -= 1) {
      matrix[endRow][i] = counter;
      counter += 1;
    }
    endRow -= 1;
    for (let i = endRow; i >= startRow; i -= 1) {
      matrix[i][startCol] = counter;
      counter += 1;
    }
    startCol += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const atrix = matrix;
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i += 1) {
    newMatrix[i] = [];
  }
  for (let i = 0; i < matrix[0].length; i += 1) {
    for (let j = matrix.length - 1; j >= 0; j -= 1) {
      newMatrix[i][matrix.length - j - 1] = matrix[j][i];
    }
  }
  for (let i = 0; i < newMatrix.length; i += 1) {
    for (let j = 0; j < newMatrix[i].length; j += 1) {
      atrix[i][j] = newMatrix[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let itr = iterations;
  let string = str;
  let flag = false;
  const oneString = str;
  const arrStr = [];
  let evenStr = '';
  let oddStr = '';
  let countItr = 0;
  let count = 0;
  const regExp = /undefined/;
  const result = regExp.test(str);

  while (itr !== 0) {
    if (string === oneString && count > 0) {
      flag = true;
    }
    if (!flag) {
      for (let i = 0; i < string.length; i += 1) {
        if (result) {
          if (+string[i]) {
            if (i % 2 === 0) {
              evenStr += string[i];
            } else oddStr += string[i];
          }
        } else if (i % 2 === 0) {
          evenStr += string[i];
        } else oddStr += string[i];
      }
      string = `${evenStr}${oddStr}`;
      evenStr = '';
      oddStr = '';
      countItr += 1;
      arrStr[arrStr.length] = string;
    } else {
      if (string === oneString && countItr > 0) {
        countItr = 0;
        string = arrStr[countItr];
      } else {
        string = arrStr[countItr];
        count += 1;
      }
      countItr += 1;
    }
    itr -= 1;
    count += 1;
  }

  return string;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  console.log(number);
  const numStr = `${number}`;
  let strRight = '';
  let strLeft = '';
  let position = 0;
  const finalRight = [];
  let finalLeft = '';
  let flag = false;
  let lessNum = 0;
  let lessNumRight = null;

  const leftArr = [];
  const rightArr = [];
  for (let i = numStr.length - 2; i > 0; i -= 1) {
    if (numStr[i] < numStr[i + 1]) {
      lessNum = `${numStr[i]}`;
      position = i;
      break;
    }
  }
  if (!lessNum) {
    return number;
  }

  for (let i = numStr.length - 1; i >= 0; i -= 1) {
    if (numStr[i] === lessNum && i === position) {
      flag = true;
    }
    if (flag) {
      leftArr.unshift(numStr[i]);
    }
    if (!flag) {
      rightArr.unshift(numStr[i]);
    }
  }
  strLeft = leftArr.join('');
  strRight = rightArr.join('');
  for (let i = 0; i < strRight.length; i += 1) {
    if (strRight[i] > lessNum) {
      if (lessNumRight === null) {
        lessNumRight = strRight[i];
      } else if (lessNumRight > strRight[i]) {
        lessNumRight = strRight[i];
      }
    }
  }

  let flagFinalRight = false;
  for (let i = 0; i < strRight.length; i += 1) {
    if (strRight[i] === lessNumRight && !flagFinalRight) {
      finalRight[i] = lessNum;
      strRight[i] = lessNum;
      flagFinalRight = true;
    } else {
      finalRight[i] = strRight[i];
    }
  }
  for (let i = 0; i < strLeft.length; i += 1) {
    if (i === strLeft.length - 1) {
      finalLeft += lessNumRight;
    } else {
      finalLeft += strLeft[i];
    }
  }
  let finalRightSorted = '';
  const finalRightSort = finalRight.sort();
  for (let i = 0; i < finalRightSort.length; i += 1) {
    finalRightSorted += finalRightSort[i];
  }
  const final = finalLeft + finalRightSorted;
  strRight[strRight.length - 1] = lessNum;
  return +final;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
