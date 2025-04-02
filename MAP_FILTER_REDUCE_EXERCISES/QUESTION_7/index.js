const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
];
const productsCategory = products.reduce((accumulatorProduct, currentProduct) => {
    const category = currentProduct.category;
    if (accumulatorProduct[category] == null) {
        accumulatorProduct[category] = [];
    }
    accumulatorProduct[category].push(currentProduct);
    return accumulatorProduct;
}, {});
const averagePrice = Object.keys(productsCategory).map(category => {
    const sum = productsCategory[category].reduce((accumulatorPrice, currentPrice) => accumulatorPrice + currentPrice.price, 0);
    return { category: category, average: sum / productsCategory[category].length };
});
const highPriceCategories = averagePrice.filter(category => category.average > 50);
console.log(highPriceCategories);