import React, {Component} from 'react';
import Product from '../Product/Product';


class Dashboard extends Component {

    render() {
        return (
            <div>
                {/* Now we are "accessing" or getting the data from App component. To 'get' the information we must
                use "this.props" followed by the attribute name, Ex. {this.props.inventoryList}. To see another
                example of this go to my my-noDB-project - Clothingpage.js & Equipmentpage.js using anothing 
                component link here - https://github.com/jaymar85/my-noDB-project */} 
                {/*Dashboard Component would be equal to my Clothingpage & Equipmentpage. Product Component would 
                 be equal to the Clothing Component. Dashboard is where we're mapping over the inventory 
                 to pass the current product information to the Product component through props. */}
                {this.props.inventoryList.map((item, i) => {
                    return (
                    <Product key={i}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    />
                    );
                })}

            </div>
        )
    }
}

export default Dashboard;


/* This is one way to access and map over using pure jsx, but above we are using another component to wrap 
over mapping and accessing props from App */

/* {this.props.inventoryList.map((item, i) => {
    return (
    <div key={i}>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.image}</p>
    </div>
    );
})} */

