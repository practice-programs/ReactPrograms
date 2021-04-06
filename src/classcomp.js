import React, { Component } from 'react';

class PracticeComp2 extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.book} written by {this.props.author}</h1>
            </div>
        )
    }
}

export default PracticeComp2;