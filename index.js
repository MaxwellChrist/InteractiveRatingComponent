let rating = null
let ratingElement = null
let ratingLength = document.querySelectorAll(".rating-state-btn-num ").length

// functions for the rating of the buttons to be stored in variables and css features added accordingly
let buttonRatings = document.querySelectorAll(".rating-state-btn-num")
buttonRatings = Array.from(buttonRatings)
buttonRatings.forEach(item => {
    item.addEventListener("click", findRating, false)
})
function findRating(e) {
    rating = e.target.value
    ratingElement = e.target
    buttonRatings.forEach(item => {
        if (item.value !== e.target.value) {
            item.style.backgroundColor = "hsl(212, 30%, 22%)"
            item.style.color = "hsl(217, 12%, 63%)"

            item.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = 'hsl(216, 12%, 54%)';
                e.target.style.color = 'hsl(0, 0%, 100%)';
            })
            item.addEventListener('mouseleave', (e) => {
                e.target.style.backgroundColor = 'hsl(212, 30%, 22%);';
                e.target.style.color = 'hsl(217, 12%, 63%)';
            })
        } else {
            item.style.backgroundColor = "hsl(25, 97%, 53%)"
            item.style.color = "hsl(0, 0%, 100%)"
        }
    })
    if (ratingElement !== e.target) {
        ratingElement.style.backgroundColor = "hsl(25, 97%, 53%)"
        ratingElement.style.color = "hsl(0, 0%, 100%)"
    } 
}

// functions for the submitting of the form to be completed without loading the page and to display the new state
// form.addEventListener("submit", submitRating, false)
// function submitRating(e) {
//     e.preventDefault()
//     if (rating >= 1 || rating <= 5) {
//         console.log("fire")
//     }
//     console.log(rating)
// }