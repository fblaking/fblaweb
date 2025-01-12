const googleAppScriptUrl = "https://script.google.com/macros/s/AKfycbzKczUtTVXfohypV-hL1EDAFJEm2CpyRfAHJhi7CsOEQ2djjK7bRuXLqX-6wWjicD2h/exec"

fetch(googleAppScriptUrl)
.then(response => response.json())
.then(data => setRecords(data))
.then(() => setIsDataLoading(false))                
.catch(err => console.log(err));

// .then(
//     e=> {
//             if(e.ok) {
//             console.log("👍")
//             e.json();
//             }
//             else {
//             console.error("👎")
//             }
//         }
// )
// .then(e => console.log(e))

// for(let i = 0; i <= data.body.Title.length; i++) {
//     document.getElementById("root").innerHTML = ` <div className="card"><h1>${data.body.Tit}</h1><p>{content}</p></div>`
// }