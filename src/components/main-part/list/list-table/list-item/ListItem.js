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
    listData;


    handleClick() {
        store.getState().item.id === this.props.item.id ? this.closeItem() : this.openItem() ;
    }

    
    getListData() {
        this.listData = store.getState().list;
    }

    openItem() {
        console.log('currentListId', this.currentListId);
        store.dispatch({type: actions.FETCH_ITEM, payload: {listId: this.listData.listId, itemId: this.props.item.id}});
        // this.props.history.push(`/${2}/notes/${1}`);
    }

    closeItem() {
        store.dispatch({type: actions.CLOSE_ITEM});
        // this.props.history.push(`/${2}/notes/${1}`);
    }

    render() {
        this.getListData();
        return (
            <tr onClick={this.handleClick} className="list__item">
                <th scope="row">{this.props.index+1}</th>
                <td>{this.props.item.title}</td>
                <td>{this.props.item.description}</td>
            </tr>
        )
    }
}
