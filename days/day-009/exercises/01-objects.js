// Storing a single product's data inside an Object
const product = {
    name: "Nike Air Max",
    price: 1200000,
    stock: 50,
    isAvailable: true,
    category: "Footwear"
};

// Accessing data with dot notation
console.log("Product name:", product.name);
console.log("Price:", product.price);
console.log("Stock:", product.stock);

// Updating an existing value
product.price = 1350000;
console.log("Price after increase:", product.price);

// Adding a new key that didn't exist before
product.discount = 10;
console.log("Discount:", product.discount, "%");

// Viewing the entire object at once
console.log("Full product data:", product);
