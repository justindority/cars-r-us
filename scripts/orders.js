import { getInteriors, getPaints, getTechnologies, getWheels, getOrders } from "./database.js"

export const ordersHtml = () => {

    const paints = getPaints()
    const interiors = getInteriors()
    const technologies = getTechnologies()
    const wheels = getWheels()
    const orders = getOrders()
    
    let html = `<h2>Orders</h2>`


    //maps orders to an array(with appropriate html), gets an updated list of paints, interiors,techs, wheels, calculates price, prints orders
    const ordersMap = orders.map((order) => {

    // Remember that the function you pass to find() must return true/false
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )

    const totalCost = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheels.price

    return `<p class="order-item">Order ${order.id} was placed on ${order.timestamp} and has ${foundPaint.name} paint, ${foundInterior.name} interior, the ${foundTechnology.name} technology option, and ${foundWheels.name} wheels. It will cost <strong>$${totalCost}</strong>.</p>`
    })
    //join the array of html strings into one
    html += ordersMap.join("")
    return html
}
