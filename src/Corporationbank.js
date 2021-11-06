import React, { Component } from 'react'

export default class Corporationbank extends Component {
    render(props) {
        return (
            <div>
                <h1>Corporation bank is located at {this.props.location} with account name of {this.props.data.name}</h1>
            </div>
        )
    }
}
