import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

Deno.test("baekjoon 1541. missingBrackets", () => {
  assertEquals(anagrams('LISTEN', 'SILENT'), true);
  assertEquals(anagrams('LISTEN', 'LISTEE'), false);
});


function anagrams(str1: string, str2: string): boolean {

  return str1.split('').sort().join() === str2.split('').sort().join();

}

