//Opdracht 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één enkel
// tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam]
// zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Test of jouw functie ook werkt wanneer er een
// ander tv object wordt meegegeven.


function object (details) {
return ` ${details.brand} ${details.type} - ${details.name} `
}

console.log(object(inventory[0]))

//Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
// parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Test of jouw functie ook werkt
// wanneer er een andere tv-prijs wordt meegegeven.

function object2(detail) {
    return ` €${detail.price},- `
}

console.log(object2(inventory[0]))

// Opdracht 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
// zowel inches als cm. Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes)
// en de groottes op de volgende manier samenvoegt:
// [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier
// schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm).
// Test of jouw functie werkt in alle mogelijke gevallen.
function object3(details) {
        return `${details.availableSizes} inches (${(details.availableSizes * 2.54)} cm)`
}

console.log(object3(inventory[0]))

//krijg het niet voor elkaar om meerdere schermgroottes te laten zien...?

//Opdracht 4d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
const mergeDetails = document.getElementById('collection')

const product = document.createElement('p')
product.textContent = object(inventory[0])

const price = document.createElement('p')
price.textContent = object2(inventory[0])

const screen = document.createElement('p')
screen.textContent = object3(inventory[0])

mergeDetails.appendChild(product)
mergeDetails.appendChild(price)
mergeDetails.appendChild(screen)

// Opdracht 4e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk ' +
// 'niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie
// de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De overkoepelende "tv-generator-functie"
// verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!
function tvGenerator(arrayOfObjects) {

}

tvGenerator(inventory.length)