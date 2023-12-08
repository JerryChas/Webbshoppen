let filterbtns = document.getElementById('filter-btns');
const productContainer = document.getElementById("product-container");
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
const filterbtnsCategories = categories.map((c)=>{
    return `<li id="${c}">${c}</li>`
})
document.getElementById('filter-btns').innerHTML = filterbtnsCategories.join('');
console.log(filterbtnsCategories);

//Kontrollerar vilken knapp som klickas på 
let clickedCategories = "all"; 
filterbtns.addEventListener("click", function(event){
    clickedCategories = event.target.textContent;
    renderCards();
    console.log(clickedCategories);
})

// Rendera produkter på sidan från start
renderCards();

//Rendera producter på sidan
function renderCards(){
    const productCards = products.map((p) => {
    if (clickedCategories === "all"){
       return  `
              <div class="product-card">
              <h3>${p.name}</h3>
              <p>Price: ${p.price} kr</p>
              <h4>category: ${p.category}</h4>
              <button class="add-to-cart_btn">Add to cart</button>
              </div>
              `;
    } else if (clickedCategories === p.category){
return `
              <div class="product-card">
              <h3>${p.name}</h3>
              <p>Price: ${p.price} kr</p>
              <h4>category: ${p.category}</h4>
              <button class="add-to-cart_btn">Add to cart</button>
              </div>
              `;
    } 
    

    
})
productContainer.innerHTML = productCards.join('');


};



// if (clicked === 'kläder'){
    
// } else {
    
// }

