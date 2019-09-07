import React, {Component} from 'react';

class Form extends Component {

    constructor() {
        super();

        this.state = {
            input1: "",
            input2: "",
            input3: ""
        }
    }

    handleInput1(val) {
        this.setState({input1: val});
    }

    handleInput2(val) {
        this.setState({input2: val});
    }

    handleInput3(val) {
        this.setState({input3: val});
    }

    handlerReset = () => {
        this.setState({
            ...this.state,
            input1: "",
            input2: "",
            input3: ""
        })
    }

    render() {
        return (
            <div>
                <div className="input1">
                    <h4>Image URL:</h4>
                    <input
                    value={this.state.input1}
                    onChange={ e => this.handleInput1(e.target.value)}
                    type="text"
                    >
                    </input>
                </div>

                <div className="input2">
                    <h4>Product Name:</h4>
                    <input
                    value={this.state.input2}
                    onChange={ e => this.handleInput2(e.target.value)}
                    type="text"
                    >
                    </input>
                </div>

                <div className="input3">
                    <h4>Price</h4>
                    <input
                    value={this.state.input3}
                    onChange={ e => this.handleInput3(e.target.value)}
                    type="text"
                    >
                    </input>
                </div>
                <button onClick={this.handlerReset}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;