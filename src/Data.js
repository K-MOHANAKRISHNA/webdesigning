import React, { Component } from 'react'

export default class data extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             name : "krishna"
        }
    }
    
    render() {
        setTimeout(() => {
            this.setState({name:"mohana krishna"})
            
        },5000);
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
