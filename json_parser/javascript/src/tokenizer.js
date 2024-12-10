import {
    isBoolean,
    isDoubleQuote,
    isLeftCurlyBrace,
    isLeftSquareBracket,
    isNull,
    isNumber,
    isRightCurlyBrace,
    isRightSquareBracket
} from "./helpers"

export const tokenizer = (input) => {
    let cursor = 0
    const tokens = []

    if (!input) {
        return tokens
    }

    while (cursor < input.length) {
        const currentValue = input[cursor]

        if (isLeftCurlyBrace(currentValue)) {
            tokens.push({ type: "LeftCurlyBrace", value: currentValue })

            cursor++
            continue
        }

        if (isRightCurlyBrace(currentValue)) {
            tokens.push({ type: "RightCurlyBrace", value: currentValue })
            cursor++
            continue
        }

        if (isLeftSquareBracket(currentValue)) {
            tokens.push({ type: "LeftSquareBracket", value: currentValue })
            cursor++
            continue
        }

        if (isRightSquareBracket(currentValue)) {
            tokens.push({ type: "RightSquareBracket", value: currentValue })
            cursor++
            continue
        }

        if (isDoubleQuote(currentValue)) {
            let string = '';

            while (!isDoubleQuote(input[++cursor])) {
                string += input[cursor]
            }

            tokens.push({ type: "String", value: string })
            cursor++
            continue
        }

        if (isNumber(currentValue)) {
            tokens.push({ type: "Number", value: +currentValue })
            cursor++
            continue
        }

        if (isBoolean(currentValue)) {
            tokens.push({ type: "Boolean", value: currentValue === 'true' ? true : false })
            cursor++
            continue
        }

        if (isNumber(currentValue)) {
            tokens.push({ type: "Number", value: +currentValue })
            cursor++
            continue
        }

        if (isNull(currentValue)) {
            tokens.push({ type: "Null", value: null })
            cursor++
            continue
        }

        cursor++
        continue
    }
    return tokens
}