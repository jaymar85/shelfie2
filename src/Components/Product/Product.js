import React from 'react';


function Product(props) {
    
    return (
        /* Product component to display a name, price, and image based on props.
        This link is a way to compare the structure of the content as the Product Component is equal to 
        Clothing Component in my noDB project. 
        https://github.com/jaymar85/my-noDB-project/blob/master/src/Component/Main/Products/Clothing.js */
        <div className="inventory-container">
            <h5>{props.name}</h5>
            <h5>${props.price}.00</h5>
            <img src={props.image} alt="Scenery picture"/>
        </div>
    )
}

export default Product;