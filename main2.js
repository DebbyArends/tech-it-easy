// Opdracht 1A: Gebruik een array-methode om een array te maken met alle tv-type namen.
// Log de uitkomst in de console.

const tvTypes = inventory.map((inventory) => {
    return inventory.type
})

console.log(tvTypes)

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten)
// die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOutTv = inventory.filter((inventory) => {
    if (inventory.originalStock - inventory.sold === 0) {
        return inventory
    }
})

console.log(soldOutTv)

//Opdracht 1c: Gebruik een array-methode om alle tv's te
// verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const tvWithAmbilight = inventory.filter((inventory) => {
    if (inventory.options.ambiLight === true) {
        return inventory
    }
})

console.log(tvWithAmbilight)

//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de
// uitkomst in de console.

inventory.sort((a ,b) => {
    return a.price - b.price
})

console.log(inventory)

//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

const soldTvs = inventory.map((inventory) => {
    return inventory.sold
})

let totalTvs = 0

for (let i = 0; i < soldTvs.length; i++) {
    totalTvs = totalTvs + soldTvs[i]
}

console.log(totalTvs)

//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
const totalSoldTvs = document.getElementById('sold-tvs')
totalSoldTvs.textContent = totalTvs

//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

const stockBought = inventory.map((inventory) => {
    return inventory.originalStock
})

let totalStock = 0

for (let i = 0; i < stockBought.length; i++) {
    totalStock = totalStock + stockBought[i]
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