import { expect, test } from "vitest"
import { peek, pop } from "./utils"

test(`return the second item in an array`, () => {
    expect(peek([1, 2, 3])).toStrictEqual(1)
})

test(`return the first item in an array`, () => {
    expect(pop([1, 2, 3])).toStrictEqual(1)
})

