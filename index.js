let rating = null
let ratingElement;
let ratingLength = document.querySelectorAll(".rating-state-btn-num ").length
let form = document.querySelector(".rating-state-form")
form.addEventListener("click", findRating, false)
function findRating(e) {
    if (e.target !== e.currentTarget || e.target.length <= 1) {
        if (ratingElement && ratingElement.type !== "submit") {
            ratingElement.style.backgroundColor = "hsl(212, 30%, 22%)"
        }
        e.target.style.backgroundColor = "hsl(25, 97%, 53%)"
        let clickedItem = e.target.value;
        rating = clickedItem
        ratingElement = e.target
        e.stopPropagation()
    }
    console.log(rating)
}