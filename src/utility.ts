// Utility Types: Pick, Omit, Partial, Required. Readonly, Record

type Product = {
    id: number,
    name: string,
    price: number,
    stock: number
    color?: string
}

// Pick: Create a type with only the specified properties
type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>;

// Omit: Create a type by omitting the specified properties
type ProductWithoutStock = Omit<Product, 'stock' | "color">;

// Required: Make all properties required
type ProductWithColor = Required<Product>;
const product: ProductWithColor = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    stock: 50,
    color: "Silver" // for Required type, color must be provided
};

// Partial: Make all properties optional
type ProductOptional = Partial<Product>;
const product2: ProductOptional = {
    id: 2,
    name: "Phone",
    price: 499.99,
    stock: 100
    // color is optional here
}

// Readonly: Make all properties read-only
type ProductWithReadOnly = Readonly<Product>;
const product3: ProductWithReadOnly = {
    id: 2,
    name: "Phone",
    price: 499.99,
    stock: 100  // all value are read-only, and must be provided
    // color is optional here
}

// Record: Create an object type with specified key-value pairs
const emptyObj: Record<string, unknown> = {};
const product4 = {
    id: 3,
    name: "Tablet",
    price: 299.99
}