const { deepEqual, ok } = require("assert")
const database = require("./database")
const ITEM_DEFAULT = { name: "Flash", power: "Speed", id: 1 }
const UPDATED_ITEM = { name: "Green Lantern", power: "Ring energy", id: 2 }

describe("Heroes manipulation suite", () => {
  before(async () => {
    await database.register(ITEM_DEFAULT)
    await database.register(UPDATED_ITEM)
  })
  it("Must search a hero using files", async () => {
    const expected = ITEM_DEFAULT
    const [result] = await database.list(expected.id)
    deepEqual(result, expected)
  })
  it("Must register a hero using files", async () => {
    const expected = ITEM_DEFAULT
    const result = await database.register(ITEM_DEFAULT)
    const [hero] = await database.list(ITEM_DEFAULT.id)
    deepEqual(hero, expected)
  })
  it("Must delete a hero by id", async () => {
    const expected = true
    const result = await database.delete(ITEM_DEFAULT.id)
    deepEqual(result, expected)
  })
  it("Must update a hero by id", async () => {
    const expected = {
      ...UPDATED_ITEM,
      name: "Batman",
      power: "Money"
    }

    const newHeroFeatures = {
      name: "Batman",
      power: "Money"
    }

    const [result] = await database.update(UPDATED_ITEM.id, newHeroFeatures)
    deepEqual(result, expected)
  })
})
