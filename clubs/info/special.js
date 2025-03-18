const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbzKczUtTVXfohypV-hL1EDAFJEm2CpyRfAHJhi7CsOEQ2djjK7bRuXLqX-6wWjicD2h/exec'
async function fetchData(e) {
    await fetch(e)
    .then(r => r.json())
    .then(d => makeCards(d))
}
fetchData(googleAppScriptUrl)
dateFooter()

function createSection(title, content) {
  const section = document.createElement('section');
  const header = document.createElement('h2');
  header.textContent = title;
  section.appendChild(header);
  const paragraph = document.createElement('p');
  paragraph.textContent = content;
  section.appendChild(paragraph);

  // Get the footer element
  const footer = document.getElementById('footer');

  // Insert the section before the footer
  if (footer) { // Check if the footer exists
    footer.parentNode.insertBefore(section, footer);
  } else {
    console.error("Footer element not found!");
    document.body.appendChild(section); //Fallback to appending to body if footer isn't present.
  }
}

document.addEventListener('DOMContentLoaded', function(e) {
    for(let i = 0; i < e.length; i++) { 
        createSection(e[i].Title, e[i].Description);
    }
});
