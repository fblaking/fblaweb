const res = await fetch("https://script.google.com/macros/s/AKfycbzKczUtTVXfohypV-hL1EDAFJEm2CpyRfAHJhi7CsOEQ2djjK7bRuXLqX-6wWjicD2h/exec")
const data = await res.json();
console.log(data)
// for(let i = 0; i <= data.body.Title.length; i++) {
//     document.getElementById("root").innerHTML = ` <div className="card"><h1>${data.body.Tit}</h1><p>{content}</p></div>`
// }