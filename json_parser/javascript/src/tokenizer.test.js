import { expect, test } from 'vitest'
import { tokenizer } from './tokenizer'


test(`given an string of '{"hi":["there"]}' returns a list of tokens`, () => {
    expect(tokenizer(`{"hi":["there",9]}`)).toStrictEqual([
        { type: "LeftCurlyBrace", value: "{" },
        { type: "String", value: "hi" },
        { type: "LeftSquareBracket", value: "[" },
        { type: "String", value: "there" },
        { type: "Number", value: 9 },
        { type: "RightSquareBracket", value: "]" },
        { type: "RightCurlyBrace", value: "}" }
    ])
})
