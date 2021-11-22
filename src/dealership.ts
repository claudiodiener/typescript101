import * as carModel from "./model/Car"

interface dealership {
    name: string
    phone: string
    cars: Array<carModel.carInterface>
    buy: (car: carModel.carInterface) => boolean
    sale: (model: string, name: string, surname: string) => boolean | carModel.carInterface
}

export const isCarInList = function(car: carModel.carInterface, list: Array<carModel.carInterface>): boolean {
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
    buy: function(car: carModel.carInterface): boolean {
        if (isCarInList(car, this.cars)) {
            return false
        }
        car.sell()
        this.cars.push(car)
        return true
    },

    sale: function(model: string, name: string, surname: string): boolean | carModel.carInterface {
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