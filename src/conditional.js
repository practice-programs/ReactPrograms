import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        // Short circuit method

        return this.state.isLoggedIn && <div>Welcomeee.....</div>

//--------------------------------------------------------------------------
        // Ternary conditional operator

        // return this.state.isLoggedIn ? (
        //     <div>Welcomee.........</div>) : (
        //         <div>Byeeee....</div>
        //     )

        //-------------------------------------------------------------------
        //element variable

        // let message
        // if(this.state.isLoggedIn){
        //     message= <div>Welcome......</div> 
        // } else {
        //     message = <div>byyeee....</div>
        // }
        // return <div>{message}</div>
        // -------------------------------------------------------------------
        //if/else condition

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome......</div> 
        //     )
        // }

        // else{
        //     return(
        //         <div>byyeee....</div> 
        //     )
        // }

    }
}

export default UserGreeting;