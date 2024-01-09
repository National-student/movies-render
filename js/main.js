let elList = document.querySelector("#list")
let elMovie = document.querySelector(".movie")
let elTemplate = document.querySelector("#template").content

let newMovieArray = movies.slice(0, 10)

function renderMovies(movie, wrapper) {

    let elFragment = document.createDocumentFragment()

    movie.map(item => {
        console.log(item);

        let templateDiv = elTemplate.cloneNode(true)

        templateDiv.querySelector(".card-img-top").src = `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`
        templateDiv.querySelector(".card-text").textContent = item.Title
        templateDiv.querySelector(".year").textContent = item.movie_year
        templateDiv.querySelector(".rating").textContent = item.imdb_rating
        templateDiv.querySelector(".btn-outline-primary").href = `https://www.youtube.com/watch?v=${item.ytid}`

        elFragment.appendChild(templateDiv)

    })

    wrapper.appendChild(elFragment)
    elMovie.textContent = movie.length
}

renderMovies(newMovieArray, elList)