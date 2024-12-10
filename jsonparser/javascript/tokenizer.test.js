import { describe, expect, it } from "vitest";
import { tokenizer } from "./tokenizer.mjs";
import {
  createLeftCurlyBraceToken,
  createRightCurlyBraceToken,
} from "./helpers.mjs";

describe("tokenizer", () => {
  it("returns an empty array when input is an empty string", () => {
    expect(tokenizer("")).toStrictEqual([]);
  });

  it("returns a array containing a LeftCurlyBrace token", () => {
    expect(tokenizer("{")).toStrictEqual([createLeftCurlyBraceToken()]);
  });

  it("returns a array containing a RightCurlyBrace token", () => {
    expect(tokenizer("}")).toStrictEqual([createRightCurlyBraceToken()]);
  });
});
