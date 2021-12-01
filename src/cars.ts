import * as carModel from "./model/Car"

const audi = new carModel.Car("TT", "SH123PO", {
    name: "Pippo",
    surname: "Baudo"
})

export const hyundai = new carModel.Car("i20","BB111AA", {
    name: undefined,
    surname: undefined
})

export const fiat = new carModel.Car("punto", "AA111BB", {
    name: undefined,
    surname: undefined
})