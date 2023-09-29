import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from "./product";
import "./shop.css"
//rfce
    function Shop () {

      //This is the home-base for our shopping page being rendered.
      //The playful data from the products.js file is imported and being used to map our Product Component.
      //So basically props from the PRODUCTS Array is going to be passed into the Product component for our items. 

  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Norbert Shop</h1>
        </div>

        <div className='products'>
            {PRODUCTS.map((product)=> (
          //list of products is rendered from the Product component onto the Shop component.
               <Product data={product}/>
                ))}
        </div>
    </div>
  );
};

export default Shop;


