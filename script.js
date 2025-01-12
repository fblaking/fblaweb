const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbzKczUtTVXfohypV-hL1EDAFJEm2CpyRfAHJhi7CsOEQ2djjK7bRuXLqX-6wWjicD2h/exec'

async function fetchData(e) {
    await fetch(e)
    .then(res => res.json())
    .then(data => console.log(data.length))
        
}

const output = fetchData(googleAppScriptUrl)


for(let i = 0; i <= output.data.length; i++) {
    document.getElementById("root").innerHTML = `<div className="card"><h1>${output.data[i].Title}</h1><p>${output.data[i].Content}</p><img src=${output.data[i].Image} /></div>`
}