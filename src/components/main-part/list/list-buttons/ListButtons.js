import React, { Component } from 'react';
import ListButton from './list-button/ListButton';
import {LISTS} from "../../../../mocks/lists";

export default class ListButtons extends Component {
    lists = LISTS.map((item, index) =>
        <div key={item.id} className="col-3">
            <ListButton listData={item} />
        </div>
    );

    render() {
        return (
            <div className="list-buttons row justify-content-center">
                {this.lists}
            </div>
        )
    }
}
