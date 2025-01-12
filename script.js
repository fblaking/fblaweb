const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbzKczUtTVXfohypV-hL1EDAFJEm2CpyRfAHJhi7CsOEQ2djjK7bRuXLqX-6wWjicD2h/exec'
async function fetchData(e) {
    await fetch(e)
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i <= data.length; i++) {
        console.log("👍")
        document.getElementById("root").innerHTML += `<div className="card"><h1>${data[i].Title}</h1><p>${data[i].Content}</p><img src=${data[i].Image} /></div>`
    }
    })
}
fetchData(googleAppScriptUrl)
