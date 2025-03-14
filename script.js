const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbzKczUtTVXfohypV-hL1EDAFJEm2CpyRfAHJhi7CsOEQ2djjK7bRuXLqX-6wWjicD2h/exec'

function makeCards(e) {
    for(let i = 0; i < e.length; i++) {
        console.log(i)
        //<img src=${e[i].Image} />
        document.getElementById("root").innerHTML += `<div class="card"><h1>${e[i].Title}</h1><p>Learn More...</a></p></div>`
    }
}

function dateFooter() { 
    document.getElementById("footer").innerHTML = `<p>&copy; 2025 FBLA Project.</p>`
}

async function fetchData(e) {
    await fetch(e)
    .then(r => r.json())
    .then(d => makeCards(d))
}
fetchData(googleAppScriptUrl)
dateFooter()