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