import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";
import twoSum from "./two_sum.ts";

Deno.test("1. Two Sum", () => {
  assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assertEquals(twoSum([3, 2, 4], 6), [1, 2]);
  assertEquals(twoSum([3, 3], 6), [0, 1]);
});