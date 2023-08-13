//longest substring without repeating character

// let s ="pwwkerw"
// const isUnique = (s) => {
//   const set = new Set()
//   for(let i = 0; i < s.length; i++){
//     if(set.has(s[i])){
//       return false
//     }
//     set.add(s[i])
//   }
//   return true
// }
// var lengthofLongestSubstring = function(s){
//   let max = 0 // var to keep track of max length of substring
//   for (let begin =0; begin < s.length; begin++){
//     for (let end =begin; end < s.length; end++){
//       const subString = s.substring(begin, end + 1);
//       if (isUnique(subString)){
//         max = Math.max(max, subString.length)
//       }
//     }
//   }
//   return max
// }
// console.log(lengthofLongestSubstring(s))

//hash map approach
// let s ="pwwkerw"
// var hashMap = function(s){
//   let max = 0
//   let begin = 0 
//   let map = {}

//   for (let end = 0; end < s.length; end++){
//     if(map[s[end]] !== undefined && map[s[end]] >= begin){
//         begin = map[s[end]] + 1
//     }
//     map[s[end]] = end
//     max = Math.max(max, end - begin + 1)
//   }
// }
// hashMap(s)


//sliding window approach
let s ="pwwkerw"
var slidingWindow = function(s){
  let max = 0
  let begin = 0
  let set = new Set()
  for (let end = 0; end < s.length; end++){
    while (set.has(s[end])){
      set.delete(s[begin])
      begin++ 
    }
    set.add(s[end])
    max = Math.max(max, end - begin + 1)
  }
}
slidingWindow(s)


//Two Sum
let arr = [1,2,3,5,7]
let target = 9
var twoSum = function(arr , target){
  let map = new Map()
  for (i=0; i< arr.length; i++){
    if(map.has(target - arr[i])){
      return [map.get(target - nums[i]), i]
    } else {
      map.set(arr[i], i)
    }
    return []
  }
}
twoSum(arr, target)