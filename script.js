const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbzKczUtTVXfohypV-hL1EDAFJEm2CpyRfAHJhi7CsOEQ2djjK7bRuXLqX-6wWjicD2h/exec'

let datalen;
let output;
async function fetchData(e) {
    await fetch(e)
    .then(res => res.json())
    .then(data => {
        datalen = data.length
        output = data
    })
        
}

fetchData(googleAppScriptUrl)


for(let i = 0; i <= datalen; i++) {
    document.getElementById("root").innerHTML = `<div className="card"><h1>${output.data[i].Title}</h1><p>${output.data[i].Content}</p><img src=${output.data[i].Image} /></div>`
}