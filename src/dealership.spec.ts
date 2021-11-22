import * as dealership from "./dealership"
import * as cars from "./cars"

describe('isCarInList', function() {
  const concessionariaAuto = [
    {
      model: "yaris",
      plate: "AAAAAA",
      owner: {
        name: undefined,
        surname: undefined
      },
      changeOfOwnership: function(name: string, surname: string): boolean {
        return true   
      },
      sell: function(): boolean {
        return true
      }
    },
    {
      model: "ypsilon",
      plate: "BBBBBB",
      owner: {
        name: undefined,
        surname: undefined
      },
      changeOfOwnership: function(name: string, surname: string): boolean {
        return true   
      },
      sell: function(): boolean {
        return true
      }
    },
    {
      model: "subaru",
      plate: "CCCCCC",
      owner: {
        name: undefined,
        surname: undefined
      },
      changeOfOwnership: function(name: string, surname: string): boolean {
        return true   
      },
      sell: function(): boolean {
        return true
      }
    }
  ]

  const mercedes = {
    model: "benz",
    plate: "DDDDDD",
    owner: {
      name: undefined,
      surname: undefined
    },
    changeOfOwnership: function(name: string, surname: string): boolean {
      return true   
    },
    sell: function(): boolean {
      return true
    }
  }

  const bmw = {
    model: "x1000",
    plate: "BBBBBB",
    owner: {
      name: undefined,
      surname: undefined
    },
    changeOfOwnership: function(name: string, surname: string): boolean {
      return true   
    },
    sell: function(): boolean {
      return true
    }
  }
  
  it('should be false', function() {
    expect(dealership.isCarInList(mercedes, concessionariaAuto)).toBe(false)
  })
  it('should be true', function() {
    expect(dealership.isCarInList(bmw, concessionariaAuto)).toBe(true)
  })
})

describe('buy', function() {
  it('should return true', function() {
    expect(cars.hyundai.changeOfOwnership("Gabriele", "Diener")).toStrictEqual(true)
  })
  it('should return the new owner', function() {
    expect(cars.hyundai.owner).toStrictEqual({
      name: "Gabriele",
      surname: "Diener"
    })
  })
  it('should return true', function() {
    expect(dealership.dealership.buy(cars.hyundai)).toStrictEqual(true)
  })
  it('should be undefined', function() {
    expect(cars.hyundai.owner).toStrictEqual({
      name: undefined,
      surname: undefined
    })
  })
  it('should return the length', function() {
    expect(dealership.dealership.cars.length).toStrictEqual(1)
  })
  it('should return false', function() {
    expect(dealership.dealership.buy(cars.hyundai)).toStrictEqual(false)
  })
  it('should return the length', function() {
    expect(dealership.dealership.cars.length).toStrictEqual(1)
  })
})

describe('sale', function() {
  it('should return false', function() {
    expect(dealership.dealership.sale("punto", "Gabriele", "Diener")).toStrictEqual(false)
  })
  it('should return the model', function() {
    let result = dealership.dealership.sale("i20", "Gabriele", "Diener")
    expect(result).toEqual(
      expect.objectContaining({
        model: "i20",
        plate: "BB111AA",
      })
    )
  })
})