// my intial solution
function _same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(false)
  }
  const mapped = arr1.map(x => x * x).sort()
  const sorted = arr2.sort()
  mappedStr = JSON.stringify(mapped)
  sortedStr = JSON.stringify(sorted)
  if (sortedStr == mappedStr) {
    return console.log(true)
  } else {
    return console.log(false)
  }
}

// refactored solution w/o sort
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(false)
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {} 
  for (let i of arr1) {
    frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1
  }
  for (let i of arr2) {
    frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return console.log(false)
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return console.log(false)
    }
  }
  return console.log(true);
}
// tests
same([1, 2, 3], [1, 9]) // false
same([1, 2, 2, 5, 3], [1, 4, 4, 25, 9]) // true 
same([1, 2, 1], [4, 4, 1]) // false

// anagram problem

// given two strings, check if the second one is an anagram of the first one

function validAnagram(str1, str2) {
   // check length and if its different, false
  if (str1.length !== str2.length) {
    return false;
  }
  // collect frequency of both strings
  let frequencyChecker = {}
  let frequencyChecker2 = {}
  for (let value in str1) {
    let char = str1[value]
    if (frequencyChecker[char] > 0) {
      frequencyChecker[char]++;
    } else {
      frequencyChecker[char] = 1;
    }
  }
  for (let value in str2) {
    let char = str2[value]
    if (frequencyChecker2[char] > 0) {
      frequencyChecker2[char]++;
    } else {
      frequencyChecker2[char] = 1;
    }
  }
  // check to make sure frequencies are the same
  for (let value in frequencyChecker) {
    if (!(value in frequencyChecker2)) {
      return false
    } else if (frequencyChecker[value] != frequencyChecker2[value]) {
      return false;
    }
  }
  // return true 
  return true;
}
console.log("ANAGRAMS")

validAnagram("alexa", "axela") // true
validAnagram("axela", "austin") // false
validAnagram("nitsua", "austin") // true
validAnagram("anagrammm", "nagaraaam") // false
