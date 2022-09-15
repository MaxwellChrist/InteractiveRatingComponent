let rating = null
let ratingLength = document.querySelectorAll(".rating-state-btn-num ").length

// functions for the rating of the buttons to be stored in variables and css features added accordingly
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