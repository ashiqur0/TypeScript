
type Products = {
    name: string,
    price: number,
    quantity: number,
    discount?: number
}
 
const calculateTotalPrice = (products: Products[]): number => {
    return products.reduce((acc, prod) => {
        const price = prod.price * prod.quantity
        if (prod?.discount) {
            acc = price - price * prod.discount / 100 + acc;
        } else {
            acc = price;
        }

        return acc; 
    }, 0);
}

const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));