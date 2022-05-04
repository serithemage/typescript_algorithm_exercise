// 1. Two Sum
// https://leetcode.com/problems/two-sum/
export default function twoSum(nums: number[], target: number): number[] {

  //Map<number, index> 
  const map = new Map<number, number>()

  for (let index = 0; index < nums.length; index++) {
    const differenceNumberIndex = map.get(target - nums[index])
    if (differenceNumberIndex != undefined) {
      return [differenceNumberIndex, index]
    }
    map.set(nums[index], index)
  }
  throw new Error("There is no answer.")
}