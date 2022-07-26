import { getWheels } from "./database.js";

const wheelsList = getWheels()

//get the wheels html string
export const wheelsHtml = () => {
    let wheelsString = `<h2>Wheels</h2><select id="wheels">`
    let wheelsMap = wheelsList.map(wheel => {return `<option value="wheel--${wheel.id}">${wheel.name}</option>`})
    wheelsString += wheelsMap.join("")
    wheelsString += `</select>`
    return wheelsString
}
