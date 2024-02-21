function Counter(element, value) {
    this.counter = element
    this.value = value
    this.resetBtn = element.querySelector('.rest')
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.valueDOM = element.querySelector('.value')
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

