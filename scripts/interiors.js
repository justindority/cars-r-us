import { getInteriors } from "./database.js"

const interiorsList = getInteriors()

//interiors html function
export const interiorsHtml = () => {
    let interiorsString = `<h2>Interiors</h2><select id="interiors"><option value="none" selected disabled hidden>Select an Option</option>`
    let interiorsMap = interiorsList.map(interior => {return `<option value="interior--${interior.id}">${interior.name}</option>`})
    interiorsString += interiorsMap.join("")
    interiorsString += `</select>`
    return interiorsString
}