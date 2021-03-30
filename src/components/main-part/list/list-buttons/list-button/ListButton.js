import React, { Component } from 'react'
import {store} from "../../../../../index";
import {actions} from "../../../../../store/actions/actions";

export default class ListButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        store.dispatch({type: actions.FETCH_LIST, payload: {listId: this.props.listData.id, pageNumber: 1}});
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <button className="button button--violet">{this.props.listData.title}</button>
            </div>
        )
    }
}
