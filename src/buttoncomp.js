import React, { Component } from 'react';

class ButtonComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            item: ''
        }
    }

    handlleItemChange = (event) => {
        this.setState({
            item: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.item}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Add Items</label>
                    <textarea type='text' value={this.state.item} onChange={this.handlleItemChange}></textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default ButtonComponent;