import { hyundai, fiat } from "./cars" 

describe('hyundai changeOfOwnership', function() {
  it('should be undefined', function() {
    expect(hyundai.owner).toStrictEqual({
        name: undefined,
        surname: undefined
      })
  })
  it("should change the owner", function() {
      expect(hyundai.changeOfOwnership("Claudio", "Diener")).toBe(true)
  })
  it("should return the new owner", function() {
    expect(hyundai.owner).toStrictEqual({
        name: "Claudio",
          surname: "Diener"
      })
  })
  it("should return false", function() {
    expect(hyundai.changeOfOwnership("Gabriele", "Diener")).toBe(false)
  })
  it("should return the owner", function() {
    expect(hyundai.owner).toStrictEqual({
      name: "Claudio",
      surname: "Diener"
    })
  })
})

describe('fiat changeOfOwnership', function() {
  it('should be undefined', function() {
    expect(fiat.owner).toStrictEqual({
      name: undefined,
      surname: undefined
    })
  })
  it('should return true', function() {
    expect(fiat.changeOfOwnership("Gabriele", "Diener")).toStrictEqual(true)
  })
  it('should return the new owner', function() {
    expect(fiat.owner).toStrictEqual({
      name: "Gabriele",
      surname: "Diener"
    })
  })
  it('should return false', function() {
    expect(fiat.changeOfOwnership("Claudio", "Diener")).toStrictEqual(false)
  })
  it('should return the owner', function() {
    expect(fiat.owner).toStrictEqual({
      name: "Gabriele",
      surname: "Diener"
    })
  })
})

describe('hyundai sell', function() {
  it('should return the owner', function() {
    expect(hyundai.owner).toStrictEqual({
      name: "Claudio",
      surname: "Diener"
    })
  })
  it('should return true', function() {
    expect(hyundai.sell()).toStrictEqual(true)
  })
  it('should be undefined', function() {
    expect(hyundai.owner).toStrictEqual({
      name: undefined,
      surname: undefined
    })
  })
  it('should return false', function() {
    expect(hyundai.sell()).toStrictEqual(false)
  })
  it('should be undefined', function() {
    expect(hyundai.owner).toStrictEqual({
      name: undefined,
      surname: undefined
    })
  })
})

describe('fiat sell', function() {
  it('should return the owner', function() {
    expect(fiat.owner).toStrictEqual({
      name: "Gabriele",
      surname: "Diener"
    })
  })
  it('should return true', function() {
    expect(fiat.sell()).toStrictEqual(true)
  })
  it('should be undefined', function() {
    expect(fiat.owner).toStrictEqual({
      name: undefined,
      surname: undefined
    })
  })
  it('should return false', function() {
    expect(fiat.sell()).toStrictEqual(false)
  })
  it('should be undefined', function() {
    expect(fiat.owner).toStrictEqual({
      name: undefined,
      surname: undefined
    })
  })
})
