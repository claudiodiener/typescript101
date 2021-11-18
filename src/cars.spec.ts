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
})




// console.log("TEST: hyundai passaggio di proprieta")
// console.log("Mi aspetto 'false', ho ottenuto:", hyundai.passaggioDiProprieta("Gabriele", "Diener"))
// console.log("Mi aspetto '{ name: 'Claudio', surname: 'Diener' }', ho ottenuto:", hyundai.proprietario)
// console.log()

// console.log("TEST: fiat passaggio di proprieta")
// console.log("Mi aspetto '{}', ho ottenuto:", fiat.proprietario)
// console.log("Mi aspetto 'true', ho ottenuto:", fiat.passaggioDiProprieta("Gabriele", "Diener"))
// console.log("Mi aspetto '{ name: 'Gabriele', surname: 'Diener' }', ho ottenuto:", fiat.proprietario)
// console.log("Mi aspetto 'false', ho ottenuto:", fiat.passaggioDiProprieta("Claudio", "Diener"))
// console.log("Mi aspetto '{ name: 'Gabriele', surname: 'Diener' }', ho ottenuto:", fiat.proprietario)
// console.log()
// console.log("TEST: hyundai sell")
// console.log("Mi aspetto '{ name: 'Claudio', surname: 'Diener' }', ho ottenuto:", hyundai.proprietario)
// console.log("Mi aspetto 'true', ho ottenuto:", hyundai.sell())
// console.log("Mi aspetto '{}', ho ottenuto:", hyundai.proprietario)
// console.log("Mi aspetto 'false', ho ottenuto:", hyundai.sell())
// console.log("Mi aspetto '{}', ho ottenuto:", hyundai.proprietario)
// console.log()
// console.log("TEST: fiat sell")
// console.log("Mi aspetto '{ name: 'Gabriele', surname: 'Diener' }', ho ottenuto:", fiat.proprietario)
// console.log("Mi aspetto 'true', ho ottenuto:", fiat.sell())
// console.log("Mi aspetto '{}', ho ottenuto:", fiat.proprietario)
// console.log("Mi aspetto 'false', ho ottenuto:", fiat.sell())
// console.log("Mi aspetto '{}', ho ottenuto:", fiat.proprietario)
// console.log()

