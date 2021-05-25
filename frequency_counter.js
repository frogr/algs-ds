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