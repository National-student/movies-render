let elList = document.querySelector("#list")
let elMovie = document.querySelector(".movie")

let newMovieArray = movies.slice(0, 10)

function renderMovies(movie, wrapper) {
    elMovie.textContent = movie.length
    for (const item of movie) {
        let elLi = document.createElement("li")
        let elDiv = document.createElement("div")
        let img = document.createElement("img")
        let elDiv2 = document.createElement("div")
        let elH5 = document.createElement("h5")
        let elPi1 = document.createElement("p")
        let elPi2 = document.createElement("p")
        let elBtn1 = document.createElement("a")
        let elBtn2 = document.createElement("button")
        let elBtn3 = document.createElement("button")

        img.src = `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`
        elH5.textContent = item.Title
        elPi1.textContent = item.movie_year
        elPi2.textContent = item.imdb_rating
        elBtn1.href = `https://www.youtube.com/watch?v=${item.ytid}`
        elBtn1.setAttribute("target", "_blanc")
        elBtn1.textContent = "Watch trailer"
        elBtn2.textContent = "More info"
        elBtn3.textContent = "Bookmark"

        elDiv.setAttribute("class", "card")
        elDiv.setAttribute("style", "width: 22rem")
        img.setAttribute("class", "card-img-top")
        img.setAttribute("alt", "card-img-top")
        elDiv2.setAttribute("class", "card-body")
        elH5.setAttribute("class", "card-text")
        elPi1.setAttribute("class", "card-text")
        elPi2.setAttribute("class", "card-text")
        elBtn1.setAttribute("class", "btn btn-outline-primary")
        elBtn2.setAttribute("class", "btn btn-outline-info")
        elBtn3.setAttribute("class", "btn btn-outline-success")
        
        elDiv.appendChild(img)
        elDiv2.appendChild(elH5)
        elDiv2.appendChild(elPi1)
        elDiv2.appendChild(elPi2)
        elDiv2.appendChild(elBtn1)
        elDiv2.appendChild(elBtn2)
        elDiv2.appendChild(elBtn3)
        elDiv.appendChild(elDiv2)
        elLi.appendChild(elDiv)

        wrapper.appendChild(elLi)
        
    }
}

renderMovies(newMovieArray, elList)