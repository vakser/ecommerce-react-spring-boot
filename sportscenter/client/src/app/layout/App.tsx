import {useEffect, useState} from "react";
import {Product} from "../models/product.ts";

function App() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/products")
        .then(res => res.json())
            .then(data => setProducts(data.content));
    }, []);

    return (
        <div>
            <h1>Sports Center</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <p>Name: {product.name}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Brand: {product.productBrand}</p>
                    <p>Type: {product.productType}</p>
                </div>
            ))}
        </div>
    )
}

export default App
