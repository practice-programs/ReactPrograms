import React from 'react';

function TextComponent(props) {
    console.log(props)
return (
    <div>
        <h1>{props.message}</h1>
    </div>
)
}

export default TextComponent;