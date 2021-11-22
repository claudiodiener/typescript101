import * as carModel from "./model/Car"

const audi = new carModel.Car("TT", "SH123PO", {
    name: "Pippo",
    surname: "Baudo"
})

export const hyundai = new carModel.Car("i20","BB111AA", {
    name: undefined,
    surname: undefined
})

export const fiat: carModel.carInterface = {
    model: "punto",
    plate: "AA111BB",
    owner: {
        name: undefined,
        surname: undefined
    },
    changeOfOwnership: function(name: string, surname: string): boolean {
        if (this.owner.name != undefined) {
            return false
        }
        this.owner.name = name
        this.owner.surname = surname
        return true   
    },
    sell: function(): boolean {
        if (this.owner.name == undefined) {
            return false
        }
        this.owner.name = undefined
        this.owner.surname = undefined
        return true
    }
}