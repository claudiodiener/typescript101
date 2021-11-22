import * as cars from "./cars" 

describe('hyundai changeOfOwnership', function() {
  it('should be undefined', function() {
    expect(cars.hyundai.owner).toStrictEqual({
        name: undefined,
        surname: undefined
      })
  })
  it("should change the owner", function() {
      expect(cars.hyundai.changeOfOwnership("Claudio", "Diener")).toBe(true)
  })
  it("should return the new owner", function() {
    expect(cars.hyundai.owner).toStrictEqual({
        name: "Claudio",
          surname: "Diener"
      })
  })
  it("should return false", function() {
    expect(cars.hyundai.changeOfOwnership("Gabriele", "Diener")).toBe(false)
  })
  it("should return the owner", function() {
    expect(cars.hyundai.owner).toStrictEqual({
      name: "Claudio",
      surname: "Diener"
    })
  })
})

describe('fiat changeOfOwnership', function() {
  it('should be undefined', function() {
    expect(cars.fiat.owner).toStrictEqual({
      name: undefined,
      surname: undefined
    })
  })
  it('should return true', function() {
    expect(cars.fiat.changeOfOwnership("Gabriele", "Diener")).toStrictEqual(true)
  })
  it('should return the new owner', function() {
    expect(cars.fiat.owner).toStrictEqual({
      name: "Gabriele",
      surname: "Diener"
    })
  })
  it('should return false', function() {
    expect(cars.fiat.changeOfOwnership("Claudio", "Diener")).toStrictEqual(false)
  })
  it('should return the owner', function() {
    expect(cars.fiat.owner).toStrictEqual({
      name: "Gabriele",
      surname: "Diener"
    })
  })
})

describe('hyundai sell', function() {
  it('should return the owner', function() {
    expect(cars.hyundai.owner).toStrictEqual({
      name: "Claudio",
      surname: "Diener"
    })
  })
  it('should return true', function() {
    expect(cars.hyundai.sell()).toStrictEqual(true)
  })
  it('should be undefined', function() {
    expect(cars.hyundai.owner).toStrictEqual({
      name: undefined,
      surname: undefined
    })
  })
  it('should return false', function() {
    expect(cars.hyundai.sell()).toStrictEqual(false)
  })
  it('should be undefined', function() {
    expect(cars.hyundai.owner).toStrictEqual({
      name: undefined,
      surname: undefined
    })
  })
})

describe('fiat sell', function() {
  it('should return the owner', function() {
    expect(cars.fiat.owner).toStrictEqual({
      name: "Gabriele",
      surname: "Diener"
    })
  })
  it('should return true', function() {
    expect(cars.fiat.sell()).toStrictEqual(true)
  })
  it('should be undefined', function() {
    expect(cars.fiat.owner).toStrictEqual({
      name: undefined,
      surname: undefined
    })
  })
  it('should return false', function() {
    expect(cars.fiat.sell()).toStrictEqual(false)
  })
  it('should be undefined', function() {
    expect(cars.fiat.owner).toStrictEqual({
      name: undefined,
      surname: undefined
    })
  })
})