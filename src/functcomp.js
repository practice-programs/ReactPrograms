import React from 'react';

function PracticeComp(props) {
    console.log(props)
return (
    <div>
        <h1>{props.book} written by {props.author}</h1>
        {props.children}
    </div>
)
}

export default PracticeComp;