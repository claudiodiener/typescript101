// creare oggetto di tipo concessonaria dove all'interno hai nome, numero tel e lista di macchine
// definisci oggetto hyundai e fiat in cui dentro hai modello, targa, proprietario (oggetto vuoto)
// per ogni macchina definire un metodo passaggioDiProprieta in cui in input ha nome e cognome e deve aggiungerli all'oggetto proprietario solo se la macchina
// non ha ancora un proprietario e ritorna true se è fatto il passaggio e false se non è stato completato
// funzione sell che fa l'opposto non ricevendo niente in input ritorna true se la macchina ha gia un proprietario e se ce l'ha lo svuota
// metodo in concessionaria che riceve in input un auto per quell'auto chiama la funzione sell e la inserisce dentro la lista di auto della concessionaria e 
// in output da la targa dell'auto
// la funzione buy in input riceve una auto, se la macchina arrivata in input è gia esistente all'interno dell'array della concessionaria ritorna false se non
// c'è ritorna true e lo aggiunge all'array
// la funzione sale riceve in input un modello della macchina e nome e cognome di chi vuole acquistarla, se il modello è presente nella lista lo aggiungo al
// proprietario arrivato in input e ritorno true altrimenti ritorni false

const concessionaria = {
    nome: "concessionariaSRL",
    numeroTel: "081123456",
    auto: [],
    buy: function(car) {
        if (isCarInList(car, this.auto)) {
            return false
        }
        car.sell()
        this.auto.push(car)
        return true
    },

    sale: function(modello, name, surname) {
        let carIndex
        let car
        for (let index = 0; index < this.auto.length; index++) {
            car = this.auto[index]
            if (modello == car.modello) {
                carIndex = index
                break
            }
        }
        if (carIndex == undefined) {
            return false 
        }
        if (!car.passaggioDiProprieta(name, surname)) {
            return false
        }
        this.auto.splice(carIndex, 1)
        return car
    }
}

const passaggioDiProprieta = function(name: string, surname: string) {
    if (this.proprietario.name != undefined) {
        return false
    }
    this.proprietario.name = name
    this.proprietario.surname = surname
    return true   
}

const sell = function() {
    if (this.proprietario.name == undefined) {
        return false
    }
    this.proprietario = {}
    return true
}

const isCarInList = function(car, list) {
    for (let index = 0; index < list.length; index++) {
        if (car.targa == list[index].targa) {
            return true
        }
    }
    return false
}

const hyundai = {
    modello: "i20",
    targa: "BB111AA",
    proprietario: {},
    passaggioDiProprieta: passaggioDiProprieta,
    sell: sell,
}

const fiat = {
    modello: "punto",
    targa: "AA111BB",
    proprietario: {},
    passaggioDiProprieta: passaggioDiProprieta,
    sell: sell,
}

// --------------
const concessionariaAuto = [
    {
        targa: "AAAAAA",
    },
    {
        targa: "BBBBBB"
    },
    {
        targa: "CCCCCC"
    }
]

const mercedes = {
    targa: "DDDDDD"
}

const bmw = {
    targa: "BBBBBB"
}
console.log("TEST: hyundai passaggio di proprieta")
console.log("Mi aspetto '{}', ho ottenuto:", hyundai.proprietario)
console.log("Mi aspetto 'true', ho ottenuto:", hyundai.passaggioDiProprieta("Claudio", "Diener"))
console.log("Mi aspetto '{ name: 'Claudio', surname: 'Diener' }', ho ottenuto:", hyundai.proprietario)
console.log("Mi aspetto 'false', ho ottenuto:", hyundai.passaggioDiProprieta("Gabriele", "Diener"))
console.log("Mi aspetto '{ name: 'Claudio', surname: 'Diener' }', ho ottenuto:", hyundai.proprietario)
console.log()
console.log("TEST: fiat passaggio di proprieta")
console.log("Mi aspetto '{}', ho ottenuto:", fiat.proprietario)
console.log("Mi aspetto 'true', ho ottenuto:", fiat.passaggioDiProprieta("Gabriele", "Diener"))
console.log("Mi aspetto '{ name: 'Gabriele', surname: 'Diener' }', ho ottenuto:", fiat.proprietario)
console.log("Mi aspetto 'false', ho ottenuto:", fiat.passaggioDiProprieta("Claudio", "Diener"))
console.log("Mi aspetto '{ name: 'Gabriele', surname: 'Diener' }', ho ottenuto:", fiat.proprietario)
console.log()
console.log("TEST: hyundai sell")
console.log("Mi aspetto '{ name: 'Claudio', surname: 'Diener' }', ho ottenuto:", hyundai.proprietario)
console.log("Mi aspetto 'true', ho ottenuto:", hyundai.sell())
console.log("Mi aspetto '{}', ho ottenuto:", hyundai.proprietario)
console.log("Mi aspetto 'false', ho ottenuto:", hyundai.sell())
console.log("Mi aspetto '{}', ho ottenuto:", hyundai.proprietario)
console.log()
console.log("TEST: fiat sell")
console.log("Mi aspetto '{ name: 'Gabriele', surname: 'Diener' }', ho ottenuto:", fiat.proprietario)
console.log("Mi aspetto 'true', ho ottenuto:", fiat.sell())
console.log("Mi aspetto '{}', ho ottenuto:", fiat.proprietario)
console.log("Mi aspetto 'false', ho ottenuto:", fiat.sell())
console.log("Mi aspetto '{}', ho ottenuto:", fiat.proprietario)
console.log()
console.log("TEST: funzione buy")
console.log("Mi aspetto 'true', ho ottenuto:", hyundai.passaggioDiProprieta("Gabriele", "Diener"))
console.log("Mi aspetto '{ name: 'Gabriele', surname: 'Diener' }', ho ottenuto:", hyundai.proprietario)
console.log("Mi aspetto 'true', ho ottenuto:", concessionaria.buy(hyundai))
console.log("Mi aspetto '{}', ho ottenuto:", hyundai.proprietario)
console.log("Mi aspetto '1', ho ottenuto:", concessionaria.auto.length)
console.log("Mi aspetto 'false', ho ottenuto:", concessionaria.buy(hyundai))
console.log("Mi aspetto '1', ho ottenuto:", concessionaria.auto.length)
console.log()
console.log("TEST: isCarInList")
console.log("Mi aspetto 'false', ho ottenuto:", isCarInList(mercedes, concessionariaAuto))
console.log("Mi aspetto 'true', ho ottenuto:", isCarInList(bmw, concessionariaAuto))
console.log()
console.log("TEST: sale")
console.log("Mi aspetto 'false', ho ottenuto:", concessionaria.sale("punto", "Gabriele", "Diener"))
console.log("Mi aspetto 'i20', ho ottenuto:", concessionaria.sale("i20", "Gabriele", "Diener").modello)
