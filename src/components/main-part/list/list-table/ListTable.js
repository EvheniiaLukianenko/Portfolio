import React, { Component } from 'react';
import ListItem from './list-item/ListItem';
import {store} from "../../../../index";
import {actions} from "../../../../store/actions/actions";

export default class ListTable extends Component {
    constructor(props) {
        super(props);
        store.dispatch({type: actions.FETCH_LIST, payload: {listId: 1, pageNumber: 1}});
    }
    listData;

    getListData() {
        this.listData = store.getState().list;
    }

    render() {
        this.getListData();
        let listItems = this.listData.data.map((item, index) =>
            <ListItem item={item} index={index}  key={item.id}></ListItem>
        );
        return (
            <table className="table table-light table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>       
        )
    }
}
