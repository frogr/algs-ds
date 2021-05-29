// o(n^2)

function maxSubarraySum(subarray, n) {
 if (n > subarray.length) {
   return null
 }
 let maximum = -Infinity
 for (let i = 0; i < subarray.length - n + 1; i++) {
   let temp = 0
   for (let j = 0; j < n; j++) {
     temp += subarray[i + j]
   }
   if (temp > maximum) {
     maximum = temp;
   }
 }
 return console.log(maximum)
}

maximumSubarraySum([1,2,5,2,8,1,5], 2) // 10
maximumSubarraySum([1,2,5,2,8,1,5], 4) // 17
maximumSubarraySum([4,2,1,6], 1) // 6
maximumSubarraySum([], 4) // null


// refactor: o(n)
function maximumSubarraySum(subarray, n) {
  let maximumSum = 0
  let tempSum = 0

  if (subarray.length < n) return null 
  for (let i = 0; i < n; i++) {
    maximumSum += subarray[i]
  }
  tempSump = maximumSum;
  for (let i = n; i < subarray.length; i++) {
    tempSum = tempSum - subarray[i - n] + subarray[i]
    maximumSum = Math.max(maximumSum, tempSum)
  }
  return maximumSum
}

maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
maxSubarraySum([4,2,1,6], 1) // 6
maxSubarraySum([], 4) // null