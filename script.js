let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const totalDisplay = document.getElementById("total");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price} 
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    totalDisplay.textContent = total;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}