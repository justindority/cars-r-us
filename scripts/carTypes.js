import { getCarTypes } from "./database.js";

const carTypes = getCarTypes()

//get the car types html string
export const typesHtml = () => {
    let typesString = `<h2>Type</h2><select id="types"><option value="none" selected disabled hidden>Select an Option</option>`
    let typesMap = carTypes.map(type => {return `<option value="carType--${type.id}">${type.type}</option>`})
    typesString += typesMap.join("")
    typesString += `</select>`
    return typesString
}