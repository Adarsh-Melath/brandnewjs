const cart = [
    { product: 'Laptop', price: 50000, quantity: 1 },
    { product: 'Mouse', price: 500, quantity: 2 },
    { product: 'Keyboard', price: 1500, quantity: 1 },
];

let total;
function calculateTotal(arr) {
    total = arr.reduce((acc, cart) => acc + cart.price * cart.quantity, 0);
    return total;
}

console.log('Total: ' + calculateTotal(cart));

const expensiveProducts = cart
    .filter((cart) => cart.price > 1000)
    .map((cart) => cart.product);
console.log(expensiveProducts);

cart.map((cart) => (cart.totalPrice = cart.quantity * cart.price));
console.log(cart);
