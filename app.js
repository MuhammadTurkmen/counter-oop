function Counter(element, value) {
    this.counter = element
    this.value = value
}

const firstCounter = new Counter(getElement('first-counter'), 100)
const secondCounter = new Counter(getElement('second-counter'), 200)


function getElement(selection) {
    const element = document.querySelector(selection)
    console.log(element)
    if(element) {
        return element
    }
    throw new Error(`please check "${selection}" selector, no such element exists`)
}

