const database = {
    paints: [
        {
            id: 1,
            name: "Silver",
            price: 300
        },
        {
            id: 2,
            name: "Midnight Blue",
            price: 500
        },
        {
            id: 3,
            name: "Firebrick Red",
            price: 900
        },
        {
            id: 4,
            name: "Spring Green",
            price: 30000
        }
    ],
    interiors: [
        {
            id: 1,
            name: "Beige Fabric",
            price: 400
        },
        {
            id: 2,
            name: "Charcoal Fabric",
            price: 900
        },
        {
            id: 3,
            name: "White Leather",
            price: 1500
        },
        {
            id: 4,
            name: "Black Leather",
            price: 50000
        },
    ],
    technologies: [
        {
            id: 1,
            name: "Basic Package",
            price: 600
        },
        {
            id: 2,
            name: "Navigation Package",
            price: 1500
        },
        {
            id: 3,
            name: "Visibility Package",
            price: 2000
        },
        {
            id: 4,
            name: "Ultra Package",
            price: 10000
        }
    ],
    wheels: [
        {
            id: 1,
            name: "17-inch Pair Radial",
            price: 400
        },
        {
            id: 2,
            name: "17-inch Pair Radial Black",
            price: 1000
        },
        {
            id: 3,
            name: "18-inch Pair Radial Silver",
            price: 5000
        },
        {
            id: 4,
            name: "18-inch Pair Radial Black",
            price: 20000
        },
    ],
    orders: [
        {
            id: 1,
            paintId: 2,
            interiorId: 3,
            technologyId: 2,
            wheelsId: 4,
            timestamp: 93838292948
        }
    ],
    orderBuilder: {}
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}


export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    // document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getTempOrder = () => {
    return database.orderBuilder
}