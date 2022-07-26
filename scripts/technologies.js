import { getTechnologies } from "./database.js"

const technologiesList = getTechnologies()

export const technologiesHtml = () => {
    let technologiesString = `<h2>Technologies</h2><select id="technologies">`
    let technologiesMap = technologiesList.map(technology => {return `<option value="technology--${technology.id}">${technology.name}</option>`})
    technologiesString += technologiesMap.join("")
    technologiesString += `</select>`
    return technologiesString
}