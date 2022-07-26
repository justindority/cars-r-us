import { getPaints } from "./database.js"

const paintsList = getPaints()

//get the paints html string
export const paintsHtml = () => {
    let paintsString = `<h2>Paints</h2><select id="paints">`
    let paintsMap = paintsList.map(paint => {return `<option value="paint--${paint.id}">${paint.name}</option>`})
    paintsString += paintsMap.join("")
    paintsString += `</select>`
    return paintsString
}