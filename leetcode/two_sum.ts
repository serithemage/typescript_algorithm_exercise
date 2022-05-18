// 1. Two Sum
// https://leetcode.com/problems/two-sum/
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
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


import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

Deno.test("1. Two Sum", () => {
  assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assertEquals(twoSum([3, 2, 4], 6), [1, 2]);
  assertEquals(twoSum([3, 3], 6), [0, 1]);
});