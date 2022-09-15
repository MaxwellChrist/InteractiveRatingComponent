let rating = null
let ratingLength = document.querySelectorAll(".rating-state-btn-num ").length

// function for the rating of the buttons to be stored in variables and css features added accordingly
let buttonRatings = document.querySelectorAll(".rating-state-btn-num")
buttonRatings = Array.from(buttonRatings)
function fire(e) {
    rating = e.value
    buttonRatings.forEach(item => {
        if (item.value == rating) {
            e.classList.add("active")
            e.classList.remove("rating-state-btn-hover")
        } else {
            item.classList.remove("active")
            item.classList.add("rating-state-btn-hover")
        }
    })
}

// function for the form to be submitted
let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!rating) {
        return
    } else {
        let ratingDiv = document.querySelector(".rating-state")
        ratingDiv.setAttribute("id", "currentState")
        let thankYougDiv = document.querySelector(".thank-you-state")
        thankYougDiv.removeAttribute("id", "currentState")
    }

    let span = document.querySelector(".thank-you-state-span")
    span.innerHTML = rating
})