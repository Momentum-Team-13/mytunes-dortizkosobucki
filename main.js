
console.log('js is connected')
//stuff inside the search bar
const searchBox = document.querySelector('#searchBox')
const search = document.querySelector('#search')
console.log(search)
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
            console.log("response from itunes api:", data)
            buildPage(data)
        })
})

const resultsElement = document.getElementById("searchResults")
// const search = document.querySelector("#results")
function buildPage(resultsArray) {
    for (let results of resultsArray) {
        buildSongs(results)
    }
}
function buildSongs(results) {
    let nameElement = document.createElement("p")
    nameElement.innerText = `${data.trackName}`
    resultsElement.appendChild(nameElement)
}

//
//     let pageElement = document.createElement("div")
//     pageElement.classList.add("#track")
//     //track name
//     let nameElement = document.createElement("h2")
//     nameElement.innerText = `${resultsData.trackName}`
//     pageElement.appendChild(nameElement)
//     //pagelementappend 
//     resultsPage.appendChild(pageElement)
// }