import React, { Component } from 'react';
import ListItem from './list-item/ListItem';
import {store} from "../../../../index";
import {actions} from "../../../../store/actions/actions";

export default class ListTable extends Component {
    constructor(props) {
        super(props);
        store.dispatch({type: actions.FETCH_LIST});
    }


    getListData() {
        // return getListData(1, 1);
        return store.getState().listData;

    }

    listItems = this.getListData().data.map((item, index) =>
        <ListItem item={item} index={index}  key={item.id}></ListItem>
    );

    render() {
        
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
                    {this.listItems}
                </tbody>
            </table>       
        )
    }
}
