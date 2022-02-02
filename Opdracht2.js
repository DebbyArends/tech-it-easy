//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let totalTvs = 0

for (let i = 0; i < inventory.length; i++) {
    totalTvs = totalTvs + inventory[i].sold
}

console.log(totalTvs)

//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
const totalSoldTvs = document.getElementById('sold-tvs')
totalSoldTvs.textContent = totalTvs

//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let totalStock = 0

for (let i = 0; i < inventory.length; i++) {
    totalStock = totalStock + inventory[i].originalStock
}
console.log(totalStock)

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
const totalStockBought = document.getElementById('bought-stock')
totalStockBought.textContent = totalStock

//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
const unsoldTvs = totalStock - totalTvs
console.log(unsoldTvs)

const totalUnsoldTvs = document.getElementById('unsold-tvs')
totalUnsoldTvs.textContent = unsoldTvs
