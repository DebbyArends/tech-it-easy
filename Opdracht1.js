// Opdracht 1A: Gebruik een array-methode om een array te maken met alle tv-type namen.
// Log de uitkomst in de console.

const tvTypeName = inventory.map((tv) => {
    return tv.name
})

console.log(tvTypeName)

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten)
// die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOutTv = inventory.filter((soldTvs) => {
        return soldTvs.originalStock === soldTvs.sold
})

console.log(soldOutTv)

//Opdracht 1c: Gebruik een array-methode om alle tv's te
// verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const tvWithAmbilight = inventory.filter((light) => {
    return light.options.ambiLight === true
})

console.log(tvWithAmbilight)

//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de
// uitkomst in de console.

 function sorting(tv) {
   return tv.sort((a,b) => a.price - b.price)
}

console.log(sorting(inventory))
