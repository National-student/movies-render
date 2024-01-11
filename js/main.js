let elList = document.querySelector("#list")
let elTemplate = document.querySelector("#template").content
let elModTitle = document.querySelector(".modal-title")
let elModBody = document.querySelector(".modal-body")

let newMoviesArray = movies.slice(0, 10)

function renderMovies(movie, list) {

    let elFragment = document.createDocumentFragment()

    movie.map(function (item) {
        let templateDiv = elTemplate.cloneNode(true)

        templateDiv.querySelector(".card-img-top").src = `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`
        templateDiv.querySelector(".card-text").textContent = item.Title
        templateDiv.querySelector(".year").textContent = item.movie_year
        templateDiv.querySelector(".rating").textContent = item.imdb_rating
        templateDiv.querySelector(".watch_trailer").href = `https://www.youtube.com/watch?v=${item.ytid}`
        templateDiv.querySelector("#more_info").dataset.movieId = item.imdb_id

        elFragment.appendChild(templateDiv)

    })

    list.appendChild(elFragment)
}

renderMovies(newMoviesArray, elList)

// More info modal
elList.addEventListener("click", function (evt) {
    let elMovieId = evt.target.dataset.movieId

    if (elMovieId) {

        let elFoundMovie = newMoviesArray.filter(item => {
            return item.imdb_id == elMovieId
        })

        renderModal(elFoundMovie)
    }

})


function renderModal(modal) {
    modal.map(item => {
        elModTitle.textContent = item.Title
        elModBody.textContent = item.summary
    })
}