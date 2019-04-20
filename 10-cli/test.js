const { deepEqual, ok } = require("assert")
const database = require("./database")
const ITEM_DEFAULT = { name: "Flash", power: "Speed", id: 1 }

describe("Heroes manipulation suite", () => {
  it("Must search a hero using files", async () => {
    const expected = ITEM_DEFAULT
    const [ result ] = await database.list(expected.id)
    deepEqual(result, expected)
  })
})
