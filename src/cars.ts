interface owner {
    name: string | undefined
    surname: string | undefined
}

export interface car {
    model: string
    plate: string
    owner: owner
    changeOfOwnership: (name: string, surname: string) => boolean
    sell: () => boolean
}

export const hyundai: car = {
    model: "i20",
    plate: "BB111AA",
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

const fiat: car = {
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