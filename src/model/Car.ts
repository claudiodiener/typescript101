import {v4 as uuidv4} from 'uuid'

interface ownerInterface {
    name: string | undefined
    surname: string | undefined
}

export interface carInterface {
    model: string
    plate: string
    changeOfOwnership: (name: string, surname: string) => boolean
    sell: () => boolean
}

export class Car implements carInterface {
    public id: number
    protected _model: string
    public plate: string
    protected owner: ownerInterface

    constructor(model: string, plate: string, owner: ownerInterface) {
        this.id = uuidv4()
        this._model = model
        this.plate = plate
        this.owner = owner
    }

    public toJSON() {
        return {
            id: this.id,
            model: this.model,
            plate: this.plate,
            owner: this.owner
        }
    }

    get model(): string {
        return this._model
    }

    public getOwner(): ownerInterface {
        return this.owner
    }

    public changeOfOwnership(name: string, surname: string): boolean {
        if (this.owner.name != undefined) {
            return false
        }
        this.owner.name = name
        this.owner.surname = surname
        return true   
    }

    public sell(): boolean {
        if (this.owner.name == undefined) {
            return false
        }
        this.owner.name = undefined
        this.owner.surname = undefined
        return true
    }
}