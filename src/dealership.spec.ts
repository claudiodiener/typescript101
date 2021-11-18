import * as dealership from "./dealership"

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


// console.log("TEST: funzione buy")
// console.log("Mi aspetto 'true', ho ottenuto:", hyundai.passaggioDiProprieta("Gabriele", "Diener"))
// console.log("Mi aspetto '{ name: 'Gabriele', surname: 'Diener' }', ho ottenuto:", hyundai.proprietario)
// console.log("Mi aspetto 'true', ho ottenuto:", concessionaria.buy(hyundai))
// console.log("Mi aspetto '{}', ho ottenuto:", hyundai.proprietario)
// console.log("Mi aspetto '1', ho ottenuto:", concessionaria.auto.length)
// console.log("Mi aspetto 'false', ho ottenuto:", concessionaria.buy(hyundai))
// console.log("Mi aspetto '1', ho ottenuto:", concessionaria.auto.length)
// console.log()

// console.log("TEST: sale")
// console.log("Mi aspetto 'false', ho ottenuto:", concessionaria.sale("punto", "Gabriele", "Diener"))
// console.log("Mi aspetto 'i20', ho ottenuto:", concessionaria.sale("i20", "Gabriele", "Diener").modello)