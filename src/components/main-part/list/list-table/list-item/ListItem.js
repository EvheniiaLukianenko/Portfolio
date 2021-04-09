import React, { Component } from 'react'
import {actions} from "../../../../../store/actions/actions";
import {store} from "../../../../../index";
import {Link} from 'react-router-dom';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemClicked : false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.openItem = this.openItem.bind(this);
        this.closeItem = this.closeItem.bind(this);
    }
    listData;

    getListData() {
        this.listData = store.getState().list;
    }

    handleClick() {
        store.getState().item.id === this.props.item.id ? this.closeItem() : this.openItem() ;
    }

    openItem() {
        // console.log('currentListId', this.currentListId);
        store.dispatch({type: actions.FETCH_ITEM, payload: {listId: this.listData.listId, itemId: this.props.item.id}});
        this.state.itemClicked = true; 
    }

    closeItem() {
        store.dispatch({type: actions.CLOSE_ITEM});
        this.state.itemClicked = false;
    }

    removeItem(itemId) {
        console.log(this.listData.data);
        console.log('item id', this.props.item.id);
        store.dispatch({type: actions.REMOVE_ITEM, payload: itemId});
        console.log(this.listData.data);
    }

    render() {
        this.getListData();
        return (
            // <Link to={`/profile/${this.props.item.id}`}>
                <tr className={ this.state.itemClicked ? "list__item active" : "list__item"}>
                    <th scope="row">{this.props.item.id}</th>
                    <td>
                        <a href="#" onClick={this.handleClick}>{this.props.item.title}</a>
                    </td>
                    <td>
                        <a href="#" onClick={this.handleClick}>{this.props.item.description}</a>
                    </td>
                    <td><button onClick={() => this.removeItem(this.props.item.id)} className='button button--small'>Remove</button></td>
                </tr>
            // </Link>
        )
    }
}
