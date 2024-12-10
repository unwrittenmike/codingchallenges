export const isColon = (string) => string === ":";
export const isComma = (string) => string === ",";
export const isDoubleQuote = (string) => string === `"`;
export const isLeftCurlyBrace = (string) => string === "{";
export const isRightCurlyBrace = (string) => string === "}";
export const isLeftSquareBracket = (string) => string === "[";
export const isRightSquareBracket = (string) => string === "]";
export const isNumber = (string) => {
    const numberRegex = /^-?\d*\.?\d+$/;
    return numberRegex.test(string)
}
export const isBoolean = (string) => string === 'true' || string === 'false'
export const isNull = (string) => string === 'null'