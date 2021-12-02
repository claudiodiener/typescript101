import { carInterface } from "./model/Car"

interface dealership {
    name: string
    phone: string
    cars: Array<carInterface>
    buy: (car: carInterface) => boolean
    sale: (model: string, name: string, surname: string) => boolean | carInterface
}

export const isCarInList = function(car: carInterface, list: Array<carInterface>): boolean {
    for (let index = 0; index < list.length; index++) {
        if (car.plate == list[index].plate) {
            return true
        }
    }
    return false
}

export const dealership: dealership = {
    name: "concessionariaSRL",
    phone: "081123456",
    cars: [],
    buy: function(car: carInterface): boolean {
        if (isCarInList(car, this.cars)) {
            return false
        }
        car.sell()
        this.cars.push(car)
        return true
    },

    sale: function(model: string, name: string, surname: string): boolean | carInterface {
        let carIndex
        let car
        for (let index = 0; index < this.cars.length; index++) {
            car = this.cars[index]
            if (model == car.model) {
                carIndex = index
                break
            }
        }
        if (carIndex === undefined) {
            return false 
        }
        if (!car?.changeOfOwnership(name, surname)) {
            return false
        }
        this.cars.splice(carIndex, 1)
        return car
    }
}