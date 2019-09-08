import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {

    constructor() {
        super();

        this.state = {
            image_url: "",
            product_name: "",
            price: 0
        }
        this.handleCreate = this.handleCreate.bind(this);
    }
    // Input changes
    handleInput1(val) {
        // console.log(val);
        this.setState({image_url: val});
    }

    handleInput2(val) {
        this.setState({product_name: val});
    }

    handleInput3(val) {
        this.setState({price: val});
    }
    //Pressing cancel allows all the inputs fields to reset
    handlerReset = () => {
        this.setState({
            ...this.state,
            image_url: "",
            product_name: "",
            price: 0
        })
    }

    // method for creating/adding new products to inventory
    handleCreate() {
        axios
            .post('/api/product', this.state)
            .then(() => {
                this.props.getItems(); // this will shoot back up to the app.js & fire it's getItems method 
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                {/* Image URL */}
                <div className="input1">
                    <h4>Image URL:</h4>
                    <input
                    value={this.state.image_url}
                    onChange={ e => this.handleInput1(e.target.value)}
                    type="text"
                    >
                    </input>
                </div>
                {/* Product Name Input */}
                <div className="input2">
                    <h4>Product Name:</h4>
                    <input
                    value={this.state.product_name}
                    onChange={ e => this.handleInput2(e.target.value)}
                    type="text"
                    >
                    </input>
                </div>
                {/* Price Input */}
                <div className="input3">
                    <h4>Price</h4>
                    <input
                    value={this.state.price}
                    onChange={ e => this.handleInput3(e.target.value)}
                    type="text"
                    >
                    </input>
                </div>
                <button onClick={this.handlerReset}>Cancel</button>
                <button onClick={this.handleCreate}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;