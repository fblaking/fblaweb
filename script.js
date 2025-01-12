const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbzKczUtTVXfohypV-hL1EDAFJEm2CpyRfAHJhi7CsOEQ2djjK7bRuXLqX-6wWjicD2h/exec'

async function fetchData(e) {
    await fetch(e)
    .then(
        a=> {
                if(a.ok) {
                console.log("👍")
                a.json();
                }
                else {
                console.error("👎")
                }
            }
    )
    .then(t => console.log(t))
}




// for(let i = 0; i <= data.body.Title.length; i++) {
//     document.getElementById("root").innerHTML = ` <div className="card"><h1>${data.body.Tit}</h1><p>{content}</p></div>`
// }