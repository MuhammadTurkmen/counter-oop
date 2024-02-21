function Counter(element, value) {
    console.log(element, value)
}

const firstCounter = new Counter()


function getElement(selection) {
    const element = document.querySelector(selection)
    console.log(element)
}