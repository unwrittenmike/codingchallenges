import { describe, expect, test } from "vitest";
import { parse } from "./parser";

describe("parse", () => {
    test("should return a token of type String", () => {
        expect(parse([
            { type: "String", value: "hi" }
        ])).toStrictEqual({ type: "StringLiteral", value: "hi" })
    })
    test("should return a token of type Number", () => {
        expect(parse([
            { type: "Number", value: 9 }
        ])).toStrictEqual({ type: "NumericLiteral", value: 9 })
    })
    test("should return AST", () => {
        expect(parse([
            { type: "LeftCurlyBrace", value: "{" },
            { type: "String", value: "hi" },
            { type: "LeftSquareBracket", value: "[" },
            { type: "String", value: "there" },
            { type: "Number", value: 9 },
            { type: "RightSquareBracket", value: "]" },
            { type: "RightCurlyBrace", value: "}" }])).toStrictEqual({
                type: "ObjectLiteral",
                children: [
                    {
                        "type": "StringLiteral",
                        "value": "hi",
                    },
                    {
                        "type": "ArrayLiteral",
                        "children": [
                            {
                                "type": "StringLiteral",
                                "value": "there",
                            },
                            {
                                "type": "NumericLiteral",
                                "value": 9,
                            },
                        ],
                    },
                ],
            })
    })
})