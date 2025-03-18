
function makeCards(e) 
{
    let divRoot = document.getElementById("root");
    divRoot.innerHTML = "";
    for(let i = 0; i < e.length; i++) {
        //console.log(i)
        //<img src=${e[i].Image} />
        divRoot.innerHTML += `<div class="card"><h1>${e[i].Title}</h1><p><a href="fblaweb/clubdetails.html?section=${e[i].Section}">Learn More...</a></p></div>`
    }
}

async function fetchData() 
{
    let googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbzKczUtTVXfohypV-hL1EDAFJEm2CpyRfAHJhi7CsOEQ2djjK7bRuXLqX-6wWjicD2h/exec'

    await fetch(googleAppScriptUrl)
    .then(r => r.json())
    .then(d => makeCards(d))
}

fetchData()