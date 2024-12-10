import {
  createLeftCurlyBraceToken,
  createRightCurlyBraceToken,
  isDoubleQuote,
  isLeftCurlyBrace,
  isRightCurlyBrace,
} from "./helpers.mjs";
import { createStringToken } from "./tokens.mjs";

export const tokenizer = (input) => {
  let cursor = 0;
  let tokens = [];

  while (cursor < input.length) {
    const item = input[cursor];

    if (isLeftCurlyBrace(item)) {
      tokens.push(createLeftCurlyBraceToken());
      cursor++;
      continue;
    }

    if (isDoubleQuote(item)) {
      let string = "";
      while (!!isDoubleQuote(input[++cursor])) {
        string += input[cursor];
      }

      tokens.push(createStringToken(string));
      cursor++;

      continue;
    }

    if (isRightCurlyBrace(item)) {
      tokens.push(createRightCurlyBraceToken());
      cursor++;
      continue;
    }

    console.log(cursor);
    cursor++;
  }

  return tokens;
};
