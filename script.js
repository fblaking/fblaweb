const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbzKczUtTVXfohypV-hL1EDAFJEm2CpyRfAHJhi7CsOEQ2djjK7bRuXLqX-6wWjicD2h/exec'

function makeCards(e) {
    for(let i = 0; i <= e.length; i++) {
        document.getElementById("root").innerHTML += `<div class="card"><h1>${e[i].Title}</h1><p>${e[i].Content}</p></div>`
    }
}

async function fetchData(e) {
    await fetch(e)
    .then(res => res.json())
    .then(data => {
        
    })
}
fetchData(googleAppScriptUrl)
