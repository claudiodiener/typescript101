import * as carModel from "./Car";

interface truckInterface {
    trailer: boolean
    trailerPlate: string
    attachTrailer: (plate: string) => boolean
    deattachTrailer: () => boolean
}

class Truck extends carModel.Car implements truckInterface {
    trailer: boolean = false
    trailerPlate: string = ""

    attachTrailer(plate: string): boolean {
        if (this.trailer) {
            return false
        }
        this.trailerPlate = plate
        this.trailer = true
        return true
    }

    deattachTrailer(): boolean {
        if (!this.trailer) {
            return false
        }
        this.trailer = false
        this.trailerPlate = ""
        return true
    }
}