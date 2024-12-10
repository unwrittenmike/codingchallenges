const STRING_TOKEN_TYPE = "String";
const LEFT_CURLY_BRACE_TOKEN_TYPE = "LeftCurlyBrace";
const RIGHT_CURLY_BRACE_TOKEN_TYPE = "RightCurlyBrace";

export const createToken = (type, value) => ({ type, value });

export const createLeftCurlyBraceToken = () =>
  createToken(LEFT_CURLY_BRACE_TOKEN_TYPE, "{");

export const createRightCurlyBraceToken = () =>
  createToken(RIGHT_CURLY_BRACE_TOKEN_TYPE, "}");

export const createStringToken = (value) =>
  createToken(STRING_TOKEN_TYPE, value);
