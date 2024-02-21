function Counter(element, value) {
    console.log(element, value)
}

const firstCounter = new Counter(getElement('first-counter'), 100)
const secondCounter = new Counter(getElement('second-counter'), 100)


function getElement(selection) {
    const element = document.querySelector(selection)
    console.log(element)
    if(element) {
        return element
    }
    throw new Error(`please check "${selection}" selector, no such element exists`)
}

