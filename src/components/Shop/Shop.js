import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../fakeData';
import Product from '../Product/Product';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [posts, setposts] =useState(first10);
    const handleAddProduct =(product) => {
        console.log('product added',product);
    }
    return (
        <div className="posts">
            <div className="product-container">
                <ul>
                    {posts.map(post=> <Product handleAddProduct={handleAddProduct} product={post}></Product>)}
                </ul>
            </div>
            <div className="cart-container">
                <h3>Shopping Cart</h3>
            </div>
        </div>
    );
};

export default Shop;