
function sections(e) 
{
  let divContent = document.getElementById("content")
  divContent.innerHTML = "";    

  const urlParams = new URLSearchParams(window.location.search);
  const sectionParam = urlParams.get('section');

  const club = e.find(club => club.Section === sectionParam);

  let clubInfo = `<div class="card"><h1>${club.Title}</h1><p>${club.Description}</p><br/><p><a href="clubs.html">Back to Clubs</p></div>`;
  divContent.innerHTML += clubInfo; 
}
async function fetchData() 
{
    let googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbzKczUtTVXfohypV-hL1EDAFJEm2CpyRfAHJhi7CsOEQ2djjK7bRuXLqX-6wWjicD2h/exec'

    await fetch(googleAppScriptUrl)
    .then(r => r.json())
    .then(d => sections(d))
}

fetchData()



