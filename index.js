let rating = null

// finder.addEventListener("click", (event) => {
//     if (rating !== event.target.value) {
//         rating = event.target.value
//         console.log(rating)
//     }
// })

function findRating() {
    let finder = document.querySelectorAll(".rating-state-btn-num")
    finder = Array.from(finder)
    console.log(finder)

    for (let i = 0; i < finder.length; i++) {
        console.log(finder[i].value)
    }

}

// function findRating() {
//     let finder = document.querySelectorAll(".rating-state-btn-num")
//     finder = Array.from(finder)
//     console.log(finder)

//     for (let i = 0; i < finder.length; i++) {
//         console.log(finder[i].value)
//     }

// }

