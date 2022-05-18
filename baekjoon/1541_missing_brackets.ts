// https://www.acmicpc.net/problem/1541

import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

export default function missingBrackets(input: string): number {
  const exp = input.split('-');
  let ans = 0;

  for (const i of exp[0].split('+')) {
    ans += Number(i);
  }

  for (let i = 1; i < exp.length; i++) {
    for (const j of exp[i].split('+')) {
      ans -= Number(j)
    }
  }

  return ans
}

Deno.test("baekjoon 1541. missingBrackets", () => {
  assertEquals(missingBrackets('55-50+40'), -35);
  assertEquals(missingBrackets('10+20+30+40'), 100);
  assertEquals(missingBrackets('00009-00009'), 0);
});