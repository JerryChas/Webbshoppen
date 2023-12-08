/* 
Ni väljer om ni använder produktdatan i js eller json och om ni vill lägga till 
fler properties som bilder etc.

Ni får också använda ett api som t.ex. https://fakestoreapi.com/ för att generara
ut fiktiva produkter därifrån istället för från en lokal js/json.
*/

const products = [
    { id: 1, name: 'T-shirt', category: 'kläder', price: 100 },
    { id: 2, name: 'Hörlurar', category: 'elektronik', price: 250 },
    { id: 3, name: 'Keps', category: 'kläder', price: 50 },
    { id: 4, name: 'Mobiltelefon', category: 'elektronik', price: 500 }
];

const cart = [];
//plockat ut de kategorier som finns och lagrat i en array.
const categories = products.reduce((category, product) => {
    if(!category.includes(product.category)) category.push(product.category);
    return category;
},[])

console.log(categories);

//Skriver ut filterknappar på sidan
const filterbtns = categories.map((c)=>{
    return `<li>${c}</li>`
})
document.getElementById('filter-btns').innerHTML = filterbtns.join('');
console.log(filterbtns);
