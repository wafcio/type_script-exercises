import { expect } from "chai"
import { Euler3 } from "../../../src/exercises/euler/euler0003/euler3"

describe("Euler #3", function () {
  it("Returns valid value with input 13_195", function () {
    expect(Euler3(13_195)).to.equal(29)
  })

  it("Returns valid value with input 600_851_475_143", function () {
    expect(Euler3(600_851_475_143)).to.equal(6_857)
  })
})
