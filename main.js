
console.log('js is connected')
//stuff inside the search bar
const searchBox = document.querySelector('#searchBox')
const search = document.querySelector('#search')
const resultsElement = document.querySelector("#searchResults")
// console.log(search)
//search button push does-->
search.addEventListener("click", (event) => {
    console.log(searchBox.value)
    console.log(event)
    const userInput = searchBox.value
    let itunesURL = `https://itunes.apple.com/search?term=${userInput}`
    fetch(itunesURL, {
        method: 'GET',
        headers: { 'Content-Type': 'applications/json' }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log("response from itunes api:", data.results[0])
            buildSongs(data.results)
        })
})

function buildSongs(resultsArray) {
    for (let track of resultsArray) {
        let nameElement = document.createElement("p")
        nameElement.innerText = track.trackName
        searchResults.appendChild(nameElement)
        let artistElement = document.createElement("p")
        artistElement.innerText = track.artistName
        searchResults.appendChild(artistElement)
    }
}

//

//     //track name
//     let nameElement = document.createElement("h2")
//     nameElement.innerText = `${resultsData.trackName}`
//     pageElement.appendChild(nameElement)
//     //pagelementappend 
//     resultsPage.appendChild(pageElement)
// }