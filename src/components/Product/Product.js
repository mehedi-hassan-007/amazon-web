import React from 'react';
import './Product.css';

const Product = (props) => {
  const{name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
           <div className= "product-img">
             <img src={img} alt="" /></div> 
           <div className="product-name">
             <h4>{name}</h4>
             <br/>
             <p><small>by: {seller}</small></p>
             <p>${price}</p><br/>
             <p><small>only {stock} left in the stock - order soon</small></p>
             <button onClick={() => props.handleAddProduct(props.product)}className="add-btn">add ton cart</button>
            </div> 
        </div>
    );
};

export default Product;