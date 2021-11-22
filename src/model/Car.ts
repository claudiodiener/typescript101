interface ownerInterface {
    name: string | undefined
    surname: string | undefined
}

export interface carInterface {
    model: string
    plate: string
    owner: ownerInterface
    changeOfOwnership: (name: string, surname: string) => boolean
    sell: () => boolean
}

export class Car implements carInterface {
    model: string
    plate: string
    owner: ownerInterface

    constructor(model: string, plate: string, owner: ownerInterface) {
        this.model = model
        this.plate = plate
        this.owner = owner
    }

    changeOfOwnership(name: string, surname: string): boolean {
        if (this.owner.name != undefined) {
            return false
        }
        this.owner.name = name
        this.owner.surname = surname
        return true   
    }

    sell(): boolean {
        if (this.owner.name == undefined) {
            return false
        }
        this.owner.name = undefined
        this.owner.surname = undefined
        return true
    }
}