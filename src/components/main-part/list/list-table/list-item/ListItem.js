import React, { Component } from 'react'

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    // Check!!!
    handleClick(e) {
        e.preventDefault();
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        document.getElementById('profile').classList.toggle('active');
    }

    render() {
        return (
            <tr onClick={this.handleClick} className="list__item">
                <th scope="row">{this.props.index+1}</th>
                <td>{this.props.item.title}</td>
                <td>{this.props.item.description}</td>
            </tr>
        )
    }
}
