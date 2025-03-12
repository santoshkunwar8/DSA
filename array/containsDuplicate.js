/**
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

 * @param {number[]} nums
 * @return {boolean}
 */


// time complexity O(n)

var containsDuplicate = function (nums) {
  let map = new Map();

  for (let num of nums) {
    if (map.has(num)) {
      return true;
    }
    map.set(num, true);
  }

  return false;
};
