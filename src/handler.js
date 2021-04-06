import React from 'react';

function FunctionClick() {

    function clickHandler() {
        console.log('Button is cliclked')
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick;

// in class components method is accessed as {this.clickHandler}