import React, { Component } from 'react'

export default class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.index+1}</th>
                <td>{this.props.item.title}</td>
                <td>{this.props.item.description}</td>
            </tr>
        )
    }
}
