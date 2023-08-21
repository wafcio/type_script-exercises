import { expect } from "chai"
import { Euler1 } from "../../../src/exercises/euler/euler0001/euler1"

describe("Euler #1", function () {
  it("Returns valid value with input 10", function () {
    expect(Euler1(10)).to.equal(23)
  })

  it("Returns valid value with input 1_000", function () {
    expect(Euler1(1_000)).to.equal(233_168)
  })
})
