import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Helloo....'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'goodbye'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message:"Goodbyee!!"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind;

// "this" keyword is undefned in event handler thats why event binding is necessary.     performance implication
// 1. event binding through "bind" keyword in render method.
// 2. using arrow function, in this we call the event handler and return the value thatswhy () is required "this.clickHandler()".
// 3. binding the event handler in the constructor.
// 4. class property as arrow function.