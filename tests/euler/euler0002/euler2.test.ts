import { expect } from "chai"
import { Euler2 } from "../../../src/exercises/euler/euler0002/euler2"

describe("Euler #2", function () {
  it("Returns valid value with input 4_000_000", function () {
    expect(Euler2(4_000_000)).to.equal(4_613_732)
  })
})
