
// https://www.hackerrank.com/challenges/arrays-ds/problem

export default function reverseArray(a: number[]): number[] {

  for (let i = 0; i < a.length / 2; i++) {
    const temp = a[i];
    a[i] = a[a.length - i - 1];
    a[a.length - i - 1] = temp;
  }

  return a;
}

import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

Deno.test("reverseArray", () => {
  assertEquals(reverseArray([1]), [1]);
  assertEquals(reverseArray([1, 2, 3]), [3, 2, 1]);
  assertEquals(reverseArray([1, 4, 3, 2]), [2, 3, 4, 1]);

});