import React, { useState } from 'react';
import './Shop.css';
import OrderCart from '../OrderCart/OrderCart';
import fakeData from '../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [posts, setposts] =useState(first10);
    const [Cart, setCart]=useState([]);
    const handleAddProduct =(product) => {
        console.log('product added',product);

    const newCart = [...Cart, product];
    setCart(newCart);    }
    return (
        <div className="posts">
            <div className="product-container">
                <ul>
                    {posts.map(post=> <Product handleAddProduct={handleAddProduct} product={post}></Product>)}
                </ul>
            </div>
            <div className="cart-container">
                <OrderCart Cart={Cart}></OrderCart>
        
            </div>
        </div>
    );
};

export default Shop;