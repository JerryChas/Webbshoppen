//Hämta produkter från local storage
const totalPrice = document.getElementById('total-price')
const productContainer = document.getElementById('product-container');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

console.table(cart);

const emptyCart = document.getElementById('empty-cart');

renderCartItems();

// Knapp som tömmer localstorage
emptyCart.addEventListener('click', () => {
    localStorage.removeItem('cart');
    console.log('tömmer varukorg');
    console.log(`cart: ${cart}`)
    productContainer.innerHTML = "";
    totalPrice.textContent = "0 kr";

});




function renderCartItems() {
    const productCards = cart.map((p) => {
        return `
                  <div class="product-card">
                  <h3>${p.name}</h3>
                  <p>Price: ${p.price} kr</p>
                  </div>
                  `;
    });
    productContainer.innerHTML = productCards.join('');

}


sumPrice = cart.reduce((accu, item) => {
    return accu + item.price
}, 0)
console.log(sumPrice)
totalPrice.textContent = `${sumPrice}`;


//Betala
const payBtn = document.getElementById("pay");
console.log(payBtn);
payBtn.addEventListener("click", () => {
    alert(`
Okej Tack för din beställning!! \n 🚚 dina varor är påväg`);
    localStorage.removeItem("cart");
    productContainer.innerHTML = "";
    totalPrice.textContent = "0 kr";


    console.log(cart);



})