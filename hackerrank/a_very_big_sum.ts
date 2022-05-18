
// https://www.hackerrank.com/challenges/a-very-big-sum/problem

export default function aVeryBigSum(ar: number[]): number {
  // Write your code here
  const sum = (pastSum: number, currValue: number): number => { return pastSum + currValue }
  return ar.reduce(sum);

}


import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

Deno.test("aVeryBigSum", () => {
  assertEquals(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]), 5000000015);
});