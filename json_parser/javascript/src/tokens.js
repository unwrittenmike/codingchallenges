const createToken = (type, value) => ({ type, value })
export const leftCurlyBraceToken = (value) => createToken("LeftCurlyBrace", value)