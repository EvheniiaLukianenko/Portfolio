import React, { Component } from 'react'
import {actions} from "../../../../../store/actions/actions";
import {store} from "../../../../../index";

export default class ListItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.openItem = this.openItem.bind(this);
        this.closeItem = this.closeItem.bind(this);
    }


    handleClick() {
        store.getState().item.id === this.props.item.id ? this.closeItem() : this.openItem() ;
    }

    openItem() {
        store.dispatch({type: actions.FETCH_ITEM, payload: {listId: 1, itemId: this.props.item.id}});
        // this.props.history.push(`/${2}/notes/${1}`);
    }

    closeItem() {
        store.dispatch({type: actions.CLOSE_ITEM});
        // this.props.history.push(`/${2}/notes/${1}`);
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
