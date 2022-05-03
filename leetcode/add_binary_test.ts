import { assertStrictEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";
import addBinary from "./add_binary.ts";

Deno.test("67. Add Binary", () => {
  assertStrictEquals(addBinary("11", "1"), "100");
  assertStrictEquals(addBinary("1010", "1011"), "10101");
});