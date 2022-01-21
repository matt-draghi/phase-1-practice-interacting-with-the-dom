document.addEventListener('DOMContentLoaded', () => {
//increment counter every second
    setInterval(incrementCounter, 1000)
//increment and decrement counter when button is pressed
    plusButton.addEventListener('click', incrementCounter)
    minusButton.addEventListener('click', decrementCounter)
//Like button adds to like count for that particular number; show on screen
    likeButton.addEventListener('click', addLike)
})

//ELEMENTS
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const likeButton = document.getElementById('heart')

const counter = document.getElementById('counter')
let counterNumber = Number.parseInt(counter.innerText)


//FUNCTIONS
const incrementCounter = () => {
    counterNumber += 1
    counter.innerText = counterNumber
}

const decrementCounter = () => {
    counterNumber -=1
    counter.innerText = counterNumber
}

const addLike = () => {
    let likeCount = 0
    if (likeCount = 0){
        const li = document.createElement('li')
        document.querySelector('ul.likes').appendChild(li)
    }
    

}