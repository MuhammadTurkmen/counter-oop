function getElement(selection) {
    const element = document.querySelector(selection)
    if(element) {
        return element
    }
    throw new Error(`please check "${selection}" selector, no such element exists`)
}

class Counter {
    constructor(element, value)
}



const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)