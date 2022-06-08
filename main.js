
console.log('js is connected')
//stuff inside the search bar
const searchBox = document.querySelector('#searchBox')
const search = document.querySelector('#search')
const searchResults = document.querySelector('#searchResults')
const resultsBox = document.querySelector("#box")

search.addEventListener("click", (event) => {
    event.preventDefault()
    searchResults.innerHTML = ""
    console.log(searchBox.value)
    console.log(event)
    const userInput = searchBox.value
    let itunesURL = `https://itunes.apple.com/search?term=${userInput}&entity=song`

    fetch(itunesURL, {
        method: 'GET',
        headers: { 'Content-Type': 'applications/json' }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log("response from itunes api:", data.results[0])

            if (data.results < 1) {
                let noResultsElement = document.createElement('div')
                noResultsElement.innerText = "Sorry, no results were found."
                noResultsElement.classList.add = ("no-results")
                searchResults.appendChild(noResultsElement)
            }

            for (let track of data.results) {
                //song box 
                let songDiv = document.createElement("div")
                songDiv.classList.add("song-info")
                //picture
                let pictureElement = document.createElement("img")
                pictureElement.src = track.artworkUrl100
                songDiv.appendChild(pictureElement)
                //audio 
                pictureElement.addEventListener("click", (event) => {
                    console.log("Play!")
                    let sound = document.querySelector('audio');
                    sound.id = 'audio=player';
                    sound.controls = 'controls';
                    sound.src = `${track.previewUrl}`;
                    sound.type = 'audio/mpeg';
                    nowPlaying.innerText = `${track.artistName} ${track.trackName}`
                })
                //song name 
                let nameElement = document.createElement("p")
                nameElement.innerText = "Track Name: " + track.trackName
                songDiv.appendChild(nameElement)
                //artist
                let artistElement = document.createElement("p")
                artistElement.innerText = "Artist: " + track.artistName
                songDiv.appendChild(artistElement)

                //album
                let albumElement = document.createElement("p")
                albumElement.innerText = "Album: " + track.collectionName
                songDiv.appendChild(albumElement)
                // release date 
                let releaseElement = document.createElement("p")
                let releaseDate = moment(track.releaseDate).format("MMM Do YYYY");
                releaseElement.innerText = `Release Date: ${releaseDate}`
                songDiv.appendChild(releaseElement)
                //append all
                searchResults.appendChild(songDiv)

            }
        })
        .catch(err => {
            window.alert("Error Encountered");
        })
})
