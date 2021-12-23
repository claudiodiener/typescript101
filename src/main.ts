import express from "express"
import bodyParser from "body-parser"
import fs from "fs"
import { Car } from "./model/Car"

const app = express()
const port = 3000
const carList: Car[] = JSON.parse(fs.readFileSync("cars.json", "utf8"))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/cars', (req, res) => {
    res.json(carList)
})

app.post('/cars', (req, res) => {
    if (!req.body.model) {
        return res.status(400).json({message: "Error invalid model"})
    }
    if (!req.body.plate) {
        return res.status(400).json({message: "Error invalid plate"})
    }
    const newCar = new Car(req.body.model, req.body.plate, {
        name: undefined,
        surname: undefined
    })
    carList.push(newCar)
    fs.writeFileSync("cars.json", JSON.stringify(carList))
    res.status(201).json(newCar)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})