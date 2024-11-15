import { isLeftCurlyBrace, isLeftSquareBracket, isRightCurlyBrace, isRightSquareBracket } from "./helpers"
import { peek, pop } from "./utils"

export const parenthesize = (tokens) => {
    const token = Array.isArray(tokens) ? pop(tokens) : tokens

    if (isLeftCurlyBrace(token.value)) {
        const object = { type: "ObjectLiteral", children: [] }
        while (!isRightCurlyBrace(peek(tokens).value)) {
            object.children.push(parenthesize(tokens))
        }
        pop(tokens)
        return object
    }

    if (isLeftSquareBracket(token.value)) {
        const object = { type: "ArrayLiteral", children: [] }
        while (!isRightSquareBracket(peek(tokens).value)) {
            object.children.push(parenthesize(tokens))
        }
        pop(tokens)
        return object
    }

    return token
}

export const parser = (tokens) => {

    if (!Array.isArray(tokens)) {

        const token = tokens

        if (token?.type === 'ObjectLiteral') {
            return {
                type: "ObjectLiteral",
                children: token.children.map(parse)
            }
        }

        if (token?.type === 'ArrayLiteral') {
            return {
                type: "ArrayLiteral",
                children: token.children.map(parse)
            }
        }

        if (token?.type === 'Number') {
            return {
                type: "NumericLiteral",
                value: token.value
            }
        }

        if (token?.type === 'String') {
            return {
                type: "StringLiteral",
                value: token.value
            }
        }

        if (token?.type === 'Boolean') {
            return {
                type: "BooleanLiteral",
                value: token.value
            }
        }

    }
    return tokens
}

export const parse = tokens => parser(parenthesize(tokens))