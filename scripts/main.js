// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "resource") {
//             const chosenOption = changeEvent.target.value
//             console.log(chosenOption)  // "1" or "2"
//         }
//     }
// )

import { typesHtml } from "./carTypes.js";
import { getPaints, getWheels, getInteriors, getTechnologies, setPaint, setInterior, setTechnology, setWheels, getTempOrder, addCustomOrder, setCarType } from "./database.js";
import { interiorsHtml } from "./interiors.js";
import { ordersHtml } from "./orders.js";
import { paintsHtml } from "./paints.js";
import { technologiesHtml } from "./technologies.js";
import { wheelsHtml } from "./wheels.js";

//function to invoke all html functions
export const printAllHtml = () => {
    wheelsDiv.innerHTML = wheelsHtml()
    interiorsDiv.innerHTML = interiorsHtml()
    paintsDiv.innerHTML = paintsHtml()
    technologiesDiv.innerHTML = technologiesHtml()
    ordersDiv.innerHTML = ordersHtml()
    typesDiv.innerHTML = typesHtml()
}

//setting all the div variables for html printing
const wheelsDiv = document.getElementById("wheelsDiv")
const interiorsDiv = document.getElementById("interiorsDiv")
const paintsDiv = document.getElementById("paintsDiv")
const technologiesDiv = document.getElementById("technologiesDiv")
const typesDiv = document.getElementById("typesDiv")
const ordersDiv = document.getElementById("ordersDiv")
printAllHtml()





//establish a blank object 
let tempOrder = {}

//listener to add a new order
document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === 'orderButton'){ //when the user clicks on the button
            tempOrder = getTempOrder() //set temp order to what's in the temp order database object
            if (tempOrder.wheelsId && tempOrder.paintId && tempOrder.technologyId && tempOrder.interiorId){ //making sure user has selected all 4 options
                addCustomOrder() //commit custom order to db
                printAllHtml() //re-print html
            } else {
                window.alert(`Please select all 4 options.`) //message in case they didn't select options
            }
        }
    }
)


//change listener to set temporary order paint value
document.addEventListener(
    "change",
    (event) => {
        if (event.target.value.startsWith("paint")) {
            const [,paintId] = event.target.value.split("--")
            setPaint(parseInt(paintId))
        }
    }
)

//change listener to set temporary order interior value
document.addEventListener(
    "change",
    (event) => {
        if (event.target.value.startsWith("interior")) {
            const [,interiorId] = event.target.value.split("--")
            setInterior(parseInt(interiorId))
        }
    }
)

//change listener to set temporary order tech value
document.addEventListener(
    "change",
    (event) => {
        if (event.target.value.startsWith("technology")) {
            const [,technologyId] = event.target.value.split("--")
            setTechnology(parseInt(technologyId))

        }
    }
)

//change listener to set temporary order wheels value
document.addEventListener(
    "change",
    (event) => {
        if (event.target.value.startsWith("wheel")) {
            const [,wheelId] = event.target.value.split("--")
            setWheels(parseInt(wheelId))

        }
    }
)

//change listener to set temporary order type value
document.addEventListener(
    "change",
    (event) => {
        if (event.target.value.startsWith("carType")) {
            const [,typeId] = event.target.value.split("--")
            setCarType(parseInt(typeId))

        }
    }
)