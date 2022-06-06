
console.log('js is connected')

const searchBox = document.querySelector('#searchBox')

const search = document.querySelector('#search')
//holder of the search bar 

console.log(search)

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
            // buildSongs(data)
        })
})






//     .then(function (data) {
//         console.log("Response from itunes API:", data)
//         buildPage(data)
//     })

// function buildPage(itunesData) {
//     for (let info of itunesData) {
//         console.log(info)
//     }
// }

// let search = document.querySelector('#search');
// // let userInput = InputEvent.addEventListener("text");

// let term = ${ userInput }


