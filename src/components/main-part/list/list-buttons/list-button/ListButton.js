import React, { Component } from 'react'

export default class ListButton extends Component {

    render() {
        return (
            <div>
                <button className="button button--violet">{this.props.listData.title}</button>
            </div>
        )
    }
}
