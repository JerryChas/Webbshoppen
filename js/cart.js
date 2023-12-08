//Hämta produkter från local storage

let varukorg = JSON.parse(localStorage.getItem("cart"));

console.table(varukorg)

const emptyCart = document.getElementById('empty-cart');

//Knapp som tömmer localstorage
emptyCart.addEventListener('click', () => {
    localStorage.removeItem('cart');
    console.log('tömmer varukorg')
});

