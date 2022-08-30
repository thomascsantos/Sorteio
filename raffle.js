let div = document.getElementsByClassName("div")[0]
let enviar=document.querySelector("button").addEventListener("click", () => {
    let numero = Math.floor(Math.random() * 100)
    div.innerHTML = ` <h1>${numero}</h1><br>`
})